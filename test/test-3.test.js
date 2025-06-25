const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("List", () => {
  // This test checks: list
  const html = fs.readFileSync(path.resolve(__dirname, "../index.html"),"utf8");
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(document.querySelectorAll("ul li").length).toBe(3);
});
