import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.formBuilder.group(
    {
      name: ['',[Validators.required,Validators.pattern(this.validatorsSerice.firstNameAndLastnamePattern),],],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsSerice.emailPattern),
        ],
        // [new EmailValidatorService()] //*los validadores asyncronos pueden ser llamados de esta manera o instanciados en el constructor
        [this.emailValidator],
      ],
      //* las validaciones personalizadas (cantBeStrider) deben ser referenciadas y no llamadas como funcion
      //! Por algun motivo las validaciones que tienen error al momento de hacer reset() afectan el reset de los campos posteriores
      username: ['',[Validators.required, this.validatorsSerice.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirmation: ['', [Validators.required]],
    },{
      //* validadores a nivel de formulario - Pasan como argumento implicito TODO EL FORMULARIO
    validators: [
      this.validatorsSerice.isFieldOneEqualFieldTwo('password','passwordConfirmation') //? se pasan los nombres de los controles
    ]}
  );

  constructor(
    private formBuilder: FormBuilder,
    private validatorsSerice: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  isValidField(field: string): boolean | null {
    return this.validatorsSerice.isValidField(this.myForm, field);
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
        case 'noStrider':
          return `El username no puede ser Strider`;
        case 'pattern':
          return `Ingrese un elemento valido`;
        case 'notEqual':
          return `Los valores de los campos no son iguales`;
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
