import { Component, Input, OnChanges, ViewChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'mgx-circular-progress-full-bar',
  template: `<div class="contain">
    <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" [ngStyle]="{'width.px': diameter, 'height.px': diameter }"
        viewBox="0 0 200 200">
        <circle id="base-circle" [attr.fill]="bgColor" stroke-width="15" cx="100" cy="100" [attr.r]="contentSize" />
        <circle id="path" #circlePath [attr.stroke]="color" fill="none" stroke-width="15" cx="100" cy="100"
            [attr.r]="pathPosition" rotate="50" />
    </svg>
    <div class="label">
        <ng-container *ngIf="contentTemplate; else projectContent">
            <ng-template *ngTemplateOutlet="contentTemplate; context: context"></ng-template>
        </ng-container>
        <ng-template #projectContent>
            <div #contentRef>
                <ng-content></ng-content>
            </div>
            <div *ngIf="!contentRef?.childNodes?.length" [style.font-size]="getFontSize()">{{percentual}}<span
                    [style.font-size]="getFontSize(1.2)">&#37;</span></div>
        </ng-template>
    </div>
</div>`,
  styleUrls: ['../mgx-circular-progress-bar.scss']
})
export class MgxCircularProgressFullBarComponent implements OnChanges {

  @Input() total: number = 1;
  @Input() barValue: number = 0;
  @Input() percentage: number = 0;

  /* Display section */
  @Input() contentTemplate: TemplateRef<any>;
  @Input() diameter: number = 150;
  @Input() fontSize: number;
  @Input() color: string = '#3282b8';
  @Input() bgColor: string = '#eee';
  @Input() contentSize: number = 83;
  @Input() pathPosition: number = 90;
  @ViewChild('circlePath') circlePath: ElementRef;

  private mgxPrefix = 'mgx-circular-progress-full-bar';
  percentual: number = 0;
  context: any = { percentual: 0, $implicit: 0 };

  constructor() { }

  ngOnChanges() {
    const circle = this.circlePath.nativeElement;
    const len = 2 * Math.PI * this.pathPosition;
    circle.style.strokeDasharray = len;

    this.showWarnings();

    this.percentual = +this.percentage || (+this.barValue / +this.total) * 100;

    this.percentual = isNaN(this.percentual) ? 0 : +this.percentual.toFixed(2);

    if (this.percentual > 100) {
      circle.style.strokeDashoffset = 0;
      this.percentual = 100;
    } else {
      circle.style.strokeDashoffset = len - (this.percentual / 100) * len;
    }

    this.context.percentual = this.percentual;
    this.context.$implicit = this.percentual;

  }

  private showWarnings() {
    if (!this.percentual || isNaN(this.percentual)) {
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
