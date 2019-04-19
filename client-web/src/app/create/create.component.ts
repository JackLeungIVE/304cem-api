import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
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
