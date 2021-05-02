import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpAndFeedbackPageRoutingModule } from './help-and-feedback-routing.module';

import { HelpAndFeedbackPage } from './help-and-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpAndFeedbackPageRoutingModule
  ],
  declarations: [HelpAndFeedbackPage]
})
export class HelpAndFeedbackPageModule {}
