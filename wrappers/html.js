import React from 'react'
import Helmet from 'react-helmet'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { Images, openLightbox } from 'utils/images';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },

  onClick (e) {
    let state;
    switch(e.target.tagName) {
      case 'IMG':
        state = Lightbox.openLightbox(this.state, e);
        break;
    }
    state && this.setState(state);
  },
  
  render () {
    const page = this.props.route.page.data
    let {images} = page.reactData;
    return (
      <DocumentTitle title={`${page.title} | ${config.siteTitle}`}>
        <div className="markdown" onClick={this.onClick}>
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
          <Images images={images} />
        </div>
      </DocumentTitle>
    )
  },
})
