import {ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy} from '@angular/router';
import {RouterCacheService} from './router-cache.service';
import {WelcomeComponent} from '../pages/welcome/welcome.component';
import { Injectable } from "@angular/core";

/**
 * 路由复用策略
 *    标签页路由缓存
 * @author yangyu
 */
@Injectable()
export class CachedRouteReuseStrategy extends RouteReuseStrategy {

  /**
   * 路由不可复用后，从此处获取路由，如果返回空，Angular会构造路由
   * @param route
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (route.routeConfig && route.routeConfig.loadChildren) {
      return null;
    }
    return RouterCacheService.getHandle(route['_routerState']['url']);
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig && route.routeConfig.loadChildren) {
      return false;
    }
    return !!RouterCacheService.getHandle(route['_routerState']['url']);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !(route.routeConfig && route.routeConfig.loadChildren);

  }

  /**
   * 判断当前活动路由将要激活的路由的所有节点是否可以复用
   * @param future
   * @param curr
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params);
  }

  /**
   * 路由断开时，存储路由；路由激活时，清空路由
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    const routerLink = route['_routerState']['url'];
    RouterCacheService.putHandle(routerLink, handle);
  }
}
