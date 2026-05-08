# ADR-001 — Servidor HTTP nativo, sin frameworks

- **Estado:** Aceptado
- **Fecha:** 2026-05-06

## Contexto
Necesitamos un endpoint `POST /login` para la demo. Las opciones eran:
Express, Fastify, o `http` nativo de Node.

## Decisión
Usamos `http` nativo de Node.

## Razones
- El lab existe para demostrar SDD, no para enseñar un framework.
- Cero dependencias externas → menos ruido al revisar el código.
- Cualquiera entiende `http.createServer` aunque nunca lo haya usado.
- Si el equipo decide migrar a Express, queda como nuevo ADR.

## Consecuencias
- No hay middleware, ni router, ni body-parser. Lo hacemos a mano.
- No es producción-ready. La demo lo aclara explícitamente.
- Si crece a > 2 endpoints, probablemente un nuevo ADR proponga un router.

## Alternativas descartadas
- **Express**: agregaba dependencia y ocultaba el flujo HTTP que queremos mostrar.
- **Fastify**: mismo problema + curva de aprendizaje extra.
