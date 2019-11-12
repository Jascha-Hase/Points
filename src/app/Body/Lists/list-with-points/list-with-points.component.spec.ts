import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithPointsComponent } from './list-with-points.component';

describe('ListWithPointsComponent', () => {
  let component: ListWithPointsComponent;
  let fixture: ComponentFixture<ListWithPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
