import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: object;

  constructor(private route: ActivatedRoute, private http: HttpClient, private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    let articleName = this.route.params['value'].article;

    if (articleName) {
      this.http.get('./assets/article-directory.json').subscribe(data => {
        data['articles'].run.forEach(article => {
          if (article.code === articleName) {
            this.article = article;
          }
        });

        if (!this.article) {
          data['articles'].hike.forEach(article => {
            if (article.code === articleName) {
              this.article = article;
            }
          });
        }

        this.titleService.setTitle(`Traveling Trotter: ${this.article['name']}`);
        this.meta.generateTags({
          title: `Traveling Trotter: ${this.article['name']}`
        })
      });
    }    
  }

}
