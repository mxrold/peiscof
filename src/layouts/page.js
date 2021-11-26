import React from 'react';
import _ from 'lodash';
import { Layout, SectionCategories } from '../components/index';
export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
          <Layout page={page} config={config}>
            <div className="inner outer">
              <h1 className="post-title line-top">{title}</h1>
              <SectionCategories posts={posts} title={title}/>
            </div>
          </Layout>
        );
    }
}