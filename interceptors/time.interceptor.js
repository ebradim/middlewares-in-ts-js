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
exports.TimeInterceptor = void 0;
var interceptor_1 = require("../core/interceptor");
var TimeInterceptor = /** @class */ (function (_super) {
    __extends(TimeInterceptor, _super);
    function TimeInterceptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInterceptor.prototype.handle = function (request, next) {
        console.log("TimeInterceptor was added to pipelines");
        var result = next(request);
        console.log("TimeInterceptor is sending " + Math.random() * new Date().getMilliseconds() + "\n         to " + request.url + " with headers: " + request.headers.getAll());
        return result;
    };
    return TimeInterceptor;
}(interceptor_1.HttpInterceptor));
exports.TimeInterceptor = TimeInterceptor;
