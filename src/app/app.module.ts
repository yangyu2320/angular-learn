import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {WelcomeModule} from './pages/welcome/welcome.module';
import {UserModule} from './user/user.module';
import {RouteReuseStrategy} from '@angular/router';
import {CachedRouteReuseStrategy} from './router/cached-route-reuse-strategy';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WelcomeModule,
    UserModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    {provide: RouteReuseStrategy, useClass: CachedRouteReuseStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
