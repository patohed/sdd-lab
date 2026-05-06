# 01 — Login básico (happy path + credenciales inválidas)

## Objetivo
Un cliente puede hacer `POST /login` y recibir un token si las credenciales
son válidas, o un error si no.

## Depende de
- ninguno

## Cambios esperados
- datos: array `users` en memoria con 2 usuarios precargados.
- lógica: función `login({email, password})` con validaciones de `rules.md`.
- interfaz: servidor HTTP nativo escuchando en `:3000`.

## Definition of done
- [ ] `curl -X POST .../login` con credenciales válidas devuelve `200` + `{token}`.
- [ ] Credenciales inválidas devuelven `401 INVALID_CREDENTIALS`.
- [ ] Email mal formado devuelve `400 INVALID_EMAIL`.
- [ ] Password < 5 chars devuelve `400 INVALID_PASSWORD`.
- [ ] Falta de campos devuelve `400 BAD_REQUEST`.

## Out of scope
- Persistencia real, registro, logout, refresh token.
