# Security — RagsMc Launcher

## Reglas de seguridad

1. **NUNCA** subas archivos `.env`, `secrets.json`, `credentials.json` o `*.key` al repositorio.
2. **NUNCA** hardcodees claves API, tokens o contraseñas en el código fuente.
3. Usa siempre las **Variables de Entorno de Vercel** para almacenar secretos.
4. Si una clave se filtra, **rotala inmediatamente** en el servicio correspondiente.

## Configuración de variables en Vercel

1. Andá a tu proyecto en Vercel → Settings → Environment Variables.
2. Agregá cada variable con su nombre y valor.
3. Seleccioná el entorno (Production, Preview, Development).
4. Guardá.

## Si una clave se filtra

1. **Rotá la clave** inmediatamente en el servicio (GitHub, API, etc.).
2. Eliminá la clave del código fuente y del historial de Git.
3. Subí la nueva clave a Vercel Environment Variables.
4. Redesplegá la página.

## Herramientas recomendadas

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [GitGuardian](https://www.gitguardian.com/)
