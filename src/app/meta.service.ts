import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class MetaService {

  constructor(private meta: Meta) { }

  generateTags(config) {

    if (!config) {
      config = {
        title: 'Traveling Trotter'
      }
    }

    this.meta.updateTag({ name: 'title', content: config.title });
  }

}
