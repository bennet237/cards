import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  constructor(public router: Router) {}

  navToLogin(){
    this.router.navigateByUrl('/login');
  }
}

