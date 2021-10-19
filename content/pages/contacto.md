---
title: Contacto
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >-
      ¡Hola! Gracias por su interés en escribirnos. Por favor complete el siguiente formulario o envíenos un correo electrónico a [team@peiscof.com](mailto:team@peiscof.com)
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Nombre
        default_value: Nombre
        is_required: true
      - input_type: email
        name: email
        label: Correo electrónico
        default_value: Correo electrónico
        is_required: true
      - input_type: select
        name: subject
        label: Motivo del contacto
        default_value: Selecciona una opción
        options:
          - Error en el sitio
          - Sugerencias
          - Otro
      - input_type: textarea
        name: message
        label: Mensaje
        default_value: Escribe aquí tu mensaje
        is_required: true
    submit_label: Enviar mensaje
seo:
  title: Contacto | Peiscof
  description: ¡Hola! Gracias por su interés en escribirnos. Por favor complete el formulario de este enlace o envíenos un correo electrónico a team@peiscof.com
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: ¡Hola! Gracias por su interés en escribirnos. Por favor complete el formulario de este enlace o envíenos un correo electrónico a team@peiscof.com
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: ¡Hola! Gracias por su interés en escribirnos. Por favor complete el formulario de este enlace o envíenos un correo electrónico a team@peiscof.com
layout: advanced
---
