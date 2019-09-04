import {Component, ViewChild} from '@angular/core';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  // @ts-ignore
  @ViewChild(WelcomeComponent)
  welcomeComponent: WelcomeComponent;

  constructor(public router: Router) {

  }

  openUI(routerLink: string, title: string) {
    console.log('test');
    this.welcomeComponent.newTab(title);
    if (title == '工作空间') {
      this.router.navigateByUrl('/user/user');
    } else {
      this.router.navigateByUrl('/user/user/123');
    }
  }
}
