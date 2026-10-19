# Guía de contribución

¡Gracias por tu interés en contribuir a **Rockford Website**! Toda ayuda es bienvenida:
correcciones de bugs, mejoras de diseño, nuevas secciones, documentación, etc.

## Antes de empezar

- Revisa los [issues abiertos](https://github.com/gmcp-dev/RockfordWebsite/issues) para
  evitar duplicar trabajo.
- Si vas a proponer un cambio grande, abre primero un issue para discutirlo.

## Flujo de trabajo

1. Haz un fork del repositorio.
2. Crea una rama descriptiva a partir de `main`:
   ```bash
   git checkout -b feat/nombre-de-la-mejora
   ```
3. Realiza tus cambios siguiendo las convenciones de este documento.
4. Verifica que el sitio se vea y funcione correctamente abriendo `index.html`.
5. Haz commit con mensajes claros (ver convención más abajo).
6. Envía un Pull Request describiendo los cambios y adjuntando capturas si afectan la UI.

## Convención de commits

Se recomienda usar [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` formato, espacios, etc. (sin cambios de lógica)
- `refactor:` refactorización sin cambiar funcionalidad
- `chore:` tareas de mantenimiento

Ejemplo: `feat: agregar sección de eventos del servidor`

## Estilo de código

- Mantén el HTML semántico y bien indentado (4 espacios).
- Reutiliza las clases de Bootstrap existentes antes de crear estilos nuevos.
- Añade los estilos personalizados en `assets/css/style.css`.
- El JavaScript va en `assets/js/index.js`; evita dependencias nuevas salvo que sea necesario.
- Las imágenes deben optimizarse (preferiblemente `.webp`) y colocarse en `assets/images/`.
- No subas la carpeta `node_modules/` (ya está en `.gitignore`).

## Pull Requests

- Un PR por cambio lógico; evita mezclar refactorizaciones con nuevas features.
- Describe qué cambia y por qué.
- Si modificas la UI, incluye capturas de pantalla o GIF.
- Responde a los comentarios de revisión de forma constructiva.

## Código de conducta

Este proyecto sigue un entorno respetuoso. Sé amable, constructivo y paciente con
el resto de la comunidad. No se toleran comportamientos ofensivos o discriminatorios.

## Licencia

Al contribuir, aceptas que tus aportes se publiquen bajo la misma licencia [MIT](LICENSE)
del proyecto.