# Security Audit Report — RagsMc Launcher Website

**Fecha:** 2026-09-14
**Auditor:** AI Assistant
**Proyecto:** Pagina-RagsnorMC-Launcher
**URL:** https://pagina-ragsnor-mc-launcher.vercel.app

---

## Resumen Ejecutivo

| Aspecto | Estado |
|---------|--------|
| Archivos `.env` en código fuente | ✅ No encontrados |
| Claves hardcodeadas | ✅ No encontradas |
| Variables `process.env` / `import.meta.env` | ✅ No encontradas |
| `.env` en repositorio Git | ✅ No encontrado |
| `.env` en historial de Git | ✅ No encontrado |
| Claves en bundle final | ✅ No encontradas |
| `vercel.json` seguro | ✅ Sí, sin secretos |
| GitHub Actions workflow | ✅ Limpio, sin secretos |

**Estado final: SEGURO** ✅

---

## FASE 1: Auditoría del Código Fuente

### Archivos escaneados
- `index.html` — HTML puro, sin framework
- `script.js` — JavaScript vanilla, sin dependencias
- `styles.css` — CSS puro
- `assets/` — Imágenes, audio, video, logos

### Resultados
- ❌ No se encontraron archivos `.env`, `.env.local`, `.env.production`
- ❌ No se encontraron `secrets.json`, `credentials.json`, `config.json`
- ❌ No se encontraron archivos `.key` o `.pem`
- ❌ No se encontraron variables `process.env`, `import.meta.env`, `window.env`
- ❌ No se encontraron claves API hardcodeadas
- ❌ No se encontraron tokens, passwords ni strings sospechosos

### Análisis de `script.js`
Las únicas referencias a "key" son eventos de teclado (`keydown`, `e.key`). Las funciones `fetch()` son para:
1. Cargar audio (`c418.mp3`) — recurso público
2. Enviar formulario a FormSubmit.co — servicio de terceros, sin secretos

---

## FASE 2: Verificación del Bundle Final

### Tipo de proyecto
Este es un proyecto **HTML/CSS/JS estático**. No hay framework (React, Next.js, etc.) ni build step. No se genera un bundle.

### Análisis
- No hay carpeta `dist/`, `build/`, `.next/` o `out/`
- Los archivos se sirven directamente tal cual
- No hay JavaScript bundled que pueda contener claves
- `vercel.json` solo configura headers de descarga — sin secretos

---

## FASE 3: Verificación del Repositorio Git

### Archivos rastreados
```
.github/workflows/static.yml
.gitignore (nuevo)
.env.example (nuevo)
SECURITY.md (nuevo)
assets/...
downloads/RagsMC_Launcher_Setup_v1.0.3.zip
index.html
script.js
styles.css
vercel.json
```

### Resultados
- ❌ No hay `.env` en el repositorio
- ❌ No hay `.env` en el historial de commits
- ❌ No hay claves en el historial de Git
- ✅ `.gitignore` creado con todas las variantes protegidas

---

## FASE 4: Verificación de Vercel

### `vercel.json`
```json
{
  "headers": [
    {
      "source": "/downloads/(.*)",
      "headers": [
        { "key": "Content-Type", "value": "application/octet-stream" },
        { "key": "Content-Disposition", "value": "attachment; filename=\"RagsMC-Installer.exe\"" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
- ✅ Sin variables de entorno
- ✅ Sin secretos
- ✅ Solo headers de seguridad para descargas

### GitHub Actions (`.github/workflows/static.yml`)
- ✅ Deploy estático a GitHub Pages
- ✅ Sin secretos ni tokens expuestos
- ✅ Solo usa `actions/checkout`, `configure-pages`, `upload-pages-artifact`, `deploy-pages`

---

## FASE 5: Correcciones Realizadas

| Acción | Estado |
|--------|--------|
| `.gitignore` creado | ✅ |
| `.env.example` creado | ✅ |
| `SECURITY.md` creado | ✅ |
| Claves rotadas | No necesario (no había claves expuestas) |

---

## FASE 6: Archivos Nuevos Agregados

1. **`.gitignore`** — Protege contra subida accidental de archivos sensibles
2. **`.env.example`** — Plantilla de variables de entorno (sin valores reales)
3. **`SECURITY.md`** — Guía de buenas prácticas de seguridad

---

## Conclusión

**No se encontraron problemas de seguridad.** El proyecto es estático (HTML/CSS/JS puro) y no utiliza variables de entorno, APIs con claves secretas, ni frameworks que requieran configuración de secretos. El único servicio de terceros (FormSubmit.co) está configurado directamente en el HTML sin exponer credenciales.

### Recomendaciones
1. Mantener el `.gitignore` actualizado
2. Si en el futuro se agregan APIs, usar Vercel Environment Variables
3. Revisar periódicamente el repo con herramientas como GitGuardian
4. No subir nunca archivos `.env` al repositorio
