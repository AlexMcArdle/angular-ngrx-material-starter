import { Component, OnInit } from '@angular/core';

import { routerTransition, ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { environment as env } from '@env/environment';
import { ChanThreadsModel, ChanThreadSubjectModel } from '@app/chan/chan/models/chan.models';

@Component({
  selector: 'anms-chan',
  templateUrl: './chan.component.html',
  styleUrls: ['./chan.component.scss'],
  animations: [routerTransition]
})
export class ChanComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  version = env.versions;

  threads: ChanThreadSubjectModel[] = [];

  examples = [
    { link: 'todos', label: 'Todos' },
    { link: 'stock-market', label: 'Stock Market' },
    { link: 'theming', label: 'Theming' }
  ];

  constructor() {}

  ngOnInit() {}
}
