import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  music: Object;
  message: object;
  editForm: FormGroup; edit =false; success = false

  constructor(private formBuilder: FormBuilder, private data: DataService,private router: Router) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      writers: ['', Validators.required],
      singer: ['', Validators.required],
      language: ['', Validators.required],
      isrc: ['', Validators.required]
      });
      this.data.getMusic().subscribe(data => {
        this.music = data
        console.log(this.music)
      }
    );
  }
  
  onEdit() {

    this.edit = true;
    if (this.editForm.invalid) { return window.alert("Invalid input!!Pls. enter again !");}

    this.data.putMusic(this.editForm.controls.title.value, this.editForm.controls.writers.value,this.editForm.controls.singer.value,this.editForm.controls.language.value,this.editForm.controls.isrc.value)
	   .subscribe(data=>{
           this.message = data ;
           this.success = true;
  })
  }
}
