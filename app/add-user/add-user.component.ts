import { Component, OnInit } from "@angular/core";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-add",
    moduleId: module.id,
    templateUrl: "./add-user.component.html",
})
export class AddUserComponent implements OnInit {
    first_name: string = '';
    occupation: string = '';
    constructor(private router: RouterExtensions) { }

    ngOnInit(): void {
    }

    submit() {

    }
    viewAll() {
        this.router.navigate(['user-listing']);
    }
}