import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Host,
  Optional,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalvadosComponent } from '../salvados.component';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit {
  @Output() dadosFormGroup = new EventEmitter<FormGroup>();
  salvadoComponent: SalvadosComponent;
  dados: FormGroup;
  constructor(
    @Host() salvadoComponent: SalvadosComponent,
    private formBuilder: FormBuilder
  ) {
    this.salvadoComponent = salvadoComponent;
  }

  ngOnInit(): void {
    this.dados = this.formBuilder.group({
      testando: ['', Validators.required],
    });
    this.dadosFormGroup.emit(this.dados);
  }

  next() {
    this.salvadoComponent.stepper.next();
  }
}
