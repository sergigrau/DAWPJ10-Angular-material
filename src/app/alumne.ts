export class Alumne {
    nom:string;
    nota:number;
    fcts:boolean;

    constructor(n:string, no:number, practiques:boolean){
        this.nom=n;
        this.nota=no;
        this.fcts=practiques;
    }
}