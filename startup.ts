import { HttpHeaders, PipeBuilder } from "./core/interceptor";
import { MessageInteceptor } from "./interceptors/message.interceptor";
import { TimeInterceptor } from "./interceptors/time.interceptor";

var time = new TimeInterceptor();
var msg = new MessageInteceptor();

PipeBuilder.addPipeline(time);
PipeBuilder.addPipeline(msg);

const invoke = PipeBuilder.initialize();
var headers = new HttpHeaders();
headers.append("X-Cool");
headers.append("X-NICE");
invoke({ url: "www.google.com", headers });
