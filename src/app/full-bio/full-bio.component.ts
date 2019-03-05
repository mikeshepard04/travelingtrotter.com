import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'full-bio',
  templateUrl: './full-bio.component.html',
  styleUrls: ['./full-bio.component.scss']
})
export class FullBioComponent implements OnInit {
  article: object;
  
  constructor(private meta: MetaService, private titleService: Title, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/article-directory.json').subscribe(data => {
      data['articles'].forEach(article => {
        if (article.code === 'the-adventure-begins') {
          this.article = article;
        }
      });
    });

    let title = 'Traveling Trotter: A little about me';
    this.titleService.setTitle(title);
    this.meta.generateTags({
      title: title
    })
  }

}
