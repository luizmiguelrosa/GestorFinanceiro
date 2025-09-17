import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from "../../layouts/page/page.component";

@Component({
  selector: 'app-teste',
  imports: [PageComponent],
  template: `<app-page><h1>Teste2</h1></app-page>`,
  styleUrl: './teste.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TesteComponent { }
