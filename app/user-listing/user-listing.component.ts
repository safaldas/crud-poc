import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user-listing',
  templateUrl: 'user-listing.component.html'
})
export class UserListingComponent implements OnInit {
  users: any = [];
  constructor() {
    this.users = [
      {
        name: 'Safal',
        occupation: 'Developer'
      },
      {
        name: 'Safal',
        occupation: 'Developer'
      }
    ];
  }
  ngOnInit() {
    let currentUsersListInStorage = localStorage.getItem('users');
    this.users = JSON.parse(currentUsersListInStorage);
  }
}
