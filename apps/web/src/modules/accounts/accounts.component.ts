import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionComponent } from "../../layouts/section/section.component";
import { ModuleComponent } from "../../layouts/module/module.component";
import { CommonModule } from '@angular/common';
import { ZardDividerComponent } from 'components/divider/divider.component';
import { AddButtonComponent } from 'components/add-button/add-button.component'
import { PricePipe } from '../../pipes/price.pipe';
import { ZardDialogService } from 'components/dialog/dialog.service';
import { BanknoteArrowUpIcon, WalletIcon, LucideAngularModule } from 'lucide-angular';
import { AccountData, AccountForm } from './components/account-form/account-form';
import { PageComponent } from "../../layouts/page/page.component";
import { ZardTooltipModule } from 'components/tooltip/tooltip';

@Component({
  selector: 'app-account',
  imports: [CommonModule, SectionComponent, ModuleComponent, ZardDividerComponent, PricePipe, AddButtonComponent, PageComponent, ZardTooltipModule, LucideAngularModule],
  template: `
  <app-page>
    <app-section>
      <app-module moduleName="Contas">
        <div class="account-tools">
          <app-add-button (clicked)="openDialog()"></app-add-button>
        </div>
        <div class="accounts">
          <div *ngFor="let account of account" class="account">
            <div class="account-head">
              <h1>{{ account.name }}</h1>
              <span>{{ account.type.name }}</span>
            </div>

            <div class="account-balance">
              <div [zTooltip]="'Saldo Inicial'">
                <lucide-icon [img]="BanknoteArrowUpIcon"></lucide-icon>
                <span [style.color]="account.initBalance < 0 ? 'red' : 'inherit'">{{ account.initBalance | price }}</span>
              </div>

              <z-divider zOrientation="vertical"></z-divider>

              <div [zTooltip]="'Saldo Atual'">
                <lucide-icon [img]="WalletIcon"></lucide-icon>
                <span [style.color]="account.currentBalance < 0 ? 'red' : 'inherit'">{{ account.currentBalance | price }}</span>
              </div>
            </div>
          </div>
        </div>
      </app-module>
    </app-section>
  </app-page>
`,
  styleUrl: './accounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {
  private dialogService = inject(ZardDialogService);
  readonly BanknoteArrowUpIcon = BanknoteArrowUpIcon;
  readonly WalletIcon = WalletIcon;

  openDialog() {
    this.dialogService.create({
      zTitle: 'Adicionar uma nova Conta',
      zDescription: `Adicione uma nova conta para gerenciar seus saldos e transações.`,
      zContent: AccountForm,
      zOkText: 'Adicionar',
      zCancelText: 'Cancelar',
      zWidth: '425px',
    });
  }

  account: Array<AccountData & { currentBalance: number }> = [
    { name: "Faculdade Mercado Pago", initBalance: 0, currentBalance: 0, type: {id: "0", name: "Conta Corrente"} },
    { name: "Poupança Mercado Pago", initBalance: 0, currentBalance: 0, type: {id: "1", name: "Poupança"} },
    { name: "Faculdade Mercado Pago", initBalance: 0, currentBalance: 0, type: {id: "2", name: "Conta Corrente"} },
    { name: "Carteira Digital", initBalance: 1500, currentBalance: 2300, type: {id: "1", name: "Poupança"} },
    { name: "Conta Investimentos", initBalance: 5000, currentBalance: 5750, type: {id: "3", name: "Investimentos"} },
    { name: "Cartão de Crédito", initBalance: 0, currentBalance: -1200, type: {id: "4", name: "Cartão"} }
  ];
}
