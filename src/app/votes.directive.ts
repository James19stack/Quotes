import { Directive , ElementRef, Input, OnInit } from '@angular/core';
import { Quotes } from './quote';


@Directive({
  selector: '[appVotes]'
})
export class VotesDirective implements OnInit{
  @Input() quote:Quotes;
  @Input() upVotes:number;
  constructor(private elem:ElementRef) {
      this.elem.nativeElement.style.backgroundColor='cornsilk';
      this.elem.nativeElement.style.color="black"
  }
ngOnInit(){

}
}
