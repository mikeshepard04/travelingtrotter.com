import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articlePaths = ['./assets/articles/four-frustrations-of-winter-running.md', './assets/articles/the-adventure-begins.md'];

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.generateTags({
      title: 'Traveling Trotter: Full list of articles I have written'
    })
  }

}
