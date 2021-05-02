import { Component, OnInit } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { AuthConstants } from '../../../config/auth-constants';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  postData = {
    username: '',
    password: '',
    email: ''
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
    console.log(this.postData);
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    let email = this.postData.email.trim();
    return (
      this.postData.username && this.postData.email && this.postData.password && email.length>0 && password.length>0 && username.length>0
    );
  }

  signUpAction() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if(res.userData) {
            //storing the user data
            this.storageService.store(AuthConstants.AUTH, res.userData).then(
              (res: any) => {
                this.overlayService.presentLoading();
              }
            );
          } else {
            this.toastService.presentToast('Data already exists, please enter new details');
          }
        }, (error: any) => {
          this.toastService.presentToast('Network issue');
        } 
      );
    } else {
      this.toastService.presentToast('Please enter email, username or password');
    }
  }

}
