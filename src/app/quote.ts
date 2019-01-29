export class Quote {
  upvote = 0;
  downvote = 0;
  public showAuthor: boolean;
  public showLikes: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,
    public Author: string,
    public upvotes: number,
    public downvotes: number,
  ) {
    (this.showAuthor = false), (this.showLikes = false);
  }
}
