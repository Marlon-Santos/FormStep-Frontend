import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvadosComponent } from './salvados.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DadosComponent } from './dados/dados.component';

@NgModule({
  declarations: [SalvadosComponent, DadosComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [SalvadosComponent],
})
export class SalvadosModule {}
