# 02 — Manejo de rutas y métodos no soportados

## Objetivo
El servidor responde de forma consistente cuando se le pega a una ruta
o método que no implementamos.

## Depende de
- 01-login-basico

## Cambios esperados
- datos: ninguno.
- lógica: branch en el handler HTTP para ruta ≠ `/login` y método ≠ `POST`.
- interfaz: respuestas JSON según `rules.md`.

## Definition of done
- [ ] `GET /login` devuelve `405 METHOD_NOT_ALLOWED`.
- [ ] `POST /otra-ruta` devuelve `404 NOT_FOUND`.
- [ ] Body con JSON malformado devuelve `400 BAD_REQUEST`.

## Out of scope
- CORS, rate limiting.
