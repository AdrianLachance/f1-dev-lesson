import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss']
})
export class SideCardComponent implements OnInit {

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
