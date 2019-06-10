import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})

export class ArticleHeaderComponent implements OnInit {
  @Input() article: any;
  isBrowser: boolean;

  private _intersectionObserver?: IntersectionObserver;

  constructor(@Inject(DOCUMENT) private document: any, @Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const image = this.document.querySelectorAll('#' + this.article.code)[0];

      this._intersectionObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
          console.log('blah');

          const imageElement = entry.target;

          if (entry.isIntersecting) {
            imageElement.setAttribute('src', this.article.image);
            observer.disconnect();
          }
        })
      });

      this._intersectionObserver.observe(image);
    }
  }

}
