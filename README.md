# Rockford Website

Sitio web oficial de **Rockford**, un servidor multijugador alternativo de **GTA V**.
Desarrollado por [gmcp-dev](https://github.com/gmcp-dev) a petición de [Rockford.is](https://rockford.is).

## Descripción

Rockford es un servidor multijugador alternativo para GTA V donde los jugadores pueden
disfrutar de una experiencia única y personalizada, con una comunidad activa y eventos
regulares. Este repositorio contiene el código fuente de la página web del proyecto:
landing page, presentación de actividades y empleos del servidor, vehículos exclusivos
y guías útiles para la comunidad.

## Características

- Página de inicio con presentación del servidor.
- Sección "Sobre el juego" con video de presentación.
- Carrusel de actividades y empleos (camionero, ladrón, armero, mecánico, policía,
  granjero, basurero) con nivel requerido.
- Galería de vehículos exclusivos con lightbox.
- Guías útiles de la comunidad (voice chat, rol, juego).
- Navbar fija con animaciones y botón de volver arriba.
- Diseño responsive basado en Bootstrap 5.

## Tecnologías

- HTML5 / CSS3
- [Bootstrap 5](https://getbootstrap.com/)
- [jQuery 3.7](https://jquery.com/)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/)
- [WOW.js](https://wowjs.uk/) + [Animate.css](https://animate.style/)
- [Font Awesome](https://fontawesome.com/)

## Estructura del proyecto

```
RockfordWebsite/
├── index.html
├── favicon.ico
├── assets/
│   ├── css/        # Estilos (Bootstrap, Owl, Lightbox, FontAwesome, style.css)
│   ├── js/         # Scripts (jQuery, Owl, Lightbox, WOW, index.js)
│   ├── fonts/      # Fuentes (Font Awesome)
│   └── images/     # Imágenes y recursos gráficos
├── package.json
└── node_modules/   # Dependencias (ignoradas en git)
```

## Uso local

No se requiere compilación. Basta con abrir `index.html` en un navegador o servir la
carpeta con cualquier servidor estático:

```bash
# Ejemplo con Python
python -m http.server 8000

# Ejemplo con Node (npx)
npx serve .
```

Luego abre `http://localhost:8000` en tu navegador.

## Desarrollo

Las dependencias listadas en `package.json` se instalan con:

```bash
npm install
```

> Nota: los archivos de terceros (Bootstrap, jQuery, etc.) ya se incluyen en
> `assets/`, por lo que la instalación es opcional para desarrollo local.

## Contribuir

Las contribuciones son bienvenidas. Revisa [CONTRIBUTING.md](CONTRIBUTING.md) para
conocer el flujo de trabajo, las convenciones de código y cómo enviar un pull request.

## Licencia

Este proyecto se distribuye bajo la licencia [MIT](LICENSE).

## Aviso

Grand Theft Auto y Grand Theft Auto V son marcas registradas de Take-Two Interactive
Software. Este proyecto no está afiliado ni respaldado por Take-Two Interactive Software.
Todo el contenido generado por los usuarios pertenece a sus respectivos propietarios.