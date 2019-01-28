import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Success is not final;failure is not fatal:it is the courage to continue that counts'),
    new Quote(2,'It is better to fail inoriginality than to succesd in imitation'),
    new Quote(3, "The road to success and the road to failure are almost exactly the same " ),
    new Quote(4, 'success usually comes to those who rae too busy to be looking for it ),
    new Quote(5, 'success is not accident its the result of of pefection,hard work and leaning from failure),
   
]

toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

constructor() { }
ngOnInit() {
}
}
