import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Z_MODAL_DATA } from 'components/dialog/dialog.service';
import { ZardInputDirective } from 'components/input/input.directive';
import { ZardComboboxComponent, type ZardComboboxOption } from 'components/combobox/combobox.component';

export type AccountType = {
  id: string;
  name: string;
}

export interface AccountData {
  name: string;
  initBalance: number;
  type: AccountType;
}

@Component({
  selector: 'app-account-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ZardInputDirective, ZardComboboxComponent],
  template: `
    <form [formGroup]="form" action="" class="grid gap-4">
      <div class="grid gap-2">
        <label for="name">Nome</label>
        <input z-input formControlName="name">
      </div>

      <div class="grid gap-2">
        <label for="initBalance">Saldo Inicial</label>
        <input z-input formControlName="initBalance" type="number">
      </div>

      <div class="grid gap-2">
        <label for="type">Tipo</label>
        <z-combobox
          formControlName="type"
          [options]="types"
          [placeholder]="'Selecione o tipo'"
          [searchPlaceholder]="'Buscar'"
          [emptyText]="'Nenhum tipo encontrado'"
        />
      </div>
    </form>
  `,
  styleUrl: './account-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountForm {
  private zData: AccountData = inject(Z_MODAL_DATA);

  form = new FormGroup({
    name: new FormControl(),
    initBalance: new FormControl(0.0),
    type: new FormControl(),
  })

  types: ZardComboboxOption[] = [
    { value: '0', label: 'Conta Corrente' },
    { value: '1', label: 'Poupança' },
    { value: '2', label: 'Caixinha' },
    { value: '3', label: 'Investimentos' },
  ]

  constructor() {
    if (this.zData) this.form.patchValue(this.zData);
  }
}
