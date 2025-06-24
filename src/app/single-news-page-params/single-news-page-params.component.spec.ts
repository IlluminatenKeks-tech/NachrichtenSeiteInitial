import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsPageParamsComponent } from './single-news-page-params.component';

describe('SingleNewsPageParamsComponent', () => {
  let component: SingleNewsPageParamsComponent;
  let fixture: ComponentFixture<SingleNewsPageParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleNewsPageParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNewsPageParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
