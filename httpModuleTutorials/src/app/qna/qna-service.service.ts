import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QnaServiceService {

  faq = [
    {
      "title":"What is T-Hub?",
      "content":"T-Hub is the SK Telecom developer community."
    },
    {
      "title":"What is a Master?",
      "content":"Master is pxpert of Open Source."
    },
    {
      "title":"How can I connect to T-Hub?",
      "content":"You can find T-Hub through this url: ",
      "openLink":"https://thub.sktelecom.com/"
    }
  ]
  constructor() { }

  getQnaLists() {
    return this.faq;
  }
}
