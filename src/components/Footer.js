import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix, Link } from '../utils';
import ActionLink from './ActionLink';
import Action from './Action';
import Donations from './Donations';
import { FiArrowUpCircle } from 'react-icons/fi'
export default class Footer extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');
        const categories = _.get(footer, 'categories');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');
        const logo = _.get(footer, 'logo_img');
        const logoAlt = _.get(footer, 'logo_img_alt', '');

        return (
            <footer id="colophon" className="site-footer outer">
                <div className="inner">
                    <div className="site-footer-inside">
                        <div className="site-info">
                            <div className="site-logo-footer">
                                <Link href={withPrefix('/')}>
                                    <img src={withPrefix(logo)} alt={logoAlt} loading="lazy" />
                                </Link>
                            </div>
                            {copyright && <span className="copyright">{htmlToReact(copyright)}</span>}
                            {_.map(links, (action, index) => <ActionLink key={index} action={action} />)}
                        </div>
                        <div className="site-home">
                            <a href="#page">Inicio <FiArrowUpCircle /></a>
                        </div>
                    </div>
                    <div className="site-buttons">
                        <div className="site-categories">
                            <p>Categorias</p>
                            <ul className="site-categories-list">
                                {_.map(categories, (action) => <li key={action.name}>{action.name}</li>)}
                            </ul>
                        </div>
                        <div className="site-social">
                            <Donations />
                        </div>
                    </div>
                    {hasSocial && !_.isEmpty(socialLinks) && (
                        <div className="social-links">
                            {_.map(socialLinks, (action, index) => <Action key={index} action={action} />)}
                        </div>
                    )}
                </div>
            </footer>
        );
    }
}
