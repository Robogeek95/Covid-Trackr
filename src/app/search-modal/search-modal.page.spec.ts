import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchModalPage } from './search-modal.page';

describe('SearchModalPage', () => {
  let component: SearchModalPage;
  let fixture: ComponentFixture<SearchModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
