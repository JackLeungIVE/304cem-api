import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  message: object;
  angForm: FormGroup; registered =false; success = false

  constructor(private formBuilder: FormBuilder, private data: DataService,private router: Router) {}

  ngOnInit() {
    this.angForm = this.formBuilder.group({
      title: ['', Validators.required],
      writers: ['', Validators.required],
      singer: ['', Validators.required],
      language: ['', Validators.required],
      isrc: ['', Validators.required]
      });
  }

  onRegister() {
    this.registered = true;
    if (this.angForm.invalid) { return window.alert("Invalid input!!Pls. enter again !");}

    this.data.addMusic(this.angForm.controls.title.value, this.angForm.controls.writers.value,this.angForm.controls.singer.value,this.angForm.controls.language.value,this.angForm.controls.isrc.value)
	   .subscribe(data=>{
           this.message = data ;
           this.success = true;
  })
  }
}