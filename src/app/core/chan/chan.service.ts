import { Injectable } from '@angular/core';

@Injectable()
export class ChanService {
  constructor() {}

  getThreads(page: number = 0) {
    return ['thread'];
  }
}
