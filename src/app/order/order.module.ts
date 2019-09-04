import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from '../user/user-list/user-list.component';
import {UserDetailComponent} from '../user/user-detail/user-detail.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: 'order', component: OrderListComponent },
  { path: 'order/:id', component: OrderDetailComponent }
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
