import { ApiDataService } from './../api-data.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  countryId;
  selectedCountry;
  public casePeek: any = [];
  public countries: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private data: ApiDataService
  ) {
    this.casePeek.expanded = true
    this.countries.expanded = false
  }

  ngOnInit() {
    this.countryId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  expandItem(item): void {
    item.expanded = !item.expanded;
  }

  selectCountry(c: any) {
    this.selectedCountry = c;
  }

  routeToDetails() {
    this.navCtrl.navigateForward('/route');
  }

}
