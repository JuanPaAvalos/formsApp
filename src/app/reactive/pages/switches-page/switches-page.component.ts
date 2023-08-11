import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent {
  public mySwitchesForm: FormGroup = this.formBuilder.group({
    gender: ['M', [Validators.required]],
    wantNotifications: [false, [Validators.required]],
    termsAndConditions: [false, [Validators.required, Validators.requiredTrue]],
  });

  public person = {
    gender: 'M',
    wantNotifications: false,
    termsAndConditions: false,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.mySwitchesForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return (
      this.mySwitchesForm.controls[field].errors &&
      this.mySwitchesForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.mySwitchesForm.controls[field]) return null;

    const errors = this.mySwitchesForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Se requieren al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Se rquiere un valor minimo de ${errors['min'].min}`;
        case 'required':
          return `Se rquiere un aceptar este campo`;
      }
    }

    return null;
  }

  onSubmit() {
    if (this.mySwitchesForm.invalid) {
      this.mySwitchesForm.markAllAsTouched();
      return;
    }

    //* desestructura un objeto y crea uno nuevo excluyendo los campos desestrcuturados
    const { termsAndConditions, ...newPerson } = this.mySwitchesForm.value;
    this.person = newPerson;

    console.log(this.person);

    this.mySwitchesForm.reset({
      gender: 'M',
      wantNotifications: false,
      termsAndConditions: false,
    });
  }
}
