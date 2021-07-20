import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContactForm } from './contact-page.interface';

@Injectable()
export class ContactPageService {
  constructor(private httpClient: HttpClient) {}

  sendForm(data: ContactForm) {
    //return this.httpClient.post<ContactForm>('url', data);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
  }
}
