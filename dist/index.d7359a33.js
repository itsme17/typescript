var Oven1 = function() {
    function Oven() {
    }
    Oven.prototype.turnOn = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Oven.prototype.turnOff = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Oven.prototype.bake = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Oven;
}();
var Stove1 = function() {
    function Stove() {
    }
    Stove.prototype.turnOn = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.turnOff = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.bake = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Stove;
}();
var Restaurant1 = function() {
    function Restaurant(name, equipment) {
        this._name = name;
        this._equipment = equipment;
    }
    Restaurant.prototype.Cook = function(item) {
        this._equipment.turnOn();
        this._equipment.bake(item);
        this._equipment.turnOff();
    };
    return Restaurant;
}();
var bakery = new Restaurant1("Bakery", new Oven1());
bakery.Cook("cookies");
var crepery = new Restaurant1("Crepery", new Stove1());
crepery.Cook("crepes"); //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */ 

//# sourceMappingURL=index.d7359a33.js.map
