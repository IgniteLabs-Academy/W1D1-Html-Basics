const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Heading', () => {
  // This test checks: heading
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(document.querySelector('h1')).not.toBeNull();
});
