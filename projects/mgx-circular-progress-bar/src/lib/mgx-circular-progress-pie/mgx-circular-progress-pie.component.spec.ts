import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgxCircularProgressPieComponent } from './mgx-circular-progress-pie.component';

describe('MgxCircularProgressPieComponent', () => {
  let component: MgxCircularProgressPieComponent;
  let fixture: ComponentFixture<MgxCircularProgressPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgxCircularProgressPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgxCircularProgressPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
