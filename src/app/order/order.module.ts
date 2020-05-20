import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule, Routes} from '@angular/router';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {NzButtonModule, NzTableModule} from 'ng-zorro-antd';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';

const routes: Routes = [
  {path: 'list', component: OrderListComponent},
  {path: ':id', component: OrderDetailComponent}
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class OrderModule {
}
