import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
const { JSDOM } = jsdom;

describe("Index.html", () => {
  const indexHtml = fs.readFileSync('./src/index.html', "utf-8");
  const dom = new JSDOM(indexHtml);

  it('Should contain header', (done) => {
    const headerElement = dom.window.document.querySelector("body > header");
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

  it('Must contain script referencing bundle.js', (done) => {
    const scriptElement = dom.window.document.querySelector("script");
    if (scriptElement == null) {
      expect("Have script tag").is.equal("no script tag");
    } else {
      expect(scriptElement.src).is.equal("bundle.js");
    }
    done();
    dom.window.close();
  });
  // dom.window.close();
});
