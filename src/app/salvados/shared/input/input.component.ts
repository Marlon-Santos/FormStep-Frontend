import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
export interface StateGroup {
  autoCompleteDados: string[];
}

export const _filter = (opt: any[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter((item) => item.toLowerCase().includes(value));
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @ViewChild('placeholder') autoComplete: ElementRef;
  @ViewChild('matFormField') matFormField: ElementRef;
  @Input() formGroupInfo: FormGroup;
  @Input() autoCompleteDados: any[];
  @Input() controlName: string;
  @Input() labelText: string;
  @Input() alignInput: string;
  @Input() inputType: string;
  autoCompleteDadosOptions;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupInfo = this.formBuilder.group({
      controlName: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.autoCompleteDadosOptions = this.formGroupInfo
      .get(`${this.controlName}`)
      .valueChanges.pipe(
        startWith(''),
        map((value) => _filter(this.autoCompleteDados, value))
      );
  }

  focusAutoComplete(mat) {
    this.autoComplete.nativeElement.style.color = 'transparent';
    mat._elementRef.nativeElement.style.border = 'none';
  }
  focusOutAutoComplete() {
    this.autoComplete.nativeElement.style.color = '#aaa';
  }
}
