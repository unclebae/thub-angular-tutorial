import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {

  title: String;
  pathValue: String;

  constructor(private route: ActivatedRoute) { 
    this.title = route.snapshot.data['title'];
    this.pathValue = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
