import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeIndexComponent } from './cake-index.component';

describe('CakeIndexComponent', () => {
  let component: CakeIndexComponent;
  let fixture: ComponentFixture<CakeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
