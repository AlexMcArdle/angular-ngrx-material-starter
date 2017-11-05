import { Component, OnInit, Input } from '@angular/core';

import { routerTransition, ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { environment as env } from '@env/environment';
import { ChanThreadSubjectModel } from '@app/chan/chan/models/chan.models';

@Component({
  selector: 'anms-thread-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  animations: [routerTransition]
})
export class ChanThreadSubjectComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  version = env.versions;

  @Input()
  subject: ChanThreadSubjectModel;

  threads = [
    { title: 'TheTitle', text: 'TheText' }
  ];

  constructor() {}

  ngOnInit() {}
}
