import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lists = [
    {
      title:'User profile settings',
      content: 'You can change your profile image, name or password, logout or delete your data.'
    },
    {
      title:'Accounts',
      content: 'Tap to manage your accounts.Change icon, colour and description.'
    },
    {
      title:'Currencies',
      content: 'Tap to manage your currencies. Use more than one default currency.'
    },
    {
      title:'Categories',
      content: 'Tap to manage your categories. Change icon, description and others.'
    },
    {
      title:'Templates',
      content: 'Tap to manage your templates. Use templates to speed up the creation of a new account.'
    },
    {
      title:'Labels',
      content: 'Tap to manage your labels. Use labels for better filtering.'
    },
    {
      title:'Manage filters',
      content: 'Tap to manage your filters. You can use them for example in dashboard widgets.'
    },
    {
      title:'Automatic Rules',
      content: 'Tap to manage your automatic rules. These helps you categorize your records.'
    },
    {
      title:'Personal data & privacy',
      content: ''
    },
    {
      title:'About',
      content: 'Find out more about us'
    },
  ];

}
