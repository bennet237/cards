import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpAndFeedbackPage } from './help-and-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: HelpAndFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpAndFeedbackPageRoutingModule {}
