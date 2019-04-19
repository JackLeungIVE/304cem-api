import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
'@angular/forms';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  this.messageForm = this.formBuilder.group({
  name: ['', Validators.required],
  message: ['', Validators.required]
  });
  }
  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
    return;
    }
    this.success = true;
   }
}
