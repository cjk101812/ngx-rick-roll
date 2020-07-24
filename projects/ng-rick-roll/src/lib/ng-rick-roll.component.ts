import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-rick-roll',
  templateUrl: './ng-rick-roll.component.html',
  styles: [
  ]
})
export class NgRickRollComponent implements OnInit {
  @Input() showVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
