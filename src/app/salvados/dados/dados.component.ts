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
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit {
  @Output() ok = new EventEmitter<FormGroup>();
  salvadoComponent: SalvadosComponent;
  test: FormGroup;
  constructor(
    @Host() salvadoComponent: SalvadosComponent,
    private formBuilder: FormBuilder
  ) {
    this.salvadoComponent = salvadoComponent;
  }

  ngOnInit(): void {
    this.test = this.formBuilder.group({
      testando: ['', Validators.required],
    });
    this.ok.emit(this.test);
  }

  next() {
    this.salvadoComponent.stepper.next();
  }
}
