const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("Doctype", () => {
  // This test checks: doctype
  const html = fs.readFileSync(path.resolve(__dirname, "../index.html"),"utf8");
  const dom = new JSDOM(html);
  const document = dom.window.document;
  expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
});
