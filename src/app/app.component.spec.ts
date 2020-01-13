import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MgxCircularProgressModule } from 'projects/mgx-circular-progress-bar/src/public_api';
import { MgxCircularProgressBarComponent } from 'projects/mgx-circular-progress-bar/src/lib/mgx-circular-progress-bar/mgx-circular-progress-bar.component';
import { MgxCircularProgressPieComponent } from 'projects/mgx-circular-progress-bar/src/lib/mgx-circular-progress-pie/mgx-circular-progress-pie.component';
import { MgxCircularProgressFullBarComponent } from 'projects/mgx-circular-progress-bar/src/lib/mgx-circular-progress-full-bar/mgx-circular-progress-full-bar.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MgxCircularProgressModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should percentageOne, percentageTwo, percentageThree be undefined', async(() => {
    expect(app.percentageOne).toBeUndefined();
    expect(app.percentageTwo).toBeUndefined();
    expect(app.percentageThree).toBeUndefined();
  }));
  it('should create mgx-circular-progress-full-bar', async(() => {
    const fullBar = fixture.debugElement.query(By.css('#full-bar'));
    expect(fullBar).toBeTruthy();
  }));
  it('should create mgx-circular-progress-bar', async(() => {
    const fullBar = fixture.debugElement.query(By.css('#bar'));
    expect(fullBar).toBeTruthy();
  }));
  it('should create mgx-circular-progress-pie', async(() => {
    const fullBar = fixture.debugElement.query(By.css('#pie'));
    expect(fullBar).toBeTruthy();
  }));

});
