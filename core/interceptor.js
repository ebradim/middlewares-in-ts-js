"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHeaders = exports.HttpRequest = exports.Pipelines = exports.sendRequest = exports.pipes = exports.HttpInterceptor = void 0;
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
var Pipelines = /** @class */ (function () {
    function Pipelines() {
    }
    Pipelines.addMiddleware = function (pipe) {
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
    Pipelines.initialize = function () {
        return exports.pipes[exports.pipes.length - 1];
    };
    return Pipelines;
}());
exports.Pipelines = Pipelines;
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
