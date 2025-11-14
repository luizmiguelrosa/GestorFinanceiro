import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, UserIcon, LandmarkIcon, TargetIcon, CreditCardIcon, DollarSignIcon, LayoutDashboardIcon, MenuIcon, ArrowLeftRightIcon } from 'lucide-angular'
import { ZardTooltipModule } from "components/tooltip/tooltip";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule, ZardTooltipModule],
  standalone: true,
  template: `
  <div class="sidebar" [class.expanded]="isExpanded">
    <div class="account-container">
      <div class="account-left-container">
        <lucide-icon [img]="UserIcon" [size]="24" *ngIf="isExpanded"></lucide-icon>
        <div class="account-info-container" *ngIf="isExpanded">
          <span class="account-name">Sua conta</span>
          <span class="account-email">suaconta@email.com</span>
        </div>
      </div>
      <lucide-icon [img]="MenuIcon" (click)="toggleSidebar()"></lucide-icon>
    </div>

    <nav>
      <ul>
        <li *ngFor="let module of modules" routerLinkActive="active">
          <a class="sidebar-module" [routerLink]="module.url">
            <div class="tooltip-container" style="position: relative;">
              <lucide-icon [img]="module.icon" [zTooltip]="!isExpanded ? module.label : ''"></lucide-icon>
            </div>
            <span *ngIf="isExpanded">{{ module.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  `,
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isExpanded = true;
  readonly UserIcon = UserIcon;
  readonly MenuIcon = MenuIcon;
  readonly LayoutDashboard = LayoutDashboardIcon;
  readonly LandMarkIcon = LandmarkIcon;
  readonly TargetIcon = TargetIcon;
  readonly CreditCardIcon = CreditCardIcon;
  readonly DolarSignIcon = DollarSignIcon;
  readonly ArrowLeftRightIcon = ArrowLeftRightIcon;

  modules = [
    { label: 'Dashboard', url: '/dashboard', icon: this.LayoutDashboard },
    { label: 'Contas', url: '/account', icon: this.LandMarkIcon },
    { label: 'Objetivos', url: '/objetivos', icon: this.TargetIcon },
    { label: 'Transações', url: '/transações', icon: this.ArrowLeftRightIcon},
    { label: 'Parcelas', url: '/parcelas', icon: this.CreditCardIcon },
    { label: 'Aportes', url: '/aportes', icon: this.DolarSignIcon },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isExpanded = window.innerWidth > 1024;
    }
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
