---
title: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
url: introduccion-npm
subtitle: npm (node package manager) es el gestor de paquetes más utilizado de JavaScript. Un segundo... ¿Qué es un gestor de paquetes 🤔? <br> Continúa leyendo para conocer las principales características de esta gran herramienta.
excerpt: >-
  Aprende a usar npm, el gestor de paquetes más popular de JavaScript. Logra proyectos increíbles utilizando las mejores herramientas de la comunidad de desarrollo web.
date: '2021/11/24'
tag: programación
thumb_image: https://res.cloudinary.com/peiscof/image/upload/v1637764330/november-2021/npm-post_u3vagl.png
thumb_image_alt: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
image: https://res.cloudinary.com/peiscof/image/upload/v1637764329/november-2021/npm-portada_farawy.png
image_alt: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
author: martin-roldan
seo:
    title: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
    description: >-
      Aprende a usar npm, el gestor de paquetes más popular de JavaScript. Logra proyectos increíbles utilizando las mejores herramientas de la comunidad de desarrollo web.
    extra:
      - name: 'og:type'
        value: article
        keyName: property
      - name: 'og:url'
        value: https://peiscof.com/blog/como-utilizar-npm-el-gestor-de-paquetes-donde-encontraras-recursos-para-implementar-en-tus-proyectos-de-desarrollo-web
      - name: 'og:title'
        value: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
        keyName: property
      - name: 'og:description'
        value: >-
          Aprende a usar npm, el gestor de paquetes más popular de JavaScript. Logra proyectos increíbles utilizando las mejores herramientas de la comunidad de desarrollo web.
        keyName: property
      - name: 'og:image'
        value: https://res.cloudinary.com/peiscof/image/upload/v1637764329/november-2021/npm-portada_farawy.png
        keyName: property
        relativeUrl: false
      - name: 'twitter:card'
        value: summary_large_image
      - name: 'twitter:site'
        value: '@peiscof'
      - name: 'twitter:creator'
        value: '@peiscof'
      - name: 'twitter:title'
        value: Como utilizar npm, el gestor de paquetes donde encontrarás recursos para tus proyectos de desarrollo web
      - name: 'twitter:description'
        value: >-
          Aprende a usar npm, el gestor de paquetes más popular de JavaScript. Logra proyectos increíbles utilizando las mejores herramientas de la comunidad de desarrollo web.
      - name: 'twitter:image'
        value: https://res.cloudinary.com/peiscof/image/upload/v1637764329/november-2021/npm-portada_farawy.png
        relativeUrl: false
layout: post
---

A medida que un trabajo de desarrollo web crece, tanto Frontend como Backend, es necesario comenzar a implementar herramientas de terceros que nos brindan ciertas características extras que se necesitan en un proyecto, un ejemplo de esto puede ser una herramienta para la creación de gráficos estadísticos en JavaScript (Chart.js). 

Por lo tanto, **npm** es un gran repositorio de estas herramientas que nos permite descargarlas desde nuestra terminal. Aunque no solo eso, también es un gestor, lo cual significa que tendremos muchos comandos especiales para trabajar y aprovechar al máximo sus funciones. 

## Como instalar npm

**Para instalar npm**, necesitamos descargar Node.js el cual trae integrado el gestor de paquetes. 
<mark>Node.js es un entorno de ejecución de JavaScript en el servidor sin necesidad de un navegador para funcionar.</mark>

