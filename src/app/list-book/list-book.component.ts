import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Options } from '@angular-slider/ngx-slider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit{

  value: number = 70;
  highValue: number = 90;
  options: Options= {
    floor: 0,
    ceil: 5000
  };

  constructor(private bookservice:BookService,private toastr: ToastrService){}

  books=[]

  ngOnInit(): void {
    this.bookservice.getAllBooks().subscribe(resp=>{
      this.books=resp;
    })
  }

  filterbook()
  {
    this.bookservice.filter(this.value,this.highValue).subscribe(resp=>{
      this.books=resp;
    })
  }

  delete(id:any)
  {
     this.bookservice.delete(id).subscribe(resp=>
      {
        
        this.books=this.books.filter(book=> book["bookId"] == id)
        console.log(resp);

        this.toastr.success('Book Deleted...!');
      })

  }



  

}
