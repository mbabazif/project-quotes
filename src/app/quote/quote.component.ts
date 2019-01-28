import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  upvote = 0;
  downvote = 0;
  quotes = [
    new Quote(
      1,
      "Success is not final;failure is not fatal:it is the courage to continue that counts",
      "success",
      new Date(2018, 3, 14,),"grace"
    ),
    new Quote(
      2,
      "It is better to fail in originality than to succesd in imitation",
      "imitation",
      new Date(2018, 6, 9),"flore"
    ),
    new Quote(
      3,
      "The road to success and the road to failure are almost exactly the same",
      "failure",
      new Date(2018, 6, 9),"shema"
    ),
    new Quote(
      4,
      "success usually comes to those who rae too busy to be looking for it",
      "busy",
      new Date(2018, 1, 12),"gloria"
    ),
    new Quote(
      5,
      "success is not accident its the result of of pefection,hard work and leaning from failur",
      "result",
      new Date(2018, 0, 18),"dan"
    )
  ];

  addNewGoal(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
    console.log(this.quotes);
  }
  toogleDetails(index) {
    this.quotes[index].showdescription = !this.quotes[index].showdescription;
  }

  constructor() {}
  ngOnInit() {}
}
