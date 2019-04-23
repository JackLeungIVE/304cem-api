import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMusic() {
    return this.http.get('http://localhost:5000/all')
    }
  addMusic(title, writers, singer, language, isrc) {
      const obj = {
        title: title,
        writers: writers,
        singer: singer,
        language: language,
        isrc: isrc
      };
      this.http.post(`http://localhost:5000/create`, obj)
          .subscribe(res => console.log('Done'));
    }
}
