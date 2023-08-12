import { FormControl, ValidationErrors } from '@angular/forms';

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

//* los validadores reciben todo el control que estamos comprobando
export const cantBeStrider = (
  control: FormControl
): ValidationErrors | null => {
  const value = control.value.trim().toLowerCase();

  if (value == 'strider') {
    //* deben retornar un objeto o un null
    return {
      noStrider: true,
    };
  }

  return null;
};
