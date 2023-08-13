import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

const sunny = {
  name: 'Sunny Ship',
  price: 6999,
  inStorage: 5,
};

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit {
  //* Declaracion de formulario reactivo en base a FormControls
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   inStoragr: new FormControl(''),
  // });

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsSerice: ValidatorsService
  ) {}

  ngOnInit(): void {
    // this.myForm.reset(sunny) //* Settear los valores del formulario manteniendo en pristine
  }

  isValidField(field: string): boolean | null {
    return this.validatorsSerice.isValidField(this.myForm, field)
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    return this.validatorsSerice.getFieldErrors(this.myForm, field)
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset();
  }
}
