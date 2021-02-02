export abstract class HttpInterceptor {
  abstract handle(request: HttpRequest, next: HttpHandler): any;
}

export const pipes: ((request: HttpRequest) => HttpEvent)[] = [];

export const sendRequest = (request: HttpRequest): HttpEvent => {
  return { url: request.url, headers: request.headers };
};
export class Pipelines {
  static addMiddleware = (pipe: HttpInterceptor) => {
    if (pipes.length === 0) {
      pipes.push(function (request: HttpRequest) {
        return pipe.handle(request, sendRequest);
      });
    } else {
      var before = pipes[pipes.length - 1];
      pipes.push((req: HttpRequest) => pipe.handle(req, before));
    }
  };
  static initialize = () => {
    return pipes[pipes.length - 1];
  };
}
export class HttpRequest {
  constructor(public url: string, public headers: HttpHeaders) {}
}

export type HttpHandler = (req: HttpRequest) => HttpEvent;
export type HttpEvent = { url: string; headers: HttpHeaders };
export class HttpHeaders {
  private headers: string[] = [];
  append(header: string) {
    this.headers.push(header);
  }
  getAll() {
    return this.headers;
  }
  removeAll() {
    this.headers.splice(0);
  }
}
