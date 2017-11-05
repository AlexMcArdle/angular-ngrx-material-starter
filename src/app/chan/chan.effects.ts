import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';

import { LocalStorageService, Action } from '@app/core';
import { ChanService } from '@app/core/chan/chan.service';
import { CHAN_THREADS_GET } from '@app/chan/chan.reducer';


@Injectable()
export class ChanEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: ChanService
  ) {}

  @Effect({dispatch: false})
  getThreads(): Observable<Action> {
    return this.actions$
      .ofType(CHAN_THREADS_GET)
      .pipe(
        tap(action =>
          console.log(action)
        )
      );
  }
}
