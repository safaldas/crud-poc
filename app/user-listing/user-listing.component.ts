import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user-listing',
  templateUrl: 'user-listing.component.html'
})

export class UserListingComponent {
  users: any = [];
  constructor() {
    this.users = [{
      name: 'Safal',
      occupation: 'Developer'
    },
    {
      name: 'Safal',
      occupation: 'Developer'
    }]
  }
}