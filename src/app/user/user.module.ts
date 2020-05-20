import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NzTableModule} from 'ng-zorro-antd';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path: 'list', component: UserListComponent},
];

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzTableModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UserModule {
}
