import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  options = [
    {
      icon: "card",
      url: "/home/Credit cards",
      name: "Credit cards",
      color: "success",
      link: "credit-cards"
    },
    {
      icon: "cart",
      url: "/home/Transactions",
      name: "Transactions",
      color: "secondary",
      link: "transactions"
    },
    {
      icon: "settings",
      url: "/home/Settings",
      name: "Settings",
      color: "tertiary",
      link: "settings"
    },
    {
      icon: "help-circle",
      url: "/home/Help & Feedback",
      name: "Help & Feedback",
      color: "warning",
      link: "help-and-feedback"
    }
  ];
}
