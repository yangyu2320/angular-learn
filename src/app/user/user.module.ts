import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'user', component: UserListComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule {
}
