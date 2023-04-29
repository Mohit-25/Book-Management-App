import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {


  name=""
  price=""
  qty=""
  author=""
  availableInd:boolean=true;


  constructor(private bookservice: BookService,private router:Router) { }

  addbook() {
    console.log(this.name);
    console.log(this.price);
    console.log(this.qty);
    console.log(this.author);
    console.log(this.availableInd);


    let book =
    { "name": this.name,
      "price": this.price,
      "qty": this.qty,
      "author": this.author,
      "availableInd": this.availableInd 
    }
    
     this.bookservice.addbook(book).subscribe(resp=>{
       console.log(resp);
       alert("data saved");
       this.router.navigateByUrl("/listbook");


     },error=>{
       console.log(error);
     });

  }
}
