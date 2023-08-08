import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent {

  //* Declaracion de formulario reactivo en base a FormControls
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   inStoragr: new FormControl(''),
  // });

  public myForm: FormGroup = this.formBuilder.group({
    name: [''],
    price: [0],
    inStoragre: [0],
  })


  constructor (private formBuilder: FormBuilder){}

  onSave(): void{
    console.log(this.myForm.value);

  }
}
