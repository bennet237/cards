import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { AuthConstants } from 'src/config/auth-constants';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  postData = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private overlayService: OverlayService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  validateInputs() {
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    return ( this.postData.username && this.postData.password && username.length > 0 && password.length > 0 );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.userData) {
            //storing the user data
            this.storageService.store(AuthConstants.AUTH, res.userData);
            this.overlayService.presentLoading();
          } else {
            this.toastService.presentToast('incorrect password');
          }
        },(error: any) => {
          this.toastService.presentToast('Network Issue');
        }
      );
    } else {
      this.toastService.presentToast('Please enter email/username or password');
    }
  }
}
