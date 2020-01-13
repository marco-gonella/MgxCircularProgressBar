import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgxCircularProgressBarComponent } from './mgx-circular-progress-bar.component';

describe('MgxCircularProgressBarComponent', () => {
  let component: MgxCircularProgressBarComponent;
  let fixture: ComponentFixture<MgxCircularProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgxCircularProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgxCircularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
