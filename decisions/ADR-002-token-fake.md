# ADR-002 — Token fake en lugar de JWT

- **Estado:** Aceptado
- **Fecha:** 2026-05-06

## Contexto
El login devuelve un token. Opciones: JWT firmado, sesión en memoria,
string random opaco.

## Decisión
String random opaco generado con `crypto.randomBytes(16).toString('hex')`.

## Razones
- JWT requeriría manejo de secret, expiración, algoritmo → fuera del scope de la demo.
- El token no se valida en ningún otro endpoint en esta versión.
- Mantener el ejemplo en una sola función legible.

## Consecuencias
- El token no contiene claims. No sirve para autorización real.
- No hay refresh ni expiración.
- Migrar a JWT en el futuro requiere ADR nuevo + actualizar `spec/architecture.md`.

## Alternativas descartadas
- **JWT**: complejidad innecesaria para una demo de SDD.
- **Sesión en memoria**: requería un store adicional sin valor demostrativo.
