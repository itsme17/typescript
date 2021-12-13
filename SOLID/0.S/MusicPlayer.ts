export class MusicPlayer{
    private _musicLevel:number = 0;
    private _defaultMusicLevel:number = 50;

    get musicLevel():number{
        return this._musicLevel;
    }

    set musicLevel(value:number){
        this._musicLevel = value;
        this._defaultMusicLevel = value;
    }

    turnMusicOn(){
        this._musicLevel = this._defaultMusicLevel;
    }

    turnMusicOff(){
        this._musicLevel = 0;
    }
}