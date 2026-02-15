# Cómo Publicar tu Portafolio en la Web

Tienes varias opciones gratuitas y profesionales para subir tu página. Como eres **Ingeniero de Sistemas especalizado en Azure**, te recomiendo la **Opción 1** o la **Opción 3** para tu marca personal.

## Opción 1: GitHub Pages (La estándar para devs)
Es gratis y se ve muy profesional (`tu-usuario.github.io`).

1.  **Crea un repositorio en GitHub**:
    *   Ve a [GitHub.com](https://github.com) y crea un nuevo repositorio llamado `mi-portafolio` (o `jampierre-portfolio`).
    *   No marques "Initialize with README".

2.  **Sube tus archivos desde la terminal**:
    Abre tu terminal (PowerShell o Git Bash) en la carpeta de tu proyecto (`c:\Users\Jampierre\Desktop\pagina portafolio`) y ejecuta:

    ```bash
    git init
    git add .
    git commit -m "Initial commit - Portfolio V1"
    git branch -M main
    git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
    git push -u origin main
    ```
    *(Reemplaza `TU-USUARIO` y `NOMBRE-DEL-REPO` con tus datos)*.

3.  **Activa GitHub Pages**:
    *   Ve a la pestaña **Settings** de tu repositorio.
    *   Baja hasta la sección **Pages**.
    *   En **Source**, elige `Deploy from a branch`.
    *   En **Branch**, selecciona `main` y guarda.
    *   ¡Listo! En unos minutos te dará el link.

---

## Opción 2: Azure Static Web Apps (Ideal para tu perfil)
Si quieres demostrar tus habilidades en Azure, hospédalo ahí (tiene capa gratuita).

1.  Sube tu código a GitHub como en la Opción 1.
2.  Ve al **Portal de Azure**.
3.  Busca **Static Web Apps** y dale a **Crear**.
4.  Selecciona tu suscripción y un grupo de recursos.
5.  En **Detalles de implementación**, elige **GitHub**.
6.  Conecta tu cuenta y selecciona el repositorio de tu portafolio.
7.  En **Ajustes de compilación** (Build Presets), elige **Custom** y deja `App location` como `/`.
8.  Dale a **Revisar y crear**.

---

## Opción 3: Netlify / Vercel (La más rápida - Drag & Drop)
Si no quieres usar comandos por ahora:

1.  Ve a [Netlify Drop](https://app.netlify.com/drop).
2.  Arrastra la carpeta `pagina portafolio` completa al recuadro.
3.  ¡Se publicará al instante!
4.  Luego puedes cambiar el nombre del dominio en la configuración.
