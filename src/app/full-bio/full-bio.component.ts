import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'full-bio',
  templateUrl: './full-bio.component.html',
  styleUrls: ['./full-bio.component.scss']
})
export class FullBioComponent implements OnInit {
  
  constructor(private meta: MetaService) { }

  ngOnInit() {
    this.meta.generateTags({
      title: 'Traveling Trotter: A little about me'
    })
  }

}
