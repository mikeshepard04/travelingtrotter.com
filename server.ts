import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import { join } from 'path';

enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = fs.readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

const distFolder = join(DIST_FOLDER, 'browser');

// TODO: Why is __dirname not working?
const index = fs
  .readFileSync(path.resolve('C:/dev/traveling-trotter', `${distFolder}/index.html`), 'utf8')
  .toString();

const paths = [
  '/run',
  '/hike',
  '/the-adventure-begins',
  '/four-frustrations-of-winter-running',
  '/gear-obsession'
];

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
  try {
    console.log('Rendering...');

    // Run through each of the routes after the server has started so files from the server can be loaded via the http-interceptor
    paths.forEach(p => renderToHtml(p, distFolder + p));
    renderToHtml('/index.html', distFolder);
  } catch (err) {
    throw err;
  }
});

// TODO: Put in separate file?
function renderToHtml(url: string, folderPath: string): void {
  renderModuleFactory(AppServerModuleNgFactory, {
    url,
    document: index,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ],
  }).then(html => {
    if (url !== '/index.html') {
      fs.mkdirSync(folderPath);
    }
    fs.writeFile(folderPath + '/index.html', html, (err => {
      if (err) {
        throw err;
      } else {
        console.log(folderPath + ` successfully renderd`);
      }
    }));
  });
}
