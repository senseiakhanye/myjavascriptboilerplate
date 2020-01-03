// import { expect } from 'chai';
const { expect } = require('chai');
const jsdom = require('jsdom');
// import jsdom from 'jsdom';
// import fs from 'fs';
const fs = require('fs');
const { JSDOM } = jsdom;
import indexapi from './indexapi';

describe("Index.html", () => {
  const indexHtml = fs.readFileSync('./src/index.html', "utf-8");
  const dom = new JSDOM(indexHtml);

  it('Should have container', (done) => {
    const headerElement = dom.window.document.querySelector("body > .container");
    headerElement === undefined;
    const exist = headerElement != null;
    expect(exist).is.equal(true);
    done();
  });

  it('Should contain header', (done) => {
    const headerElement = dom.window.document.querySelector(".container > header");
    headerElement === undefined;
    const exist = headerElement != null;
    expect(exist).is.equal(true);
    done();
  });

  it('Should contain nav', (done) => {
    const navElement = dom.window.document.querySelector("header > nav");
    const exist = navElement != null;
    expect(exist).is.equal(true);
    done();
  });

  it('Should contain main', (done) => {
    const mainElement = dom.window.document.querySelector("main");
    const exist = mainElement != null;
    expect(exist).is.equal(true);
    done();
  });

  it('Should contain footer', (done) => {
    const footerElement = dom.window.document.querySelector("footer");
    const exist = footerElement != null;
    expect(exist).is.equal(true);
    done();
  });

  it('Should add one list item', (done) => {
    const listElement = dom.window.document.querySelector("#names");
    indexapi.addListItem(listElement, {firstName: "Test 1"});
    indexapi.addListItem(listElement, {firstName: "Test 2"});
    indexapi.addListItem(listElement, {firstName: "Test 3"});
    expect(listElement.children.length).is.equal(3);
    done();
    dom.window.close();
  });
  // dom.window.close();
});
