const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Title', () => {
  // This test checks: title
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(document.querySelector('title')).not.toBeNull();
});
