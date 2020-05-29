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
import { CotacaoComponent } from './cotacao/cotacao.component';
import { EmailComponent } from './email/email.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputComponent } from './shared/input/input.component';
import { RadiosComponent } from './shared/radios/radios.component';
import { UploadComponent } from './shared/upload/upload.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    SalvadosComponent,
    DadosComponent,
    CotacaoComponent,
    EmailComponent,
    InputComponent,
    RadiosComponent,
    UploadComponent,
  ],
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
    MatAutocompleteModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
  ],
  exports: [
    SalvadosComponent,
    InputComponent,
    UploadComponent,
    RadiosComponent,
  ],
})
export class SalvadosModule {}
