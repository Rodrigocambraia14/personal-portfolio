import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as express from "express";
import * as bodyParser from "body-parser";
import { HttpHeaders } from '@angular/common/http';
import { MailService } from 'src/app/services/mail-service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
    submitted: boolean = false;
    btnText: string = 'Submit';

    constructor(private fb: FormBuilder,
                private mailService: MailService) {}

    form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.compose([ Validators.required, Validators.email])],
        subject: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
        message: ['', Validators.required],
      });

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submitted = true;
    this.btnText = 'Thanks';

    if (this.form.valid) {
      const request = 
      {
        email: this.form.value.email,
        name: this.form.value.name,
        subject: this.form.value.subject,
        messages: this.form.value.message
      }
      this.mailService.send(request);

      return this.btnText;
      
    }
    else 
      return this.btnText = 'Formulário inválido !'
  }

}
