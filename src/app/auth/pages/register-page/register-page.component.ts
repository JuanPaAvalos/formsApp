import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorsSerice.firstNameAndLastnamePattern),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.validatorsSerice.emailPattern)],
    ],
    //* las validaciones personalizadas (cantBeStrider) deben ser referenciadas y no llamadas como funcion
    username: ['', [Validators.required, this.validatorsSerice.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorsSerice: ValidatorsService
  ) {}

  // ngOnInit(): void {
  //   this.myForm.reset()
  // }

  isValidField(field: string): boolean | null {
    return this.validatorsSerice.isValidField(this.myForm, field)
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Se requieren al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Se rquiere un valor minimo de ${errors['min'].min}`;
      }
    }

    return null;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset();
  }
}
