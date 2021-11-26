import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix, classNames } from '../utils';
import Header from './Header';
import Categories from './Categories'; 
import Newsletter from './Newsletter';
import Footer from './Footer';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleVideoEmbeds = this.handleVideoEmbeds.bind(this);
    }

    componentDidMount() {
        this.handleVideoEmbeds();
    }

    componentDidUpdate() {
        this.handleVideoEmbeds();
    }

    handleVideoEmbeds() {
        const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
        noframe(videoEmbeds.join(','), '.inner-sm');
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageTitle = _.get(page, 'title');
        const config = _.get(this.props, 'config');
        const categories = _.get(config, 'categories');
        const configTitle = _.get(config, 'title');
        const colorScheme = _.get(config, 'color_scheme', 'light');
        const accentColor = _.get(config, 'accent_color', 'blue');
        const favicon = _.get(config, 'favicon');
        const domain = _.trim(_.get(config, 'domain', ''), '/');
        const seo = _.get(page, 'seo');
        const seoTitle = _.get(seo, 'title');
        const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');
        const seoDescription = _.get(seo, 'description', '');
        const seoExtra = _.get(seo, 'extra', []).map((meta, index) => {
            const keyName = _.get(meta, 'keyName', 'name');
            const name = _.get(meta, 'name');
            if (!name) {
                return null;
            }
            const nameAttr = { [keyName]: name };
            const relativeUrl = _.get(meta, 'relativeUrl');
            let value = _.get(meta, 'value');
            if (!value) {
                return null;
            }
            if (relativeUrl) {
                if (!domain) {
                    return null;
                }
                value = domain + withPrefix(value);
            }
            return <meta key={index} {...nameAttr} content={value} />;
        });

        return (
            <React.Fragment>
                <Helmet>
                    <html lang="es" />
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={seoDescription} />
                    <meta name="robots" content="follow, index" />
                    {seoExtra}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap" rel="stylesheet" />
                    {favicon && <link rel="icon" href={withPrefix(favicon)} />}
                    <body className={classNames(`palette-${colorScheme}`, `accent-${accentColor}`)} />
                </Helmet>
                <div id="page" className="site">
                    <Header page={page} config={config} />
                    <Categories categories={categories} style={'header'} styleItem={'header-list'}/>
                    <main id="content">
                        {this.props.children}
                    </main>
                    <Newsletter />
                    <Footer config={config} />
                </div>
            </React.Fragment>
        );
    }
}
