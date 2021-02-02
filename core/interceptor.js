"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHeaders = exports.HttpRequest = exports.PipeBuilder = exports.sendRequest = exports.pipes = exports.HttpInterceptor = void 0;
var HttpInterceptor = /** @class */ (function () {
    function HttpInterceptor() {
    }
    return HttpInterceptor;
}());
exports.HttpInterceptor = HttpInterceptor;
exports.pipes = [];
var sendRequest = function (request) {
    return { url: request.url, headers: request.headers };
};
exports.sendRequest = sendRequest;
var PipeBuilder = /** @class */ (function () {
    function PipeBuilder() {
    }
    PipeBuilder.addPipeline = function (pipe) {
        if (exports.pipes.length === 0) {
            exports.pipes.push(function (request) {
                return pipe.handle(request, exports.sendRequest);
            });
        }
        else {
            var before = exports.pipes[exports.pipes.length - 1];
            exports.pipes.push(function (req) { return pipe.handle(req, before); });
        }
    };
    PipeBuilder.initialize = function () {
        return exports.pipes[exports.pipes.length - 1];
    };
    return PipeBuilder;
}());
exports.PipeBuilder = PipeBuilder;
var HttpRequest = /** @class */ (function () {
    function HttpRequest(url, headers) {
        this.url = url;
        this.headers = headers;
    }
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders() {
        this.headers = [];
    }
    HttpHeaders.prototype.append = function (header) {
        this.headers.push(header);
    };
    HttpHeaders.prototype.getAll = function () {
        return this.headers;
    };
    HttpHeaders.prototype.removeAll = function () {
        this.headers.splice(0);
    };
    return HttpHeaders;
}());
exports.HttpHeaders = HttpHeaders;
