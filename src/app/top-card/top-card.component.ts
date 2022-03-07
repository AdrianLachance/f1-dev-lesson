import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {

  constructor() { }

  @Input() name!: string;
  @Input() points!: number;
  @Input() position!: number;


  @Input() obj: any = {
    name: '',
    points: ''
  }

  ngOnInit(): void {
  }

}
