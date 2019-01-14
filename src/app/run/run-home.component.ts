import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'run-home',
  templateUrl: './run-home.component.html',
  styleUrls: ['./run-home.component.scss']
})
export class RunHomeComponent implements OnInit {
  articlePaths = ['./assets/articles/gear-obsession.md',
                  './assets/articles/four-frustrations-of-winter-running.md', 
                  './assets/articles/the-adventure-begins.md'];

  constructor(private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    let title = 'Traveling Trotter: Running tips, my favorite runs, and more'

    this.titleService.setTitle(title);
    this.meta.generateTags({
      title: title
    })
  }

}
