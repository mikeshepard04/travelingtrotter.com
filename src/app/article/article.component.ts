import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        'max-height': '20000px'
      })),
      state('closed', style({
        height: '800px'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ]),
  ]
})
export class ArticleComponent implements OnInit {
  @Input() articlePath: string;

  articleExpanded = false;

  toggle() {
    this.articleExpanded = !this.articleExpanded;
  }

  constructor() { }

  ngOnInit() { }

}
