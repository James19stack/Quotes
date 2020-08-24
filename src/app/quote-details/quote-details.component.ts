import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quotes;
  
  @Output() delete= new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.delete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
