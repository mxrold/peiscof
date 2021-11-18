---
title: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
url: servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-1
subtitle: ¿Creaste un proyecto y no sabes como subirlo a internet? ¿Estás comenzando en el mundo del desarrollo web y quieres armar tu portafolio? Acompáñanos en este artículo donde te contaremos sobre las plataformas más conocidas y como utilizarlas.
excerpt: >-
  Descubre las mejores plataformas gratuitas para almacenar tus proyectos y sitios web. Aprende a utilizar Firebase, Netlify, GitHub Pages, Vercel, Surge y GitLab.
date: '2021/11/18'
tag: programación
thumb_image: https://res.cloudinary.com/peiscof/image/upload/v1637175731/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-portada_ykgdub.png
thumb_image_alt: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
image: https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png
image_alt: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
author: martin-roldan
seo:
    title: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
    description: >-
      Descubre las mejores plataformas gratuitas para almacenar tus proyectos y sitios web. Aprende a utilizar Firebase, Netlify, GitHub Pages, Vercel, Surge y GitLab.
    extra:
      - name: 'og:type'
        value: article
        keyName: property
      - name: 'og:url'
        value: https://peiscof.com/blog/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web---parte-i
      - name: 'og:title'
        value: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
        keyName: property
      - name: 'og:description'
        value: >-
          Descubre las mejores plataformas gratuitas para almacenar tus proyectos y sitios web. Aprende a utilizar Firebase, Netlify, GitHub Pages, Vercel, Surge y GitLab.
        keyName: property
      - name: 'og:image'
        value: https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png
        keyName: property
        relativeUrl: true
      - name: 'twitter:card'
        value: summary_large_image
      - name: 'twitter:site'
        value: '@peiscof'
      - name: 'twitter:creator'
        value: '@peiscof'
      - name: 'twitter:title'
        value: Servicios y plataformas pará publicar tus proyectos de desarrollo web - Parte I
      - name: 'twitter:description'
        value: >-
          Descubre las mejores plataformas gratuitas para almacenar tus proyectos y sitios web. Aprende a utilizar Firebase, Netlify, GitHub Pages, Vercel, Surge y GitLab.
      - name: 'twitter:image'
        value: https://res.cloudinary.com/peiscof/image/upload/v1637175666/november-2021/servicios-y-plataformas-para-publicar-tus-proyectos-de-desarrollo-web-parte-I-imagen_m3djl2.png
        relativeUrl: true
layout: post
---

Al día de hoy, existen múltiples servicios qué nos permiten alojar esos proyectos qué realizamos a modo de práctica pará aprender una nueva tecnología o montar algo mucho más profesional.

Cada una de las siguientes plataformas nos permiten **alojar sitios estáticos (HTML - CSS - JavaScript).**  Estas cuentan con planes gratuitos así cómo suscripciones mensuales o anuales, para poder obtener mayores características y beneficios. Nos centraremos en los planes básicos, cómo utilizarlos y desplegar un sitio o aplicación web para que finalmente viva en internet.

Este artículo está enfocado en el despliegue de sitios estáticos. Si deseas utilizar herramientas como algún tipo de framework (React, Angular, Vue) puedes usar esto como guía, el proceso es muy similar. Debes tener a mano la documentación de cada plataforma para sumarle esas configuraciones extras. ¡Comencemos!

## Netlify

Netlify es una de las plataformas modernas **orientada a desarrolladores Frontend** la cual nos brinda una **velocidad de carga** asombrosa y **facilidad en el despliegue** y almacenamiento de sitios. Además, nos provee de diversas herramientas que hacen de la plataforma una gran opción a elegir. Las cuales son:

- Despliegue continuo.
- CDN integrado.
- Datos analíticos del uso de nuestro sitio.

### Como crearse una cuenta

Nos permite crearnos una cuenta con diversos servicios de control de versiones como **GitHub, GitLab, Bitbucket** o mediante **correo electrónico.** Si optamos por alguna de las primeras opciones, Netlify nos solicitara autorización para crear la cuenta y también poder desplegar proyectos futuros de manera más simple desde el servicio elegido.

