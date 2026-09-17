# Background image

Drop a file in this folder to give the whole site a background. No code change
needed — refresh and it's there.

    background-dark.jpg     shown in dark mode
    background-light.jpg    shown in light mode

`.png`, `.jpeg` and `.webp` work too; the site tries each extension
until one loads. You can use just one of the two if you only want a background
in one theme.

If neither file exists, the site uses its built-in gradient — nothing breaks.
Delete the file to go back.

Cards and the sidebar automatically become translucent when a background is
present, and a readability veil is laid over the image. For a busy photo, add
some blur in `data/projects.js`:

    background: { …, blur: 6 }
