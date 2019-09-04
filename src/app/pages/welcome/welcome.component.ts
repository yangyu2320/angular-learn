import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  template: `
      <nz-tabset nzSize="small" [nzType]="'card'" [nzSelectedIndex]="activeTabIndex">
          <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate">
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

  activeTabIndex = 0;

  tabs: Array<Tab> = [];

  constructor(public router: Router) {
  }

  ngOnInit() {
    const tab = new Tab('欢迎');
    tab.closeable = false;
    this.tabs.push(tab);
  }

  closeTab(tab: Tab) {
    this.tabs.splice(this.findTab(tab), 1);
  }

  newTab(title: string): void {
    let tab = new Tab(title);
    let index = this.findTab(tab);
    if (index < 0) {
      index = this.tabs.push(tab);
    }
    this.activeTabIndex = index;
  }

  findTab(tab: Tab): number {
    if (tab && tab.title) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (tab.title == this.tabs[i].title) {
          return i;
        }
      }
    }
    return -1;
  }
}

export class Tab {

  public closeable: boolean = true;

  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}
