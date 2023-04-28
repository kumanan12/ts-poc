export class TShirt{
    private color: string;
    /*
     *  Specify whether you want round neck or collored 
     */
    private type:string;

    constructor(color:TShirtColor, type: TShirtType){
        this.color= color;
        this.type = type;
    }
}

export enum TShirtColor {
    Red ="Red",
    Blue ="Blue",
}

export enum TShirtType {
    round = "round",
    collored = "collored"
}