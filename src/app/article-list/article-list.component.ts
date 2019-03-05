import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles = [];

  constructor(private http: HttpClient, private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    this.http.get('./assets/article-directory.json').subscribe(data => {
      data['articles'].forEach(article => {
        this.articles.push(article);
      });
    });

    this.titleService.setTitle('Traveling Trotter: Enjoying Life One Mile at a Time');
    this.meta.generateTags({
      title: 'Traveling Trotter: Full list of articles I have written'
    })
  }

}
