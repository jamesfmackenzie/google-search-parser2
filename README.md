# bbcnews-parser
Parse article data from BBC News home page (http://www.bbc.co.uk/news)

## Usage
```javascript
var request = require("request");
NewsParser = require("bbcnews-parser"),
var newsParser = new NewsParser(request);

newsParser.parseMostReadArticles(function(mostReadArticles) {
  console.log(mostReadArticles);
});
```
