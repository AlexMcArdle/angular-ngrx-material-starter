import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanComponent } from '@app/chan/chan/chan.component';

const routes: Routes = [
  {
    path: 'chan',
    component: ChanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChanRoutingModule {}
