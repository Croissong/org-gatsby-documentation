import htmlFrontMatter from 'html-frontmatter'
import objectAssign from 'object-assign'
import $ from 'cheerio';
import _ from 'lodash';

module.exports = function (content) {
  let parsedHTML = $.load(content);
  let reactData = getReactData(parsedHTML);
  this.cacheable()
  const data = objectAssign({}, htmlFrontMatter(content), { body: content })
  this.value = data
  return `module.exports = ${JSON.stringify(data)}`
}

function getReactData(html) {
  let json = _.get(html('script').get()[0], 'children[0].data');
  return json ? JSON.parse(json) : {};
}
