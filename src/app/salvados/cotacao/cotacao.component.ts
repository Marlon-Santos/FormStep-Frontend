import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Host,
  Optional,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalvadosComponent } from '../salvados.component';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.scss'],
})
export class CotacaoComponent implements OnInit {
  @Output() cotacaoFormGroup = new EventEmitter<FormGroup>();
  salvadoComponent: SalvadosComponent;
  cotacao: FormGroup;
  constructor(
    @Host() salvadoComponent: SalvadosComponent,
    private formBuilder: FormBuilder
  ) {
    this.salvadoComponent = salvadoComponent;
  }

  ngOnInit(): void {
    this.cotacao = this.formBuilder.group({
      testando: ['', Validators.required],
    });
    this.cotacaoFormGroup.emit(this.cotacao);
  }

  next() {
    this.salvadoComponent.stepper.next();
  }
}
