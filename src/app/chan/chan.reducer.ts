import { Action } from '@app/core';

export const initialState = {
  loading: false,
  threads: null,
  error: null,
};

export const CHAN_KEY = 'CHAN';
export const CHAN_THREADS_GET = 'CHAN_THREADS_GET';
export const CHAN_THREADS_GET_SUCCESS = 'CHAN_THREADS_GET_SUCCESS';
export const CHAN_THREADS_GET_ERROR = 'CHAN_THREADS_GET_ERROR';

export function chanReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CHAN_THREADS_GET:
      return Object.assign({}, state, {
        loading: true,
        threads: null,
        error: null,
      });
    case CHAN_THREADS_GET_ERROR:
      return Object.assign({}, state, {
        loading: false,
        threads: null,
        error: action.payload
      });
      case CHAN_THREADS_GET_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        threads: action.payload,
        error: null,
      });

    default:
      return state;
  }
}