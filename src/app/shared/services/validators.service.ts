import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  constructor() {}

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  //* los validadores reciben todo el control que estamos comprobando
  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    if (control.value === '' || control.value === null) return null;

    const value = control.value.trim().toLowerCase();

    if (value == 'strider') {
      //* deben retornar un objeto o un null
      return {
        noStrider: true,
      };
    }

    return null;
  };

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    //* Obtiene de manera implicita el formulario y lo manjea con AbstractControl
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(fieldOne)?.value || '';
      const fieldValue2 = formGroup.get(fieldTwo)?.value || '';

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(fieldTwo)?.setErrors({ notEqual: true }); //*establece el error del campo del form
        return { notEqual: true }; //*Retorna el error
      }

      //*elimina el error del campo y regresa que no hay errores
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }

  public getFieldErrors(form: FormGroup, field: string): string | null {
    const errors = form.controls[field].errors || {};

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
        default:
          return `ERROR NOT DEFINED`;
      }
    }

    return null
  }
}
