import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-navbar-angular';

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  showSettings: boolean = true;
  isLoading: boolean = false;

  // Sidebar Togggling
  @ViewChild('drawer') drawer: any;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event['url'] == '/sample-pages/login' ||
          event['url'] == '/sample-pages/register' ||
          event['url'] == '/sample-pages/403' ||
          event['url'] == '/sample-pages/404' ||
          event['url'] == '/sample-pages/500' ||
          event['url'] == '/sample-pages/505'
        ) {
          this.showSidebar = false;
          this.showNavbar = false;
          this.showFooter = false;
          this.showSettings = false;
        } else {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
          this.showSettings = true;
        }
      }
    });

    // Spinner for lazyload modules
    router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit() {
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  toggleSidenav() {
    this.drawer.toggle();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
}
