import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustom]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomDirective,
    multi: true
  }]
})
export class CustomDirective implements Validator {

  @Input() appCustom: string;
  // @Input('appCustom') appCustom1: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return control.value === this.appCustom ? {'errorMessage': true} : null;
    // return control.value === this.appCustom1 ? {'errorMessage': true} : null;
    // throw new Error("Method not implemented.");
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }

  constructor() { }

}
