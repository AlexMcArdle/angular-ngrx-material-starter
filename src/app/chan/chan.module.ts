import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { chanReducer } from '@app/chan/chan.reducer';
import { ChanEffects } from '@app/chan/chan.effects';
import { ChanRoutingModule } from '@app/chan/chan-routing.module';
import { ChanComponent } from '@app/chan/chan/chan.component';
import { ChanService } from '@app/core/chan/chan.service';
import { ChanThreadSubjectComponent } from '@app/chan/chan/thread/subject.component';

@NgModule({
  imports: [
    SharedModule,
    ChanRoutingModule,
    StoreModule.forFeature('chan', {
      chan: chanReducer,
    }),
    EffectsModule.forFeature([ChanEffects])
  ],
  declarations: [
    ChanComponent,
    ChanThreadSubjectComponent,
  ],
  providers: [ChanService]
})
export class ChanModule {
  constructor() {}
}
