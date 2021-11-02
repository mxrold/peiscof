import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import Author from '../components/Author';
import SharePost from '../components/SharePost';
import RelatedPosts from '../components/RelatedPosts';
import ReadingTime from '../components/ReadingTime';
import Tag from '../components/Tag';

export default class Post extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const url = _.get(page, 'url');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const imageAlt = _.get(page, 'image_alt', '');
        const tag = _.get(page, 'tag');
        const date = _.get(page, 'date');
        const dateTimeAttr = moment(date).locale('es').strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).locale('es').format('L');
        const author = _.get(page, 'author');
        const markdownContent = _.get(page, 'markdown_content');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <div className="inner outer post-flex">
                    <article className="post-full post-main">
                        <header className="post-header inner-sm">
                            <h1 className="post-title line-top">{title}</h1>
                            {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                            <div className="post-data">
                            <div className="post-data-left">
                                <div className="post-meta">
                                    <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                                </div>
                                <span>·</span>
                                <div>
                                    <ReadingTime text={markdownContent} />
                                </div>
                            </div>
                            <Tag value={tag} />
                        </div>
                        </header>
                        {image && (
                            <div className="post-image">
                                <img src={withPrefix(image)} alt={imageAlt} loading="lazy" />
                            </div>
                        )}
                        {markdownContent && <div className="post-content inner-sm">{markdownify(markdownContent)}</div>}
                    </article>
                    <section className="post-extra">
                        <Author 
                            author={author}
                        />
                        <SharePost url={url} title={title} />
                        <RelatedPosts posts={posts} title={title} tag={tag} />
                    </section>
                </div>
            </Layout>
        );
    }
}
