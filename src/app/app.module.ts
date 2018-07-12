import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./shared/user.service";
import {UserListResolver} from "./contacts/user-list.resolver";


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/users'
            },
            {
                path: 'users',
                loadChildren: './contacts/contacts.module#ContactsModule'
            },
            {
                path: 'users-old',
                loadChildren: './contacts-old/contacts.module#ContactsOldModule'
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
