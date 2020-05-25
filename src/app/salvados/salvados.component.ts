import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkStepper, StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-salvados',
  templateUrl: './salvados.component.html',
  styleUrls: ['./salvados.component.scss'],
})
export class SalvadosComponent implements OnInit, AfterViewInit {
  dados: FormGroup;
  cotacao: FormGroup;
  email: FormGroup;
  propostas: FormGroup;
  bmpPesagem: FormGroup;
  notaFiscal: FormGroup;
  pagamento: FormGroup;
  isEditable = true;
  lastNumberEdit = 0;
  @ViewChild('stepper') stepper: CdkStepper;

  constructor(private fg: FormBuilder) {}
  selectionChange(stepperSelectionEvent: StepperSelectionEvent) {
    if (stepperSelectionEvent.selectedIndex > this.lastNumberEdit) {
      this.lastNumberEdit = stepperSelectionEvent.selectedIndex;
    }
    console.log(stepperSelectionEvent);
  }
  dadosFG(fg) {
    this.dados = fg;
  }
  cotacaoFG(fg) {
    this.cotacao = fg;
  }
  emailFG(fg) {
    this.email = fg;
  }
  PropostasFG(fg) {
    this.propostas = fg;
  }
  bmpPesagemFG(fg) {
    this.bmpPesagem = fg;
  }
  notaFiscalFG(fg) {
    this.notaFiscal = fg;
  }
  pagamentoFG(fg) {
    this.pagamento = fg;
  }
  ngOnInit(): void {
    this.dados = this.fg.group({});
    this.cotacao = this.fg.group({});
    this.email = this.fg.group({});
    this.propostas = this.fg.group({});
    this.bmpPesagem = this.fg.group({});
    this.notaFiscal = this.fg.group({});
    this.pagamento = this.fg.group({});
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
