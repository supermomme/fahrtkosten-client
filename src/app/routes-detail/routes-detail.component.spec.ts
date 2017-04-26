import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesDetailComponent } from './routes-detail.component';

describe('RoutesDetailComponent', () => {
  let component: RoutesDetailComponent;
  let fixture: ComponentFixture<RoutesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
