import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nipValidator } from 'src/shared/validators/nip-validator/nip.validator';

import { ContactPageService } from './contact-page.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  providers: [ContactPageService],
})
export class ContactPageComponent implements OnInit {
  form: FormGroup;
  selectAllCheckbox = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactPageService
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  private setupForm() {
    this.form = this.formBuilder.group({
      companyName: [null],
      email: [null, [Validators.required, Validators.email]],
      identyficationNumber: [null, [Validators.required, nipValidator]],
      phoneNumber: [null],
      subject: [null, [Validators.required]],
      drivingLicense: [null],
      message: [null],
      personalConsents: [false],
      phoneContactConsents: [false],
    });
  }

  public setAllConsent(): void {
    let personalConsents = this.form.get('personalConsents');
    let phoneContactConsents = this.form.get('phoneContactConsents');

    this.selectAllCheckbox = !this.selectAllCheckbox;

    personalConsents.patchValue(this.selectAllCheckbox);
    phoneContactConsents.patchValue(this.selectAllCheckbox);
  }

  onSubmit(): void {
    this.form.markAsTouched();
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.contactService.sendForm(this.form.getRawValue());
  }
}
