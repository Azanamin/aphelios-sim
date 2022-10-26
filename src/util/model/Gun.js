export default class Gun {
    constructor( name, ammo, description ){
        this.name = name;
        this.ammo = ammo;
        this.description = description;
    }

    Reset(){
        this.ammo = 50;
    }
}