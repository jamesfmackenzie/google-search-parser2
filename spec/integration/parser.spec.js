/*global describe, it, xit, expect, jasmine */

describe("Parser", function () {
	var request = require("request"),
		Parser = require("../../parser.js");

	describe("parseKnowledgeGraphCarousel", function () {
		describe("known search term", function () {
			var searchTerm = "snes games";

			it("returns non-empty array", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphCarousel(searchTerm, function (results) {

					// assert;
					expect(results.length).toBeGreaterThan(0);
					done();
				});
			});

			it("results have a title", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphCarousel(searchTerm, function (results) {

					// assert
					for (var i = 0; i < results.length; i++) {
						var singleResult = results[i];

						expect(singleResult.title).toEqual(jasmine.any(String));
					}
					done();
				});

				xit("results have a year", function () {
					// TODO: add missing test for cases when (optionally) results have a year
				});
			});
		});
	});

	describe("parseKnowledgeGraphPanel", function () {
		describe("known search term", function () {
			var searchTerm = "Super Mario World";

			it("does not return null", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphPanel(searchTerm, function (results) {

					// assert
					expect(results).not.toEqual(null);
					done();
				});
			});

			it("has a title", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphPanel(searchTerm, function (results) {

					// assert
					expect(results.title).toEqual(jasmine.any(String));
					done();
				});
			});

			it("has properties", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphPanel(searchTerm, function (results) {

					// assert
					expect(Object.keys(results).length).toBeGreaterThan(1);

					done();
				});
			});
		});
	});

	describe("parseImageUrls", function () {
		it("returns non-empty array", function (done) {
			// arrange 
			var parser = new Parser(request);

			// act
			parser.parseImageUrls("gloom amiga screenshot", function (result) {

				// assert
				expect(result.length).toBeGreaterThan(0);
				done();
			});
		});

		it("results have a url, caption and dimensions", function (done) {
			// arrange 
			var parser = new Parser(request);

			// act
			parser.parseImageUrls("Super Mario 64", function (result) {

				// assert
				for (var i = 0; i < result.length; i++) {
					var singleResult = result[i];

					expect(singleResult.url).toEqual(jasmine.any(String));
					expect(singleResult.url).toContain("http");
					expect(singleResult.caption).toEqual(jasmine.any(String));
					expect(singleResult.dimensions).toEqual(jasmine.any(String));
					expect(singleResult.dimensions).toContain("x");
				}
				done();
			});
		});
	});
});