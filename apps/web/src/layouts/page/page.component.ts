import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MainContainerComponent } from '../main-container/main-container.component';

@Component({
  selector: 'app-page',
  imports: [SidebarComponent, MainContainerComponent],
  template: `
  <app-sidebar/>
  <app-main-container>
    <ng-content></ng-content>
  </app-main-container>`,
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent { }
