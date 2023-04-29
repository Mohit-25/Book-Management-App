import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  constructor(private httpclient :HttpClient) { }

  
addbook(book:any):Observable<any>
{ 
    return this.httpclient.post(environment.apiUrl+"/book",book);
}
getAllBooks():Observable<any>
{ 
   return this.httpclient.get(environment.apiUrl+"/book");
}
filter(min:any,max:any):Observable<any>
{
   return this.httpclient.get(environment.apiUrl+"/priceFilter/"+min+"/"+max);
}

search(name:any,min:any,max:any):Observable<any>
{
  return this.httpclient.get(environment.apiUrl+"/search/"+name+"/"+min+"/"+max);
}

delete(id:any):Observable<any>
{
  return this.httpclient.delete(environment.apiUrl+"/book/"+id);
}

}

