import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articlePaths = ['./assets/articles/four-frustrations-of-winter-running.md', './assets/articles/the-adventure-begins.md'];

  constructor(private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Traveling Trotter');
    this.meta.generateTags({
      title: 'Traveling Trotter: Full list of articles I have written'
    })
  }

}
