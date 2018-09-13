import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";


import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AddUserComponent } from "~/add-user/add-user.component";
import { UserListingComponent } from "~/user-listing/user-listing.component";
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent, AddUserComponent, UserListingComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
