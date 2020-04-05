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

  selectedCountry;
  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.selectedCountry)
  }

  selectCountry(c: any) {
    this.selectedCountry = c;
  }

  routeToDetails() {
    this.navCtrl.navigateForward('/route');
  }

}
