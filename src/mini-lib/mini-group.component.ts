import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mini-group',
  template: `
    <div [ngClass]="reflexClass()">
      <h3 style="display: flex; align-items: center;" *ngIf="title">
        {{title}}
        <div style="flex: 1; background: #808080; opacity: 0.25; height: 1px; margin: 10px;"></div>
      </h3>
      <div class="group" style="margin: 5px;">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class MiniGroupComponent {

  @Input() title = '';

  @Input() columns = '';
  @Input() phoneColumns = '';
  @Input() tabletColumns = '';
  @Input() desktopColumns = '';

  reflexClass = () => ({
    [`reflex-col-xs-${this.xs}`]: this.xs,
    [`reflex-col-sm-${this.sm}`]: this.sm,
    [`reflex-col-md-${this.md}`]: this.md,
    [`reflex-col-lg-${this.lg}`]: this.lg,
    [`reflex-col-xlg-${this.xl}`]: this.xl,
  })

  get xs() { return this.columns ? this.columns : this.phoneColumns ? this.phoneColumns : '12'; }
  get sm() { return this.columns ? this.columns : this.phoneColumns ? this.phoneColumns : '12'; }
  // tslint:disable-next-line: max-line-length
  get md() { return this.columns ? this.columns : (this.phoneColumns || this.tabletColumns) ? (this.phoneColumns || this.tabletColumns) : '12'; }
  // tslint:disable-next-line: max-line-length
  get lg() { return this.columns ? this.columns : (this.tabletColumns || this.desktopColumns) ? (this.tabletColumns || this.desktopColumns) : '12'; }
  get xl() { return this.columns ? this.columns : this.desktopColumns ? this.desktopColumns : '12'; }

}
