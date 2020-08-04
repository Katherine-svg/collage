import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  FormData: any;

  constructor(private builder: FormBuilder
    ,         private contact: ContactService
    ,         private router: Router) { }

  ngOnInit(): void {

    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required, Validators.minLength(5),
        Validators.maxLength(30)]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      });
      }

      onSubmit(FormData) {
        console.log(FormData);
        this.contact.PostMessage(FormData)
        .subscribe(response => {
        // window.open('https://mailthis.to/confirm', '_blank');
        location.href = 'https://mailthis.to/confirm';
        // this.goToConfirmed();
        // console.log(response);
        }
        /*
        , error => {
        // console.warn(error.responseText);
        // console.log({ error });
        }   */
        );

}
// https://mailthis.to/#alias
goToConfirmed() {
  this.router.navigate(['confirmed']);
}
}
