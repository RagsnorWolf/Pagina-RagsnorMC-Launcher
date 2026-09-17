# Guía: El instalador es seguro - Falsos Positivos

## ¿Tu antivirus marca el instalador?

Algunos antivirus detectan nuestro instalador como sospechoso. Esto es un **falso positivo**.

### ¿Por qué pasa esto?

1. **NSIS**: Usamos NSIS (Nullsoft Scriptable Install System) para crear el instalador. Los creadores de malware también usan NSIS, por lo que algunos antivirus heurísticos marcan TODOS los instaladores NSIS como sospechosos.

2. **Software nuevo**: Nuestro ejecutable no tiene historial de reputación en los servidores de antivirus.

3. **Sin certificado comercial**: No contamos con un certificado de firma de código de una Autoridad de Certificación (CA) de confianza.

### ¿Es seguro?

**SÍ.** Puedes verificarlo:

1. **Código fuente abierto**: Todo el código está en GitHub
   - https://github.com/RagsnorWolf/ragsmc-launcher

2. **Hash SHA-256 del instalador**:
   ```
   D3E752401F8AA151AF134E37DBF1A7793C5F44894B487516801876218976936C
   ```

3. **VirusTotal**: Verifica el hash en https://www.virustotal.com

4. **Página oficial**: https://ragslaunchermc.dpdns.org

### ¿Cómo reportar el falso positivo?

Si tu antivirus lo marca, puedes:

1. **Excepción manual**: Agrega el archivo a las excepciones de tu antivirus
2. **Reportar falso positivo**: La mayoría de antivirus tienen un formulario para reportar falsos positivos
3. **Descarga por ZIP**: Ofrecemos una versión ZIP que generalmente no es marcada

### Archivos descargables

| Archivo | SHA-256 |
|---------|---------|
| `RagsMC_Launcher_Setup_v1.0.3.exe` | `D3E752401F8AA151AF134E37DBF1A7793C5F44894B487516801876218976936C` |
| `RagsMC_Launcher_Setup_v1.0.3.zip` | `F51FB341C037308F93F26EAF6E297AEDA35F005CCF115B2F1612D8A39BE2B5E1` |

### Contacto

Si tenés dudas, contactanos:
- GitHub: https://github.com/RagsnorWolf/ragsmc-launcher/issues
- Web: https://ragslaunchermc.dpdns.org
