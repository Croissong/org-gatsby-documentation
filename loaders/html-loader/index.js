import $ from 'cheerio';
import _ from 'lodash';


module.exports = function (html) {
  let data = parseContent(html); 
  this.cacheable(); 
  this.value = data;
  return `module.exports = ${JSON.stringify(data)}`;
};

function parseContent(html) {
  let parsedHTML = $.load(html); 
  let script = getTagContent(parsedHTML, 'script');
  let reactData = script ? JSON.parse(script) : {};
  let title = getTagContent(parsedHTML, 'title'); 
  let body = parsedHTML('body').html();
  return {body, reactData, title};
}

function getTagContent(html, tag) {
  return _.get(html(tag).get()[0], 'children[0].data');
}
