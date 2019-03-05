import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() article: object;

  constructor() { }

  ngOnInit() { }

}
