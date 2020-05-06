import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NzTableModule} from 'ng-zorro-antd';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: ':id', component: UserDetailComponent}
];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzTableModule
  ]
})
export class UserModule {
}
