import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Host,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalvadosComponent } from '../salvados.component';

export interface StateGroup {
  stateGroups: string[];
}
const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];

export const _filter = (opt: any[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(value));
};
@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit {
  @ViewChild('placeholder') autoComplete: ElementRef;
  @Output() dadosFormGroup = new EventEmitter<FormGroup>();
  dataSource;
  columns: string[] = ['position', 'name', 'weight', 'symbol'];
  salvadoComponent: SalvadosComponent;
  dados: FormGroup;
  autoCompleteDados: any[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'Utah',
    'Vermont',
    'Virginia',
  ];

  constructor(
    @Host() salvadoComponent: SalvadosComponent,
    private formBuilder: FormBuilder
  ) {
    this.salvadoComponent = salvadoComponent;
  }

  ngOnInit(): void {
    this.dados = this.formBuilder.group({
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      option5: ['', Validators.required],
      option6: ['', Validators.required],
    });
    this.dadosFormGroup.emit(this.dados);
    this.dataSource = ELEMENT_DATA;
  }

  next() {
    this.salvadoComponent.stepper.next();
  }
}
