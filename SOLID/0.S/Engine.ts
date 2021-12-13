export class Engine {
    private _engineStatus: boolean = false;

    get engineStatus(): boolean {
        return this._engineStatus;
    }

    engineTurnOn() {
        this._engineStatus = true;
    }

    engineTurnOff() {
        this._engineStatus = false;
    }

}