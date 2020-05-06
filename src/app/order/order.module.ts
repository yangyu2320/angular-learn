import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule, Routes} from '@angular/router';
import {OrderDetailComponent} from './order-detail/order-detail.component';

const routes: Routes = [
  {path: 'order', component: OrderListComponent},
  {path: 'order/:id', component: OrderDetailComponent}
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule {
}
