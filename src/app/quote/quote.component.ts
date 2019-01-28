import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(
      1,
      "Success is not final;failure is not fatal:it is the courage to continue that counts","nnnnnnn",new Date(2018, 3, 14)
    ),
    new Quote(
      2,
      "It is better to fail inoriginality than to succesd in imitation","t8iigftig",new Date(2018, 6, 9)
    ),
    new Quote(
      3,
      "The road to success and the road to failure are almost exactly the same","ttttttt",new Date(2018, 6, 9)
    ),
    new Quote(
      4,
      "success usually comes to those who rae too busy to be looking for it","dddddd",new Date(2018, 1, 12)
    ),
    new Quote(
      5,
      "success is not accident its the result of of pefection,hard work and leaning from failur","ddddddd",new Date(2018, 0, 18)
    )
  ];

  toogleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  constructor() {}
  ngOnInit() {}
}
