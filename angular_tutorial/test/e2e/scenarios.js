'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  // it('should redirect index.html to index.html#/bears', function() {
  //   browser().navigateTo('app/index.html');
  //   expect(browser().location().url()).toBe('/bears');
  // });


  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html');
    });


    it('should filter the bear list as user types into the search box', function() {
      expect(repeater('.bears li').count()).toBe(4);

      input('query').enter('grizzly');
      expect(repeater('.bears li').count()).toBe(1);

      input('query').enter('bear');
      expect(repeater('.bears li').count()).toBe(4);
    });


  //   it('should be possible to control bear order via the drop down select box', function() {
  //     input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

  //     expect(repeater('.bears li', 'Phone List').column('bear.name')).
  //         toEqual(["Motorola XOOM\u2122 with Wi-Fi",
  //                  "MOTOROLA XOOM\u2122"]);

  //     select('orderProp').option('Alphabetical');

  //     expect(repeater('.bears li', 'Phone List').column('bear.name')).
  //         toEqual(["MOTOROLA XOOM\u2122",
  //                  "Motorola XOOM\u2122 with Wi-Fi"]);
  //   });


  //   it('should render bear specific links', function() {
  //     input('query').enter('nexus');
  //     element('.bears li a').click();
  //     expect(browser().location().url()).toBe('/bears/nexus-s');
  //   });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/bears/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(binding('bear.name')).toBe('Nexus S');
    });


    it('should display the first bear image as the main bear image', function() {
      expect(element('img.bear.active').attr('src')).toBe('img/bears/nexus-s.0.jpg');
    });


    it('should swap main image if a thumbnail image is clicked on', function() {
      element('.bear-thumbs li:nth-child(3) img').click();
      expect(element('img.bear.active').attr('src')).toBe('img/bears/nexus-s.2.jpg');

      element('.bear-thumbs li:nth-child(1) img').click();
      expect(element('img.bear.active').attr('src')).toBe('img/bears/nexus-s.0.jpg');
    });
  });
});
