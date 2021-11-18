import React from 'react';
import _ from 'lodash';
import {
    FaFacebookSquare,
    FaGithub,
    FaLinkedin,
    FaTwitterSquare,
    FaYoutube,
    FaTelegram,
    FaRegEnvelope,
    FaWhatsapp,
    FaTiktok
} from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const SIZE = '26px'
const COLOR = {
    facebook: '#3b5998',
    github: '#171515',
    instagram: '#F9FAFB',
    linkedin: '#0e76a8',
    twitter: '#1DA1F2',
    youtube: '#FF0000',
    telegram: '#0088cc',
    email: '#272c30',
    whatsapp: '#128c7e',
    tiktok: '#ff0050'
}
export default class Icon extends React.Component {
    render() {
        const icon = _.get(this.props, 'icon');
        switch (icon) {
            case 'facebook':
                return (
                    <FaFacebookSquare size={SIZE} color={COLOR.facebook} />
                );
            case 'github':
                return (
                    <FaGithub size={SIZE} color={COLOR.github} />
                );
            case 'instagram':
                return (
                    <RiInstagramFill size={SIZE} color={COLOR.instagram} />
                );
            case 'linkedin':
                return (
                    <FaLinkedin size={SIZE} color={COLOR.linkedin} />
                );
            case 'twitter':
                return (
                    <FaTwitterSquare size={SIZE} color={COLOR.twitter} />
                );
            case 'youtube':
                return (
                    <FaYoutube size={SIZE} color={COLOR.youtube} />
                );
            case 'telegram':
                return (
                    <FaTelegram size={SIZE} color={COLOR.telegram} />
                );
            case 'email':
                return (
                    <FaRegEnvelope size={SIZE} color={COLOR.email} />
                );
            case 'whatsapp':
                return (
                    <FaWhatsapp size={SIZE} color={COLOR.whatsapp} />
                );
            case 'tiktok':
                return (
                    <FaTiktok size={SIZE} color={COLOR.tiktok} />
                );
            default:
                return '';
        }
    }
}
