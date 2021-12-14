"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Engine_1 = require("./Engine");
var MusicPlayer_1 = require("./MusicPlayer");
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._miles = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._musicPlayer = new MusicPlayer_1.MusicPlayer();
        this._engine = new Engine_1.Engine();
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Car.prototype.drive = function () {
        if (this._engine.engineStatus === false || this._fuel <= 0) {
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    };
    return Car;
}());
exports.Car = Car;
