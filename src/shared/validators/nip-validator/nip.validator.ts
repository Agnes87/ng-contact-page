import { AbstractControl, ValidationErrors } from '@angular/forms';

export function nipValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (typeof control.value !== 'string') {
    return null;
  }

  const nip = control.value.replace(/[\ \-]/gi, '');

  let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  let sum = 0;
  let controlNumber = parseInt(nip.substring(9, 10));
  let weightCount = weight.length;
  for (let i = 0; i < weightCount; i++) {
    sum += parseInt(nip.substr(i, 1)) * weight[i];
  }

  if (sum % 11 === controlNumber) {
    return null;
  }
  return { nip: true };
}
