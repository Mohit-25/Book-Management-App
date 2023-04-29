import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-criteria',
  templateUrl: './book-criteria.component.html',
  styleUrls: ['./book-criteria.component.css']
})
export class BookCriteriaComponent {

  authorname=""

  value: number = 70;
  highValue: number = 90;
  options: Options= {
    floor: 0,
    ceil: 5000
  };

  
  constructor(private bookservice:BookService){}
  books=[]
  searchvalue()
  {
       this.bookservice.search(this.authorname,this.value,this.highValue).subscribe(resp=>{

          this.books=resp;

       },error=>{
        console.log(error);
   
      });

  }
}
