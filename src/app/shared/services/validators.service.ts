import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
  constructor() {}

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


//* los validadores reciben todo el control que estamos comprobando
  public cantBeStrider = (control: FormControl): ValidationErrors | null => {
    const value = control.value.trim().toLowerCase();

    if (value == 'strider') {
      //* deben retornar un objeto o un null
      return {
        noStrider: true,
      };
    }

    return null;
  };

  public isValidField(form: FormGroup, field: string){
    return form.controls[field].errors && form.controls[field].touched
  }


}