![https://res.cloudinary.com/peiscof/image/upload/v1637345603/november-2021/node-descargar_sdcg5t.png](https://res.cloudinary.com/peiscof/image/upload/v1637345603/november-2021/node-descargar_sdcg5t.png)

**Instalaremos npm en dos pasos:**

1. Ingresa en su sitio web oficial ([https://nodejs.org/es/download/](https://nodejs.org/es/download/)) y descarga la versión compatible con tu sistema operativo.
2. Luego debes verificar que se instaló correctamente Node.js en tu computadora. Para ello abre la consola y ejecuta el comando **node -v,** esto debe retornarte la versión instalada. Además, también verificaremos si npm se encuentra disponible mediante el comando **npm -v.** 
Si en alguno de los dos casos no obtuviste el número de versión descargada, vuelve a instalar Node.js desde su sitio y repetir este paso.

Te dejamos una imagen de ejemplo para que puedas ver el resultado.

![https://res.cloudinary.com/peiscof/image/upload/v1637345597/november-2021/versiones-node-y-npm_kgtzc0.png](https://res.cloudinary.com/peiscof/image/upload/v1637345597/november-2021/versiones-node-y-npm_kgtzc0.png)

## Comandos de npm

Como ya vimos anteriormente, **npm es un gestor de paquetes de JavaScript**. Además de trabajar con los comandos para instalar herramientas, también podrás **crear tus propios paquetes** y **compartirlos con toda la comunidad**. 

<mark>Ten en cuenta que los siguientes comandos debes correrlos en la raíz de tu proyecto.</mark>

A continuación te presentamos los comandos más populares y como utilizarlos. ¡Comencemos!

### Comandos básicos

Al iniciar tu proyecto con **npm** notaras que se creara una carpeta y dos archivos. Veamos de que se trata.

- **node_modules** (carpeta)
Es la carpeta donde se instalaran todos los paquetes que utilices en tu proyecto.  <mark>Si la eliminas por equivocación, ejecuta el comando **npm install** para reinstalar la carpeta.</mark>
- **package.json** (archivo)
Es el archivo de configuración de tu proyecto el cual contendrá información sobre el autor, versión, licencia, paquetes instalados, comandos específicos, entre más datos.
- **package-lock.json** (archivo)
Describe de manera más exacta todas las dependencias instaladas en el proyecto.

| Comando | Descripción |
| ------------ | ------------ |
| **npm init** |  Inicializa npm en tu proyecto y crea el package.json con los datos que cargues manualmente. |
| **npm init -y**  | Inicializa npm sin tener que cargar cada dato. Crea un package.json con las configuraciones básicas.  |
|  **npm set init.author.email [tu email]** |  Asigna un email predeterminado para la configuración de tus proyectos |
| **npm set init.author.name [tu nombre]**  | Asigna un nombre predeterminado para la configuración de tus proyectos  |

### Instalación de paquetes

Antes de que listemos estos comandos, tienes que conocer dos conceptos nuevos que se requieren para comprender la instalación de las herramientas.

- **Dependencias de desarrollo**
Son los paquetes que necesitamos únicamente para desarrollar un proyecto en nuestro entorno de desarrollo. Un ejemplo de esto puede ser que necesites ver los cambios que vas haciendo en el código de un proyecto, para ello debes configurar un servidor que se abra en tu navegador. De esta forma, el servidor solo se utilizaría en el desarrollo del proyecto como una ayuda al crear código, en producción no se requeriría, ya que no haría falta.
- **Dependencias de producción**
Son los paquetes que deben funcionar cuando desplegamos un sitio en internet u otra plataforma. La instalación de un framework (conjunto de herramientas que nos ayuda a resolver un fin específico), por ejemplo React, es un gran ejemplo de esto.

Separadas ambas definiciones, continuemos con la lista de comandos.

| Comando | Descripción |
| ------------ | ------------ |
| **npm install [nombre del paquete]**  |  Instala la dependencia. Por defecto, si no indicamos de que tipo será la instalación, la hara en producción. |
| **npm install [nombre del paquete] --save**  | Instala la dependencia en modo producción.  |
| **npm install [nombre del paquete] -S**  | Instala la dependencia en modo producción. Forma corta de indicar el tipo de instalación. |
| **npm install [nombre del paquete] --save-dev**  | Instala la dependencia en modo de desarrollo.  |
| **npm install [nombre del paquete] -D**  | Instala la dependencia en modo desarrollo. Forma corta de indicar el tipo de instalación. |
| **npm install [nombre del paquete] -g**  | Instala la dependencia de forma global. Estará disponible en tu computadora para que lo utilices en cualquier proyecto. |
| **npm install [nombre del paquete] --force**  | Instala forzosamente una dependencia sin tener en cuenta los posibles errores que se presenten en la instalación. |
| **npm install [nombre del paquete] -f** | Forma corta de indicar el tipo de instalación forzada. |
| **npm install [nombre del paquete]@[versión]** | Instala la dependencia en la versión específica que le indiquemos. |

### Listar paquetes instalados

| Comando | Descripción |
| ------------ | ------------ |
| **npm list** | Lista las dependencias instaladas en un proyecto. |
| **npm list -g --depth 0** | Lista las dependencias instaladas de forma global. |

### Actualización de paquetes

| Comando | Descripción |
| ------------ | ------------ |
| **npm update** | Actualiza todos las dependencias desactualizadas de nuestro proyecto. |
| **npm outdate** |  Permite visualizar si se encuentran desactualizadas las dependencias. |
| **npm install [nombre del paquete]@latest** | Actualiza solo la dependencia y a la versión especificada. |

### Desinstalación de paquetes

| Comando | Descripción |
| ------------ | ------------ |
| **npm uninstall [nombre del paquete]** | Desinstala la dependencia especificida. |

### Solucionar problemas de caché e instalación

Al agregar una dependencia, nos podremos encontrar con diversos errores que surgen en la instalación, como un paquete no funcione adecuadamente, entre múltiples tipos de errores. Si te encuentras con alguno de ellos, ejecuta los siguientes comandos que te ayudaran a solucionarlo.

| Comando | Descripción |
| ------------ | ------------ |
| **npm cache clean --force** | Elimina la caché del proyecto. |
| **npm cache clean -f** | Forma corta de eliminar la caché. |
| **npm audit** | Visualizar las vulnerabilidades de los paquetes instalados en el proyecto. |
| **npm audit fix** | Soluciona las vulnerabilidades de manera forzada. |



### Publicar un proyecto

**npm** nos permite publicar nuestra dependencia para que la comunidad pueda utilizarlo. Para ello debes **crearte una cuenta** en su sitio web oficial ([https://www.npmjs.com/signup](https://www.npmjs.com/signup)). Luego, una vez que tengas listo tu proyecto para ser subido, sigue la siguiente lista.

| Comando | Descripción |
| ------------ | ------------ |
| **npm adduser**  | De esta forma puedes agregar un usuario de npm y vincularlo en tu computadora. |
| **npm login** | Al correr este comando, te conectaras con los servidores de npm para iniciar sesión. |
| **npm publish** | Publica tu proyecto mediante este comando. |
| **npm unpublish -f** | Si deseas remover un paquete subido a npm, puedes hacerlo a través de este comando. |

---

Sin duda, **npm** marca un antes y un después en el trabajo de un desarrollador web. Con esta herramienta podrás usar todos los paquetes que ofrece la comunidad, así como también realizar increíbles proyectos para compartir. 

¡No olvides compartir el artículo en tus redes sociales!