import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMenuComponent } from './color-menu.component';

describe('ColorMenuComponent', () => {
  let component: ColorMenuComponent;
  let fixture: ComponentFixture<ColorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
