import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
require('nativescript-localstorage');

registerElement('CardView', () => CardView);

import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,

  selector: 'ns-add',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  inputDataForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: RouterExtensions) {
    this.inputDataForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      occupation: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  submit() {
    let currentUsersListInStorage = localStorage.getItem('users');
    let usersList=[];
    if (currentUsersListInStorage) {
      usersList = JSON.parse(currentUsersListInStorage);
    }
    if (this.inputDataForm.valid) {
      usersList.push(this.inputDataForm.value);
      localStorage.setItem('users', JSON.stringify(usersList));
      console.log(JSON.stringify(localStorage.getItem('users')));
    }else{
        this.validateForm('inputDataForm')
    }
  }
  validateForm(form:string) {
    Object.keys(this[form].controls).forEach(field => {
      const control = this[form].get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
    viewAll() {
        this.router.navigate(['user-listing']);
    }
}
