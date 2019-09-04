import { NgModule } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {CommonModule} from '@angular/common';
import {NzIconModule} from 'ng-zorro-antd';


@NgModule({
  imports: [WelcomeRoutingModule, NzTabsModule, CommonModule, NzIconModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
