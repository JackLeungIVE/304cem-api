import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getMusic() {
    return this.http.get('http://localhost:5000/all')
    }
  putMusic(title:string, singer:string, writers:string, language:string, isrc:string){
    const httpOptions = new  HttpHeaders()
    // .set('Accept','application/json') 
	  .set('Content-type', 'application/json')    
    
    return this.http.put('http://localhost:5000/update',{            
      'title':`${title}`,
      'writers':`${writers}`,
      'singer':`${singer}`,
      'language':`${language}`,
      'isrc':`${isrc}`
        },{headers:httpOptions})
        .pipe(
          retry(1)
        )
  }
  addMusic(title:string, singer:string, writers:string, language:string, isrc:string){

    const httpOptions = new  HttpHeaders()
    .set('Accept','application/json') 
	  .set('Content-type', 'application/json')
	  // .set('Access-Control-Allow-Origin','*')
	  // .set('Access-Control-Allow-Credentials', 'true')
	  // .set('X-Requested-With', 'HttpRequest')
    
    console.log(JSON.stringify(httpOptions));

    return this.http.post('http://localhost:5000/create',{            
      'title':`${title}`,
      'writers':`${writers}`,
      'singer':`${singer}`,
      'language':`${language}`,
      'isrc':`${isrc}`
        },{headers:httpOptions}).pipe(
          retry(1)
        );

      }
    }
