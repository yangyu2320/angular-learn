import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RouterCacheService, Tab} from '../../router/router-cache.service';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  template: `
      <nz-tabset nzSize="small" [nzType]="'card'" [nzSelectedIndex]="getActiveTab()">
          <nz-tab *ngIf="fixedTab" [nzTitle]="titleTemplate" (nzClick)="changeTab(fixedTab)">
              <ng-template #titleTemplate>
                  <div>{{ fixedTab.title }}<i *ngIf="fixedTab.closeable" nz-icon nzType="close" class="ant-tabs-close-x"
                                              (click)="closeTab(fixedTab)"></i>
                  </div>
              </ng-template>
          </nz-tab>
          <nz-tab *ngFor="let tab of myTabs" [nzTitle]="titleTemplate" (nzClick)="changeTab(tab)">
              <ng-template #titleTemplate>
                  <div>{{ tab.title }}<i *ngIf="tab.closeable" nz-icon nzType="close" class="ant-tabs-close-x" (click)="closeTab(tab)"></i>
                  </div>
              </ng-template>
          </nz-tab>
      </nz-tabset>
  `,
  styles: [`.ant-tabs-bar {
      margin: 0 0px 0 0px;
  }

  .ant-tabs {
      height: 40px;
      margin: 0 10px 0 10px;
  }`]
})
export class WelcomeComponent implements OnInit {

  private activeTabIndex = 0;

  public fixedTab = new Tab('首页', '', false);

  public static tabs: Array<Tab> = [];

  public myTabs: Array<Tab> = [];

  constructor(private routerCacheService: RouterCacheService, public router: Router) {
  }

  ngOnInit() {
    this.myTabs = WelcomeComponent.tabs;
  }

  closeTab(tab: Tab) {
    let index = this.findTab(tab);
    WelcomeComponent.tabs.splice(this.findTab(tab), 1);
    RouterCacheService.deleteHandle(tab.routerLink);
    if (index == this.activeTabIndex) {
      if (WelcomeComponent.tabs.length <= index) {
        index--;
      }
      this.changeTab(WelcomeComponent.tabs[index]);
    }
  }

  newTab(tab: Tab): void {
    let index = this.findTab(tab);
    if (index < 0) {
      index = WelcomeComponent.tabs.push(tab);
    }
    this.activeTabIndex = index + 1;
  }

  findTab(tab: Tab): number {
    if (tab && tab.title) {
      for (let i = 0; i < WelcomeComponent.tabs.length; i++) {
        if (tab.title == WelcomeComponent.tabs[i].title) {
          return i;
        }
      }
    }
    return -1;
  }

  changeTab(tab: Tab) {
    this.activeTabIndex = this.findTab(tab) + 1;
    console.log(tab.routerLink);
    this.router.navigateByUrl(tab.routerLink);
  }

  getActiveTab(): number {
    return this.activeTabIndex;
  }
}
