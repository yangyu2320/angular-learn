import {Component, OnInit, ViewChild} from '@angular/core';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {Router} from '@angular/router';
import {RouterCacheService, Tab} from './router/router-cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  tabs: Array<Tab>;

  // @ts-ignore
  @ViewChild(WelcomeComponent)
  welcomeComponent: WelcomeComponent;

  constructor(private routerCacheService: RouterCacheService, private router: Router) {
  }

  openUI(tab: Tab) {
    this.welcomeComponent.newTab(tab);
    console.log(tab.routerLink);
    this.router.navigateByUrl(tab.routerLink, {skipLocationChange: true});
  }

  ngOnInit(): void {
    this.tabs = this.routerCacheService.getRouterCaches();
  }
}
