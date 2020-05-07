import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouterCacheService, Tab} from '../../router/router-cache.service';

@Component({
  selector: 'app-welcome',
  template: `
      <nz-tabset nzSize="small" [nzType]="'card'" [nzSelectedIndex]="getActiveTabIndex()">
          <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate" (nzClick)="changeTab(tab)">
              <ng-template #titleTemplate>
                  <div>{{ tab.title }}<i *ngIf="tab.closeable" nz-icon nzType="close" class="ant-tabs-close-x" (click)="closeTab(tab)"></i>
                  </div>
              </ng-template>
          </nz-tab>
      </nz-tabset>
  `,
  styles: [`.ant-tabs-bar {
      margin: 0;
  }

  .ant-tabs {
      height: 40px;
      margin: 0 10px 0 10px;
  }`]
})
export class WelcomeComponent implements OnInit {

  public static instance: WelcomeComponent;

  /**
   * 激活的Tab
   */
  private activeTab: Tab;

  /**
   * 所有Tab
   */
  public tabs: Array<Tab> = [new Tab('首页', '', false)];

  constructor(private routerCacheService: RouterCacheService, public router: Router) {
  }

  ngOnInit() {
    WelcomeComponent.instance = this;
  }

  /**
   * 新增Tab
   * @param tab
   */
  newTab(tab: Tab): void {
    let index = this.findTab(tab);
    if (index < 0) {
      this.tabs.push(tab);
    }
    this.activeTab = tab;
  }

  /**
   * 关闭Tab
   * @param tab
   */
  closeTab(tab: Tab) {
    let index = this.findTab(tab);
    this.tabs.splice(index, 1);
    if (tab == this.activeTab) {
      if (this.tabs.length <= index) {
        index--;
      }
      this.router.navigateByUrl(this.tabs[index].routerLink, { skipLocationChange: true}).then(success => {
        if (success) {
          this.activeTab = tab;
          RouterCacheService.deleteHandle(tab.routerLink);
        }
      })
    } else {
      RouterCacheService.deleteHandle(tab.routerLink);
    }
  }

  /**
   * 切换Tab
   * @param tab
   */
  changeTab(tab: Tab) {
    this.router.navigateByUrl(tab.routerLink, { skipLocationChange: true}).then(success => {
      if (success) {
        this.activeTab = tab;
      }
    });
  }

  /**
   * 获取激活Tab对应序号
   */
  getActiveTabIndex(): number {
    return this.findTab(this.activeTab);
  }

  /**
   * 获取指定Tab对应序号
   * @param tab
   */
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

  /**
   * 是否存在Url对应Tab
   * @param url
   */
  hasUrlTab(url: string): boolean {
    for (let i = 0; i < this.tabs.length; i++) {
      if (url == this.tabs[i].title) {
        return true;
      }
    }
    return false;
  }
}
