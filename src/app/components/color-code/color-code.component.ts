import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-code',
  templateUrl: './color-code.component.html',
  styleUrls: ['./color-code.component.scss'],
})
export class ColorCodeComponent implements OnInit {

  ranges = [
    {
      color: '#5EE2A0',
      range: '1 - 99'
    },
    {
      color: '#A177FF',
      range: '100 - 999'
    },
    {
      color: '#FFA177',
      range: '1000 - 9999'
    },
    {
      color: '#FF4141',
      range: '100000 or more'
    }
  ]

  constructor() { }

  ngOnInit() { }

}
