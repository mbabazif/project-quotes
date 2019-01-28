export class Quote {
    public showAuthor:boolean
    constructor(public id:number, public name:string,public description:string,public completeDate:Date){
        this.showAuthor=false
    }
}
