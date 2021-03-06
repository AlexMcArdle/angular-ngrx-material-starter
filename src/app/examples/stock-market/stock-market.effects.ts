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

import {
  STOCK_MARKET_KEY,
  STOCK_MARKET_RETRIEVE,
  STOCK_MARKET_RETRIEVE_SUCCESS,
  STOCK_MARKET_RETRIEVE_ERROR
} from './stock-market.reducer';
import { StockMarketService } from './stock-market.service';

@Injectable()
export class StockMarketEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: StockMarketService
  ) {}

  @Effect()
  retrieveStock(): Observable<Action> {
    return this.actions$.ofType(STOCK_MARKET_RETRIEVE).pipe(
      tap(action =>
        this.localStorageService.setItem(STOCK_MARKET_KEY, {
          symbol: action.payload
        })
      ),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(action =>
        this.service.retrieveStock(action.payload).pipe(
          map(stock => ({
            type: STOCK_MARKET_RETRIEVE_SUCCESS,
            payload: stock
          })),
          catchError(err =>
            of({ type: STOCK_MARKET_RETRIEVE_ERROR, payload: err })
          )
        )
      )
    );
  }
}
