import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

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

  constructor(private formBuilder: FormBuilder, private validatorsSerice: ValidatorsService) {}

  ngOnInit(): void {
    this.mySwitchesForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return this.validatorsSerice.isValidField(this.mySwitchesForm, field)
  }

  getFieldError(field: string): string | null {
    if (!this.mySwitchesForm.controls[field]) return null;

    return this.validatorsSerice.getFieldErrors(this.mySwitchesForm, field)
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
