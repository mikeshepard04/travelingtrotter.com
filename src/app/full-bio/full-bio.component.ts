import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'full-bio',
  templateUrl: './full-bio.component.html',
  styleUrls: ['./full-bio.component.scss']
})
export class FullBioComponent implements OnInit {

  constructor(private meta: MetaService, private titleService: Title) { }

  ngOnInit() {
    let title = 'Traveling Trotter: A little about me';

    this.titleService.setTitle(title);
    this.meta.generateTags({
      title: title
    })
  }

}
