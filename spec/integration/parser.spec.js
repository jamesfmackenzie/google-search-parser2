/*global describe, it, expect, jasmine */

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

			it("returns expected result", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphCarousel(searchTerm, function (results) {

					// assert
					var expected = {
						title: "Super Mario World",
						year: 1990
					};

					expect(results).toContain(expected);
					done();
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

			it("has expected title", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphPanel(searchTerm, function (results) {

					// assert
					expect(results.title).toEqual(searchTerm);
					done();
				});
			});

			it("has expected properties", function (done) {
				// arrange 
				var parser = new Parser(request);

				// act
				parser.parseKnowledgeGraphPanel(searchTerm, function (results) {

					// assert
					expect(results.genre).toEqual("Platform game");
					expect(results.series).toEqual("Mario Series");
					expect(results.developers).toContain("Nintendo");
					expect(results.designers).toContain("Shigeru Miyamoto");
					expect(results.platforms).toContain("Super Nintendo Entertainment System");
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
			parser.parseImageUrls("Super Mario 64", function (result) {

				// assert
				expect(result.length).toBeGreaterThan(0);
				done();
			});
		});

		it("results are urls", function (done) {
			// arrange 
			var parser = new Parser(request);

			// act
			parser.parseImageUrls("Super Mario 64", function (result) {

				// assert
				for (var i = 0; i < result.length; i++) {
					var singleResult = result[i];

					expect(singleResult).toEqual(jasmine.any(String));
					expect(singleResult).toContain("http");
				}
				done();
			});
		});
	});
});