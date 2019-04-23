import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../data.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private bs: DataService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required ],
      writers: ['', Validators.required ],
      singer: ['', Validators.required ],
      language: ['', Validators.required ],
      isrc: ['', Validators.required ],
    });
  }
  addMusic(title, writers, singer, language, isrc) {
    this.bs.addMusic(title, writers, singer, language, isrc);
  }
  ngOnInit() {
  }

}