import { Engine } from './Engine';
import { MusicPlayer } from './MusicPlayer';

export class Car {
    public _musicPlayer: MusicPlayer;
    public _engine: Engine;
    private _fuel: number = 0;
    private _miles: number = 0;

    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._musicPlayer = new MusicPlayer();
        this._engine = new Engine();
    }

    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this._fuel;
    }

    addFuel(fuel: number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    drive() {
        if (this._engine.engineStatus === false || this._fuel <= 0) {
            return;
        }

        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}