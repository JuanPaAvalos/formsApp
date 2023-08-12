import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

//* los validadores asyncronos deben implementar AsyncValidator y la funcion de validate
// export class EmailValidatorService implements AsyncValidator{
//   constructor() { }

//   validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
//     const email = control.value

//     return of({
//       emailTaken: true,
//     }).pipe(
//       delay(2000)
//     )
//   }
// }
export class EmailValidatorService implements AsyncValidator {
  constructor() {}

  validate(
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;

    //* Observavle que hace la "peticion"
    const httpCallObervable = new Observable<ValidationErrors | null>(
      (susbscriber) => {
        //* Se crea una nueva subscripcion
        if (email === 'juan@mail.com') {
          susbscriber.next({ emailTaken: true }); //*Emite el siguiente valor
          susbscriber.complete(); //*Completa la subscripcion
          return;
        }

        susbscriber.next(null);
        susbscriber.complete();
      }
    ).pipe(
      delay(3000)
    );

    return httpCallObervable
  }
}

//* Posible manera de retornar una respuesta despues de hcaer una consulta al backend
// return this.http.get<any[]>(`https://localhost:3000/users?q=${email}`).pipe(
//   map(
//     res => {
//       return (res.length === 0)
//       ? null
//       : {emailTaken: true}
//     }
//   )
// )
