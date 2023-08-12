import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [],
})
export class DynamicPageComponent {
  // * forma anteiror de declarar un form array
  // public myForm2 = new FormGroup({
  //   favoriteGames: new FormArray([
  //     ['Xenoblade', Validators.required]
  //   ])
  // })

  public myDynamicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['Xenoblade', [Validators.required]],
      ['Final Fantasy', [Validators.required]],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]); //* Crea un campo unico de formcontrol

  constructor(private formBuilder: FormBuilder, private validatorsSerice: ValidatorsService) {}

  get favoriteGames() {
    return this.myDynamicForm.get('favoriteGames') as FormArray; //* obtener el arreglo y retornar con el tipo formArray
  }

  isValidField(field: string): boolean | null {
    return this.validatorsSerice.isValidField(this.myDynamicForm, field)
  }

  isValidFieldInArray(FormArray: FormArray, index: number) {
    return (
      FormArray.controls[index].errors && FormArray.controls[index].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myDynamicForm.controls[field]) return null;

    const errors = this.myDynamicForm.controls[field].errors || {};

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

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;

    const favorite = this.newFavorite.value;

    // this.favoriteGames.push(
    //   new FormControl(favorite, [Validators.required, Validators.minLength(3)])
    // ); //* Insertar sin utilizar formbuilder

    this.favoriteGames.push(
      this.formBuilder.control(favorite, [
        Validators.required,
        Validators.minLength(3),
      ])
    ); //* Insertar utilizando formbuilder

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index); //* Remover desde el arreglo
  }

  onSubmit() {
    if (this.myDynamicForm.invalid) {
      this.myDynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.myDynamicForm.value);
    //* resetea el arreglo de formualrio
    //* en versiones anterioes de angular "this.myDynamicForm.controls['favoriteGames'] as arrayx"
    this.myDynamicForm.controls['favoriteGames'] = this.formBuilder.array([]);
    this.myDynamicForm.reset();
  }
}
