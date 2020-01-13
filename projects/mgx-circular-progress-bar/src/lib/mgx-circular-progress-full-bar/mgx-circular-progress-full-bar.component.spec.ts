import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgxCircularProgressFullBarComponent } from './mgx-circular-progress-full-bar.component';

describe('MgxCircularProgressFullBarComponent', () => {
  let component: MgxCircularProgressFullBarComponent;
  let fixture: ComponentFixture<MgxCircularProgressFullBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgxCircularProgressFullBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgxCircularProgressFullBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
