# google-search-parser2
Parse image and Knowledge Graph data from Google Search results

## Usage

### Fetch Knowledge Graph Carousel results
```javascript
var request = require("request");
var Parser = require("google-search-parser2");
var parser = new Parser(request);
    
var searchTerm = "snes games";

parser.parseKnowledgeGraphCarousel(searchTerm, function (results) {
  console.log(results); // [ { title: "Super Mario World", year: 1990 }, { title: "Chrono Trigger" ...
});
```

### Fetch Knowledge Graph Panel results
```javascript
var request = require("request");
var Parser = require("google-search-parser2");
var parser = new Parser(request);
    
var searchTerm = "Super Mario World";

parser.parseKnowledgeGraphPanel(searchTerm, function (result) {
  console.log(result); // { title: "Super Mario World", genre: "Platform game", developers: [ "Nintendo" ] ...
});
```

### Fetch image URLs
```javascript
var request = require("request");
var Parser = require("google-search-parser2");
var parser = new Parser(request);
    
var searchTerm = "Super Mario World";

parser.parseImageUrls(searchTerm, function (urls) {
  console.log(urls); // [ "https://upload.wikimedia.org/wikipedia/en/f/f4/Supermarioworld.jpg", "http ...
});
```
