import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-color-code',
  templateUrl: './color-code.component.html',
  styleUrls: ['./color-code.component.scss'],
})
export class ColorCodeComponent implements OnInit {

  public ranges: any;

  constructor(private mapService: MapService) {
    this.ranges = this.mapService.getRange()
  }

  ngOnInit() { }

}
