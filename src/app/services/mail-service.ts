import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MailService{

  constructor(private http: HttpClient) {
  }

  send(email: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://formspree.io/f/xknyzyap',
        { name: email.name, replyto: email.email, subject: email.subject, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
  }
}
