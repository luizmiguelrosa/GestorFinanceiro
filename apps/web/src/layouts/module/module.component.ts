import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  imports: [],
  template: `
  <div class="header-module">
    <h1>{{ moduleName }}</h1>
  </div>

  <div class="body-module">
    <ng-content></ng-content>
  </div>`,
  styleUrl: './module.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleComponent {
  @Input({ required: true }) moduleName!: string;
}
