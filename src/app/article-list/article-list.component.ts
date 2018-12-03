import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articlePaths = ['./assets/articles/the-adventure-begins.md', './assets/articles/four-frustrations-of-winter-running.md'];

  constructor() { }

  ngOnInit() { }

}
