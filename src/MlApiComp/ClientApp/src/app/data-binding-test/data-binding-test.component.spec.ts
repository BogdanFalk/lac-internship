import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTestComponent } from './data-binding-test.component';

describe('DataBindingTestComponent', () => {
  let component: DataBindingTestComponent;
  let fixture: ComponentFixture<DataBindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
