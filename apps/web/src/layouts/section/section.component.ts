import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  template: `
  <div>
    <ng-content></ng-content>
  </div>`,
  styleUrl: './section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent { }
