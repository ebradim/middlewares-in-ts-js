import { HttpHandler, HttpInterceptor, HttpRequest } from "../core/interceptor";

export class MessageInteceptor extends HttpInterceptor {
  handle(request: HttpRequest, next: HttpHandler) {
    console.log("MessageInteceptor was added to pipelines");
    var result = next(request);
    request.headers.removeAll();
    console.log(`MessageInteceptor is sending MSG
         to ${request.url} with headers: ${request.headers.getAll()}`);
    return result;
  }
}
