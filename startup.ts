import { HttpHeaders, Pipelines } from "./core/interceptor";
import { MessageInteceptor } from "./interceptors/message.interceptor";
import { TimeInterceptor } from "./interceptors/time.interceptor";

var time = new TimeInterceptor();
var msg = new MessageInteceptor();

Pipelines.addMiddleware(time);
Pipelines.addMiddleware(msg);

const invoke = Pipelines.initialize();
var headers = new HttpHeaders();
headers.append("X-Cool");
headers.append("X-NICE");
invoke({ url: "www.google.com", headers });
