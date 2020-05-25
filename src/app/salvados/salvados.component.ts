import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-salvados',
  templateUrl: './salvados.component.html',
  styleUrls: ['./salvados.component.scss'],
})
export class SalvadosComponent implements OnInit {
  dados: FormGroup;
  cotacao: FormGroup;
  email: FormGroup;
  propostas: FormGroup;
  bmpPesagem: FormGroup;
  notaFiscal: FormGroup;
  pagamento: FormGroup;

  isEditable = true;
  @ViewChild('stepper') stepper: CdkStepper;

  constructor() {}

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
  ngOnInit(): void {}
}
