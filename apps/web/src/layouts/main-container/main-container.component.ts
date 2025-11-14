import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-container',
  imports: [],
  template: `
  <main>
    <ng-content></ng-content>
  </main>`,
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent { }
