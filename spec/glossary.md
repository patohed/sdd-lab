# Glosario

Vocabulario compartido del dominio. Si un término aparece en `/spec`,
debe estar definido acá. Si agregás uno nuevo, actualizá este archivo
en el mismo PR.

| Término | Definición |
|---|---|
| **Usuario** | Persona registrada con email y password en el store en memoria. |
| **Token** | String aleatorio generado en login exitoso. No es JWT. No expira en esta versión. |
| **Credenciales** | Par `{email, password}` enviado al endpoint de login. |
| **Spec** | Conjunto de archivos en `/spec` que describen qué hace el sistema. Fuente de verdad. |
| **Skill** | Markdown reutilizable en `/skills` que captura un patrón del equipo. |
| **ADR** | Architecture Decision Record. Vive en `/decisions`. |
| **Slice vertical** | Issue que atraviesa todas las capas (datos + lógica + interfaz). |
| **Drift** | Divergencia entre código y spec. Se resuelve actualizando uno de los dos. |
