import { Pipe, PipeTransform } from '@angular/core';
import { NgAnalyzedFile } from '@angular/compiler';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): any {
    let date:Date=new Date();
    let updatedDate:any= new Date(date.getFullYear(),date.getMonth(),date.getDate());
    let dateDiffernce=Math.abs(updatedDate-value);
    const secondsInDay=86400;
    let dateDiffernceInSeconds=dateDiffernce*0.001;
    let dateCount=dateDiffernceInSeconds/secondsInDay;
    
    if(dateCount>=0.5){
      return Math.ceil(dateCount)+" "+"days ago.";
    } else{
      return "today.";
    }
    
  }

}
