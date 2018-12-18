import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'run-home',
  templateUrl: './run-home.component.html',
  styleUrls: ['./run-home.component.scss']
})
export class RunHomeComponent implements OnInit {
  articlePaths = ['./assets/articles/four-frustrations-of-winter-running.md', './assets/articles/the-adventure-begins.md'];

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.generateTags({
      title: 'Traveling Trotter: Running tips, my favorite runs, and more'
    })
  }

}
