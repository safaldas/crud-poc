import { Component, OnInit } from "@angular/core";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

@Component({
    selector: "ns-add",
    moduleId: module.id,
    templateUrl: "./add-user.component.html",
})
export class AddUserComponent implements OnInit {
    first_name: string = '';
    occupation: string = '';
    constructor() { }

    ngOnInit(): void {
    }

    submit() {

    }
}