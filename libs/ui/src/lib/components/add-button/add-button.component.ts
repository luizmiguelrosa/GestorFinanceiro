import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ZardButtonComponent } from '../button/button.component';
import { LucideAngularModule, PlusIcon } from 'lucide-angular';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [ZardButtonComponent, LucideAngularModule],
  template: `
    <button z-button [disabled]="disabled" (click)="handleClick()">
      <lucide-icon [img]="PlusIcon" [size]="24"></lucide-icon>
      <span>{{label}}</span>
    </button>
  `,
  styleUrl: './add-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonComponent {
  readonly PlusIcon = PlusIcon;


  @Input() disabled = false;
  @Input() label = "Adicionar";

  @Output() clicked = new EventEmitter<void>();

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
