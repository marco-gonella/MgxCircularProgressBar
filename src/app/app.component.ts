import { Component } from '@angular/core';

@Component({
  selector: 'mgx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public percentageOne;
  public percentageTwo;
  public percentageThree;
  public total = 60;
  public value = 37;
}
