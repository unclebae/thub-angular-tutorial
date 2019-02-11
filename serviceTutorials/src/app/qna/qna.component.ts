import { Component, OnInit } from '@angular/core';
import { QnaServiceService } from './qna-service.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {

  qanLists;
  constructor(private qnaService: QnaServiceService) { }

  ngOnInit() {
    this.qanLists = this.qnaService.getQnaLists();
  }

}
