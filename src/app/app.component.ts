import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio';
  showHeader: boolean = false;
  menuItems = [
    {
      label: 'Projects',
      path: 'projects'
    },
    {
      label: 'Experience',
      path: 'experience'
    },
    {
      label: 'Contact Me',
      path: 'contact'
    },
    {
      label: 'Skills',
      path: 'skills'
    },
    {
      label: 'Education',
      path: 'education'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    this.showNavigationBar();
  }

  private showNavigationBar() {
    this.router.events.subscribe((val) => {
      // console.log('Value: ', val)
      if (val instanceof NavigationEnd) {
        if (val.url === '/home') {
          this.showHeader = false;
        }else{
          this.showHeader = true;
        }
      }
    })
  }

}
