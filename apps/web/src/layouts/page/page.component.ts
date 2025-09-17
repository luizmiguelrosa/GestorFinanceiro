import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-page',
  imports: [SidebarComponent, SectionComponent],
  template: `
  <div>
    <app-sidebar />
    <app-section>
      <ng-content></ng-content>
    </app-section>
  </div>`,
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent { }
