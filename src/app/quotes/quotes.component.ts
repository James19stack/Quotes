import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[

    new Quotes(1,new Date(2020,2,4),"James Maina", "Maya Angelou","If your always trying to be normal you will never know how amazing you can be."),
    new Quotes(1,new Date(2020,2,4),"James Maina", "Albert Einstein","The true prrof of intelligence is not the level of knowledge but imagination."),
  ];

upVotes(index){
  this.quotes[index].upVotes++;
}  
downVotes(index){
  this.quotes[index].downVotes++;
}
liked(index){
  let myStyles={
    'background-color':this.quotes[index] ? 'blue' : 'default',
  }
  return myStyles;
}
  quoteDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }
  quoteDelete(complete,i){
    if(complete){
      let deleteIt=confirm('Are you sure you want to delete ${this.quotes[i].quote}');
      if(deleteIt){
        this.quotes.splice(i,1);
      }
    }
  }
  addNewQuote(newQuote){
    let quoteLength=this.quotes.length;
    newQuote.id=quoteLength++;
    newQuote.date= new Date(newQuote.date);
    this.quotes.push(newQuote);
    console.log(newQuote);
  }
  public span="space"
  public margin="span"

  bodyHead={
    'background-color':'black',
    'text-align':'center',
    'font-size':'2em',
    'color':'white'

  }
  myStyles={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
    'height': '15vh',
    'font-size': '50px',
    'padding-top': '20px'
  }
  footer={
    'background-color':'black',
    'color':'white',
    'text-align':'center'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
