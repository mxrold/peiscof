import React from 'react';
import _ from 'lodash';
import emailjs from 'emailjs-com';

import { htmlToReact, markdownify } from '../utils';
import FormField from './FormField';

export default class SectionForm extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const content = _.get(section, 'content');
        const formId = _.get(section, 'form_id');
        const formFields = _.get(section, 'form_fields');
        const submitLabel = _.get(section, 'submit_label');
        const formHoneypotInputId = formId + '-honeypot';
        const formHoneypotLabelId = formId + '-honeypot-label';
        const formHoneypotName = formId + '-bot-field';

        function handleSendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_dfu7c5o', 'template_ku7zq0i', e.target, 'user_MIYCiUP5LQl52r9NDoiFD', process.env.EMAIL_TOKEN)
              .then((result) => {
                window.alert('¡Correo enviado!')
                 e.target.reset()
              }, (error) => {
                window.alert('Ocurrió un error al enviar el formulario.')
              });
          }

        return (
            <section id={sectionId} className="block block-form outer">
                <div className="inner">
                {(title || subtitle) && (
                        <div className="block-header inner-sm">
                            {title && <h2 className="block-title line-top">{title}</h2>}
                            {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                        </div>
                    )}
                    <div className="block-content inner-sm">
                        {content && markdownify(content)}
                        <form
                            name={formId}
                            id={formId}
                            onSubmit={handleSendEmail}
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot={formHoneypotName}
                        >
                            <div className="screen-reader-text">
                                <label id={formHoneypotLabelId} htmlFor={formHoneypotInputId}>
                                    Don't fill this out if you're human:
                                    <input aria-labelledby={formHoneypotLabelId} id={formHoneypotInputId} name={formHoneypotName} />
                                </label>
                            </div>
                            <input type="hidden" name="form-name" value={formId} />
                            {_.map(formFields, (field, index) => <FormField key={index} {...this.props} field={field} />)}
                            <div className="form-submit">
                                <button type="submit" className="button">{submitLabel}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
