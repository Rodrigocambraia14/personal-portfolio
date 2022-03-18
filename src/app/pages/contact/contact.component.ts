import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
    submitted: boolean = false;
    btnText: string = 'Submit';

    constructor(private fb: FormBuilder) {}

    form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([ Validators.required, Validators.email])],
        subject: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        message: ['', Validators.required],
      });

  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;
    this.btnText = 'Thanks';
    console.warn(this.form.value);
  }

}
