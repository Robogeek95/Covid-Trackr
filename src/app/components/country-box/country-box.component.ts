import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-box',
  templateUrl: './country-box.component.html',
  styleUrls: ['./country-box.component.scss'],
})
export class CountryBoxComponent implements OnInit {
  @Input() result;

  constructor() { }

  ngOnInit() { }

}
