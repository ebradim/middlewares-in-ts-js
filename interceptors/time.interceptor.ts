import { HttpHandler, HttpInterceptor, HttpRequest } from "../core/interceptor";

export class TimeInterceptor extends HttpInterceptor {
  handle(request: HttpRequest, next: HttpHandler) {
    console.log("TimeInterceptor was added to pipelines");
    var result = next(request);
    console.log(`TimeInterceptor is sending ${Math.random() * new Date().getMilliseconds()}
         to ${request.url} with headers: ${request.headers.getAll()}`);
    return result;
  }
}
