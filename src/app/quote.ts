export class Quotes {
    public showDescription:boolean;

    constructor(public id:number,public date:Date, public name: string, public author:string,public quote:string,public upVotes:number,public downVotes:number){
        this.showDescription=false;
    }
}
