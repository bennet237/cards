import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(public loadingController: LoadingController, public router: Router) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loggin in...',
      spinner: 'lines',
      duration: 5000,
      translucent: true,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      animated: true
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/home']);
    }, 0);
  }
}
