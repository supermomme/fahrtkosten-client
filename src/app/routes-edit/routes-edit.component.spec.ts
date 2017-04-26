import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesEditComponent } from './routes-edit.component';

describe('RoutesEditComponent', () => {
  let component: RoutesEditComponent;
  let fixture: ComponentFixture<RoutesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
