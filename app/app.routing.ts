import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { AddUserComponent } from "~/add-user/add-user.component";


const routes: Routes = [
    { path: "", redirectTo: "/add", pathMatch: "full" },
    { path: "add", component: AddUserComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }