import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'run-home',
  templateUrl: './run-home.component.html',
  styleUrls: ['./run-home.component.scss']
})
export class RunHomeComponent implements OnInit {
  articles = [];

  constructor(private http: HttpClient, private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    this.http.get('./assets/article-directory.json').subscribe(data => {
      data['articles'].run.forEach(article => {
        this.articles.push(article);
      });
    });

    let title = 'Traveling Trotter: Running tips, my favorite runs, and more'

    this.titleService.setTitle(title);
    this.meta.generateTags({
      title: title
    })
  }

}
