import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.http.post('http://localhost:8000/api/sendmail', form.value)
        .subscribe(
        (data) => {
                console.log(data)
                alert('mail sent');
              },
            (error) => {
                console.log(error);
                alert('Need to setup email server address');
            }
        );
  }

}
