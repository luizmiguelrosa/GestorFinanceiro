import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, UserIcon, LogOutIcon, LandmarkIcon, icons, TargetIcon, CreditCardIcon, DollarSignIcon, LayoutDashboardIcon, MenuIcon } from 'lucide-angular'

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  standalone: true,
  template: `
  <div class="sidebar">
    <div class="account-container">
      <div class="account-left-container">
        <lucide-icon [img]="UserIcon" [size]="24"></lucide-icon>
        <div class="account-info-container">
          <span class="account-name">Sua conta</span>
          <span class="account-email">suaconta@email.com</span>
        </div>
      </div>
      <lucide-icon [img]="MenuIcon"></lucide-icon>
    </div>

    <nav>
      <ul>
        <li *ngFor="let module of modules" class="sidebar-module" [routerLink]="module.url" routerLinkActive="active">
          <lucide-icon [img]="module.icon"></lucide-icon>
          <span>{{ module.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
  `,
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly UserIcon = UserIcon;
  readonly MenuIcon = MenuIcon;
  readonly LayoutDashboard = LayoutDashboardIcon;
  readonly LandMarkIcon = LandmarkIcon;
  readonly TargetIcon = TargetIcon;
  readonly CreditCardIcon = CreditCardIcon;
  readonly DolarSignIcon = DollarSignIcon;

  modules = [
    { label: 'Dashboard', url: '/dashboard', icon: this.LayoutDashboard },
    { label: 'Contas', url: '/contas', icon: this.LandMarkIcon },
    { label: 'Objetivos', url: '/objetivos', icon: this.TargetIcon },
    { label: 'Parcelas', url: '/parcelas', icon: this.CreditCardIcon },
    { label: 'Aportes', url: '/aportes', icon: this.DolarSignIcon },
  ]
}
