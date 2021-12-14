"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine() {
        this._engineStatus = false;
    }
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
exports.Engine = Engine;