![https://res.cloudinary.com/peiscof/image/upload/v1636561844/november-2021/netlify-signup_yqvx3y.png](https://res.cloudinary.com/peiscof/image/upload/v1636561844/november-2021/netlify-signup_yqvx3y.png)

En este ejemplo, crearemos la cuenta mediante **GitHub** para que puedas ver todo el proceso de registro. Si utilizas otro método los pasos serán similares.
Una vez autorizado el acceso, debemos completar una serie de datos para completar nuestro perfil.

### Como utilizarlo

#### Despliegue a través de la interfaz gráfica:

Completado todo el proceso, nos encontraremos con el panel de Netlify donde podremos subir nuestro sitio mediante las siguientes formas:

- **GitHub, GitLab, Bitbucket:**
Si deseas agregar un nuevo sitio que ya tienes almacenado en uno de estos servicios. Debes seleccionar agregarlo desde el botón de **nuevo sitio desde Git** y vincular ambas cuentas. Nos pedirá elegir que proyecto queremos desplegar y luego seleccionar sobre que rama se encuentra el repositorio, entre otras configuraciones a tener en cuenta según la tecnología con la cual se encuentra desarrollado el sitio. **Si tu proyecto es estático (HTML - CSS - JavaScript)** **deja todas las opciones por defecto.**
    
![https://res.cloudinary.com/peiscof/image/upload/v1637095083/november-2021/netlify-new-site-from-git_k9ibpb.png](https://res.cloudinary.com/peiscof/image/upload/v1637095083/november-2021/netlify-new-site-from-git_k9ibpb.png)
    
- **Cargarlo manualmente:**
Subir un proyecto de esta forma es sumamente fácil, para ello debemos **arrastrar** la carpeta del proyecto al panel de Netlify desde nuestra computadora y **soltarla** allí.
    

#### Despliegue a través de la interfaz de línea de comandos:

Netlify nos provee una serie de comandos para realizar el despliegue desde nuestra terminal. Sigue el paso a paso de la siguiente lista.

- **Instalar Netlify en tu computadora**

```
npm install -g netlify-cli
```

- **Luego debes iniciar sesión y vincular tu cuenta de Netlify con este comando**

```
netlify login
```

- **Iniciar Netlify en tu proyecto**

```
netlify init
```

Al correr este comando, tendremos que seleccionar entre diversas opciones. ¿Recuerdas como lo hiciste mediante la interfaz gráfica? ¡Esto es lo mismo únicamente que lo hacemos desde la terminal!

Puedes optar por crear y configurar un nuevo proyecto, elegir uno ya existente en el sitio de Netlify o conectar un repositorio mediante GitHub para habilitar los despliegues automáticos. En este caso optaremos por hacer el procedimiento mediante la primera opción.

Entre los datos a completar, deberás confirmar el **nombre del equipo de desarrollo** que elegiste previamente, **nombre del proyecto**, si posee **comandos específicos**, entre otras configuraciones adicionales. Te dejamos una imagen con nuestro ejemplo para que puedas ver el resultado del proceso. Recuerda estudiar tu proyecto y evaluar los comandos que necesites para que funcione en producción.

![https://res.cloudinary.com/peiscof/image/upload/v1637171947/november-2021/netlify-init_ss6uw6.png](https://res.cloudinary.com/peiscof/image/upload/v1637171947/november-2021/netlify-init_ss6uw6.png)

- **Desplegar a producción**

```
netlify deploy --prod
```

¡Con este comando podrás desplegar tu proyecto!
<mark>Ten en cuenta que si no quieres enviarlo a producción, puedes usar el siguiente comando para obtener una URL de prueba.</mark>

```
netlify deploy
```

Ambas formas de utilizar la plataforma nos darán el mismo resultado, la URL del proyecto ya desplegado. El cual se verá de esta manera y además nos dará opciones para personalizar el dominio (**domains settings**) y cambiarlo a un nombre que queramos, entre muchas más herramientas.

![https://res.cloudinary.com/peiscof/image/upload/v1637095918/november-2021/netlify-deploy_ixtmmx.png](https://res.cloudinary.com/peiscof/image/upload/v1637095918/november-2021/netlify-deploy_ixtmmx.png)

### Conclusión

Netlify es una herramienta que debes tener siempre presente usarla, tanto por su rapidez y simpleza que nos presenta junto con todas las herramientas que nos provee para tener un desarrollo aún más completo.

Puedes ver nuestro resultado en el siguiente enlace: [Proyecto de prueba](https://gallant-kilby-50f7db.netlify.app/)

## GitHub pages

GitHub es una plataforma para **almacenar tus proyectos** y visualizar todo el código que contengan a través del sitio. Funciona a través del sistema de **control de versiones Git**, el cual permite trabajar y guardar de forma eficiente y confiable el código creado en un repositorio local.

De esta manera, GitHub permite a los desarrolladores conectar su proyecto local y alojarlo como repositorio remoto. Al vivir en internet, tu repositorio puede aprovechar de todas las herramientas y características que nos brinda esta plataforma, tal como permitir colaboraciones de otras personas para lograr grandes herramientas a partir de la comunidad.

Fue comprada por Microsoft en 2018.

### Como crearse una cuenta

Crear una cuenta es muy similar a lo que estamos acostumbrados. GitHub nos solicitará un **email**, **contraseña** y **nombre de usuario**. Luego realizaremos un puzzle para verificar que somos humanos, así como también ingresar el código que nos llegara al correo asociado.

![https://res.cloudinary.com/peiscof/image/upload/v1637071373/november-2021/github-signup_dxdak7.png](https://res.cloudinary.com/peiscof/image/upload/v1637071373/november-2021/github-signup_dxdak7.png)

### Como utilizarlo

Una vez que ingresas, te encontraras con tu perfil con todas las herramientas que nos provee GitHub. Para poder utilizarlo, debes **tener previamente instalado Git** en tu computadora, un** repositorio iniciado** con el mismo y ya **conectado con el repositorio remoto**. Si no conoces sobre esto, no te preocupes, quédate atento que pronto tendremos disponible una guía de introducción a Git y GitHub.

Para desplegar tu sitio, debes dirigirte a la sección de tus repositorios, entrar a la carpeta del proyecto y seleccionar los ajustes. Allí verás muchas opciones, **nos centraremos en pages**.

![https://res.cloudinary.com/peiscof/image/upload/v1637091859/november-2021/github-pages_k7etfz.png](https://res.cloudinary.com/peiscof/image/upload/v1637091859/november-2021/github-pages_k7etfz.png)

En pages, indicaremos cuál es la **rama principal** del proyecto en donde se encuentra el código que deseamos ver en producción y guardamos los datos actualizados. ¡Listo, tu proyecto ya se encuentra desplegado en internet y tendrás la URL para acceder en él!

<mark>Si al entrar al enlace no puedes ver tu proyecto, debes indicar y agregar en la URL cuál es el archivo raíz del mismo. Por ejemplo: un archivo index.html</mark>

### Conclusión

Usar GitHub Pages es una manera muy simple y práctica de tener tu proyecto en producción todo dentro de la misma plataforma.

Aquí tienes el resultado de nuestro deploy: [Proyecto de prueba](https://mxrold.github.io/proyecto-de-prueba/)

## Surge

Surge tal vez es una herramienta que posiblemente no conocías para utilizar. La misma se diferencia en que únicamente nos permite **desplegar sitios estáticos a través del uso de la terminal** y no con una interfaz gráfica mediante una web.

![https://res.cloudinary.com/peiscof/image/upload/v1637010097/november-2021/surge-preview_q1l493.png](https://res.cloudinary.com/peiscof/image/upload/v1637010097/november-2021/surge-preview_q1l493.png)

### Como crearse una cuenta y utilizarlo

Al funcionar todo desde la terminal de comandos, crearse una cuenta también se hace desde la misma. Para poder utilizar Surge debemos tener **instalado previamente npm.**

- **Primeramente, instalaremos la herramienta mediante el siguiente comando:**

```
npm install --global surge
```

- **Una vez instalado de manera global en tu computadora, crearemos una cuenta. Para ello corre este comando:**

```
surge
```

Si es la primera vez que utilizas este servicio aparecerán una lista de datos que debemos agregar para crear una cuenta y desplegar nuestro sitio, tal como **email**, **contraseña**, **ruta del proyecto** y **dominio** (nos brindan uno aleatorio que podremos personalizar a nuestras necesidades). Si todo el deploy funciono correctamente, obtendrás como resultado la URL donde vivirá tu proyecto junto con el estado del despliegue.

![https://res.cloudinary.com/peiscof/image/upload/v1637009489/november-2021/surge-deploy_hoewcj.gif](https://res.cloudinary.com/peiscof/image/upload/v1637009489/november-2021/surge-deploy_hoewcj.gif)

### Conclusión

Hacer **despliegues** en Surge en muy **simple** y tenemos a mano su documentación para ayudarnos en cualquier momento que tengamos una duda.

Aquí tienes nuestro resultado de este deploy: [Proyecto de prueba](https://capricious-pets.surge.sh/)

---

Sí algunos conceptos te resultaron desconocidos, no te preocupes, pronto en **Peiscof** estaremos publicando **más tutoriales de programación** pará qué puedas aprender y profundizar más al respecto.

Esta es la **primera entrega del artículo** donde nos adentramos en **Netlify, GitHub Pages y Surge**. Quédate atento que en los próximos días estaremos lanzando la **segunda parte** con más plataformas para el despliegue de aplicaciones.