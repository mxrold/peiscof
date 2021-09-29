import React from 'react';
import _ from 'lodash';
import {
    FaFacebookSquare,
    FaGithub,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutube,
    FaTelegram,
    FaRegEnvelope
} from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const SIZE = '26px'
export default class Icon extends React.Component {
    render() {
        const icon = _.get(this.props, 'icon');
        switch (icon) {
            case 'facebook':
                return (
                    <FaFacebookSquare size={SIZE} />
                );
            case 'github':
                return (
                    <FaGithub size={SIZE} />
                );
            case 'instagram':
                return (
                    <RiInstagramFill size={SIZE} />
                );
            case 'linkedin':
                return (
                    <FaLinkedin size={SIZE} />
                );
            case 'twitter':
                return (
                    <FaTwitterSquare size={SIZE} />
                );
            case 'youtube':
                return (
                    <FaYoutube size={SIZE} />
                );
            case 'telegram':
                return (
                    <FaTelegram size={SIZE} />
                );
            case 'email':
                return (
                    <FaRegEnvelope size={SIZE} />
                );
            default:
                return null;
        }
    }
}
