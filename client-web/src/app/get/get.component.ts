import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  
  music: Object;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getMusic().subscribe(data => {
      this.music = data
      console.log(this.music)
    }
  )
  }

  
}
