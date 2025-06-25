const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Paragraph, Image, and Anchor', () => {
  // This test checks: paragraph, image, and anchor elements
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(document.querySelector('p')).not.toBeNull();
  expect(document.querySelector('img')).not.toBeNull();
  expect(document.querySelector('a')).not.toBeNull();
});
