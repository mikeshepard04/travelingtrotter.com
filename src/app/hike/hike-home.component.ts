import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'hike-home',
  templateUrl: './hike-home.component.html',
  styleUrls: ['./hike-home.component.scss']
})
export class HikeHomeComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.generateTags({
      title: 'Traveling Trotter: My favorite hikes, parks, and campsites'
    })
  }

}
