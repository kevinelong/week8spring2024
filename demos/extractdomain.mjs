function domainName(url) {
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}
console.log(domainName("www.xakep.ru"))

// import { describe } from "mocha";
// import { assert } from "chai";

// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })  
// })
