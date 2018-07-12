import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public loading = true;

  constructor(private router: Router) {
    router.events
    .subscribe((evt) => {
        if(evt instanceof NavigationStart) {
            this.loading = true;
        } else if(evt instanceof NavigationEnd) {
            this.loading = false;
        }
    })
}
  ngOnInit() {
  }

}
