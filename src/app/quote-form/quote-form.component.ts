import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  formHead={
    'font-size':'2em',
    'display':'float-left',
    'border':'1px solid green',
    'border-radius':'10px',
    'background-color':'rgb(73, 55, 30)',
    'color':'white',
    'padding-left':'15px'
 }

 @Input() quote:Quotes;
 newQuote= new Quotes(0,new Date(),'','','',0,0);

 @Output() addQuote= new EventEmitter<any>();

 submitForm(){
   this.addQuote.emit(this.newQuote);
   this.newQuote= new Quotes(0,new Date(),'','','',0,0);
 }

  constructor() { }

  ngOnInit(){
  }

}
