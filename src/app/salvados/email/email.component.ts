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
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  @Output() emailFormGroup = new EventEmitter<FormGroup>();
  salvadoComponent: SalvadosComponent;
  email: FormGroup;
  constructor(
    @Host() salvadoComponent: SalvadosComponent,
    private formBuilder: FormBuilder
  ) {
    this.salvadoComponent = salvadoComponent;
  }

  ngOnInit(): void {
    this.email = this.formBuilder.group({
      testando: ['', Validators.required],
    });
    this.emailFormGroup.emit(this.email);
  }

  next() {
    this.salvadoComponent.stepper.next();
  }
}
