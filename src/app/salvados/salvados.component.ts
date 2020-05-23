import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-salvados',
  templateUrl: './salvados.component.html',
  styleUrls: ['./salvados.component.scss'],
})
export class SalvadosComponent implements OnInit {
  test: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  @ViewChild('stepper') stepper: CdkStepper;
  constructor(private formBuilder: FormBuilder) {}
  okFn(e) {
    this.test = e;
  }
  ngOnInit(): void {
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
