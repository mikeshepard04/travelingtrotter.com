import 'zone.js/dist/zone-node';
import * as path from 'path';
import * as fs from 'fs';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppPrerenderModuleNgFactory } from './dist/prerender/main';

const distFolder = './dist/browser';
const index = fs
  .readFileSync(path.resolve(__dirname, `${distFolder}/index.html`), 'utf8')
  .toString();

const paths = [
  '/home',
  '/run',
  '/hike',
  '/bio'];
enableProdMode();

paths.forEach(p => renderToHtml(p, distFolder + p));

renderToHtml('/index.html', distFolder);

function renderToHtml(url: string, folderPath: string): void {
  renderModuleFactory(AppPrerenderModuleNgFactory, {
    url,
    document: index
  }).then(html => {
    if (url !== '/index.html') {
      fs.mkdirSync(folderPath);
    }
    fs.writeFile(folderPath + '/index.html', html, (err => {
      if (err) {
        throw err;
      }
      console.log(`success`);
    }));
  });
}
