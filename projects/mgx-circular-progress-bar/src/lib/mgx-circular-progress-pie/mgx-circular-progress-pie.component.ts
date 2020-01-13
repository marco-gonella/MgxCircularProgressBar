import { Component, Input, OnChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'mgx-circular-progress-pie',
  template: `<div class="contain">
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" [ngStyle]="{'width.px': diameter, 'height.px': diameter }"
        viewBox="-1 -1 2 2">
        <circle id="base-circle" [attr.stroke]="bgColor" [attr.fill]="bgColor" cx="0" cy="0" [attr.r]="bgSize / 20" />
        <path id="pie-path" [attr.fill]="color" [attr.d]="pathData" rotate="50"></path>
    </svg>
    <div class="label">
        <ng-container *ngIf="contentTemplate; else projectContent">
            <ng-template *ngTemplateOutlet="contentTemplate"></ng-template>
        </ng-container>
        <ng-template #projectContent>
            <div #contentRef>
                <ng-content></ng-content>
            </div>
            <div *ngIf="!contentRef?.childNodes?.length" [style.font-size]="getFontSize()">
                {{percentual}}<span [style.font-size]="getFontSize(1.2)">&#37;</span>
            </div>
        </ng-template>
    </div>
</div>`,
  styleUrls: ['../mgx-circular-progress-bar.scss']
})
export class MgxCircularProgressPieComponent implements OnChanges {

  /* Data section */
  @Input() total: number = 1;
  @Input() barValue: number = 0;
  @Input() percentage: number = 0;

  /* Display section */
  @Input() contentTemplate: TemplateRef<any>;
  @Input() diameter: number = 150;
  @Input() fontSize: number;
  @Input() color: string = '#3282b8';
  @Input() bgColor: string = '#eee';
  @Input() bgSize: number = 10;
  
  private mgxPrefix = 'mgx-circular-progress-pie';
  pathData: string;
  newPathData: string;
  percentual: number = 0;

  constructor() {}
 
  ngOnChanges() {

    this.showWarnings();

    this.percentual = +this.percentage || (+this.barValue / +this.total) * 100;

    this.percentual = isNaN(this.percentual) ? 0 : +this.percentual.toFixed(2);
    if (this.percentual > 100) {
      this.setSlice(1)
      this.percentual = 100;
    } else {
      this.setSlice(this.percentual / 100)
    }

  }

  private setSlice(percent){
    const [endX, endY] = this.getCoordinatesForPercent(percent);
    const largeArcFlag = percent > .5 ? 1 : 0;
    this.pathData = [ 
      `M 1 0`, // Move
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`, // Line
    ].join(' '); 
  }


  private getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  private showWarnings() {
    if (!this.percentage || isNaN(this.percentage)) {
      if (isNaN(this.barValue)) {
        console.warn(`${this.mgxPrefix} barValue: ${this.barValue}`);
      } else if (isNaN(this.total)) {
        console.warn(`${this.mgxPrefix} total: ${this.total}`);
      } else if (this.barValue > this.total) {
        console.warn(`${this.mgxPrefix} barValue: ${this.barValue} is more than total: ${this.total}`);
      }
    }
  }

  getFontSize(reducer: number = 1) {
    return `${(this.fontSize || (this.diameter / 4)) / reducer}px`;
  }
}
