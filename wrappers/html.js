import React from 'react'
import Helmet from 'react-helmet'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page.data 
    return (
      <DocumentTitle title={`${page.title} | ${config.siteTitle}`}>
        <div className="markdown">
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
        </div>
      </DocumentTitle>
    )
  },
})
