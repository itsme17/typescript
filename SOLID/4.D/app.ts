interface cookingMethod {
    turnOn();
    turnOff();
    bake(item:string);
}
class Oven implements cookingMethod{
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

class Stove implements cookingMethod{
    private _isOn : boolean;

    public turnOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public turnOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}
class Restaurant {
    private _name : string;
    private _equipment : any;

    constructor(name : string , equipment : any) {
        this._name = name;
        this._equipment = equipment;
    }

    public Cook(item : string) {
        this._equipment.turnOn();
        this._equipment.bake(item);
        this._equipment.turnOff();
    }
}


let bakery = new Restaurant("Bakery",new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
