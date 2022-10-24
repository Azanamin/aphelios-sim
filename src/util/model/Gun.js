export default class Gun {
    constructor( name, ammo, rating ){
        this.name = name;
        this.ammo = ammo;
        this.rating = rating;
    }

    Reset(){
        this.ammo = 50;
    }
}