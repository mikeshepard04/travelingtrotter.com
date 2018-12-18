import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hike-home',
  templateUrl: './hike-home.component.html',
  styleUrls: ['./hike-home.component.scss']
})
export class HikeHomeComponent implements OnInit {

  constructor(private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    let title = 'Traveling Trotter: My favorite hikes, parks, and campsites';

    this.titleService.setTitle(title);
    this.meta.generateTags({
      title: title
    })
  }

}
