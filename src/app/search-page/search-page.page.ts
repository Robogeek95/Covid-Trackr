import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {
  public countries: any = [];
  public results: any = [];
  query;

  constructor(private modalCtrl: ModalController) {
    this.countries = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  onSearchChange(e) {
    console.log(e.detail.value);
    this.results = this.countries.filter(country => {
      return country.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    });
  }

  ngOnInit() {
    this.results = this.countries;
  }

}
