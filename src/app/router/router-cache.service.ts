import {Injectable} from '@angular/core';
import {DetachedRouteHandle} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterCacheService {

  private tabs: Array<Tab> = [];

  private static handles: { [key: string]: DetachedRouteHandle } = {};

  constructor() {
    this.tabs.push(new Tab('用户列表', '/user', true));
    this.tabs.push(new Tab('用户详情', '/user/123', true));
    this.tabs.push(new Tab('合同列表', '/order', true));
    this.tabs.push(new Tab('合同详情', '/order/123', true));
  }

  getRouterCaches(): Array<Tab> {
    return this.tabs;
  }

  static putHandle(key: string, handel: DetachedRouteHandle)
  {
    if (handel) {
      RouterCacheService.handles[key] = handel;
    } else
    {
      RouterCacheService.deleteHandle(key);
    }
  }

  static deleteHandle(key: string){
    delete RouterCacheService.handles[key];
  }

  static getHandle(key : string) : DetachedRouteHandle{
    return RouterCacheService.handles[key];
  }
}

export class Tab {
  constructor(public title: string, public routerLink: string, public closeable: boolean) {
  }
}
