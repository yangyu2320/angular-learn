import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NzTableModule} from 'ng-zorro-antd';

const routes: Routes = [
  {path: 'list', component: UserListComponent},
];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzTableModule
  ]
})
export class UserModule {
}
