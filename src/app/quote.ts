export class Quote {
    upvote=0;
    downvote=0;
    public showdescription:boolean
    constructor(public id:number, public name:string,public description:string,public completeDate:Date,public Author:string){
        this.showdescription=false,
        this.upvote=0;
        this.downvote=0;
    }
}
