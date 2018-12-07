import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'run-home',
  templateUrl: './run-home.component.html',
  styleUrls: ['./run-home.component.scss']
})
export class RunHomeComponent implements OnInit {
  articlePaths = ['./assets/articles/four-frustrations-of-winter-running.md', './assets/articles/the-adventure-begins.md'];

  constructor() { }

  ngOnInit() {
  }

}
