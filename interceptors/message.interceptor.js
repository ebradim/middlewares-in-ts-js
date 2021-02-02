"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageInteceptor = void 0;
var interceptor_1 = require("../core/interceptor");
var MessageInteceptor = /** @class */ (function (_super) {
    __extends(MessageInteceptor, _super);
    function MessageInteceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageInteceptor.prototype.handle = function (request, next) {
        console.log("MessageInteceptor was added to pipelines");
        var result = next(request);
        request.headers.removeAll();
        console.log("MessageInteceptor is sending MSG\n         to " + request.url + " with headers: " + request.headers.getAll());
        return result;
    };
    return MessageInteceptor;
}(interceptor_1.HttpInterceptor));
exports.MessageInteceptor = MessageInteceptor;
