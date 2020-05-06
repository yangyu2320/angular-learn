import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListComponent} from './order-list/order-list.component';
import {RouterModule, Routes} from '@angular/router';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {NzButtonModule, NzTableModule} from 'ng-zorro-antd';

const routes: Routes = [
  {path: '', component: OrderListComponent},
  {path: ':id', component: OrderDetailComponent}
];

@NgModule({
  declarations: [OrderListComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzButtonModule
  ]
})
export class OrderModule {
}
