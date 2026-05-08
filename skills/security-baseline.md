---
name: security-baseline
description: Reglas mínimas de seguridad. Aplicar siempre que el cambio toque auth, datos sensibles, logs, errores expuestos al cliente.
triggers: [auth, login, password, token, log, error, secret]
---

# Security Baseline

## Cuándo usar
- Cualquier cambio que maneje credenciales, tokens, PII.
- Cualquier endpoint público.
- Cualquier sistema de logging.

## Reglas
1. **Nunca loguear** passwords, tokens, secrets ni PII completa.
2. **Mismo error** para "usuario no existe" y "password incorrecto"
   → `401 INVALID_CREDENTIALS`.
3. **Hash de passwords** con algoritmo lento (bcrypt/argon2 en prod).
   Pseudo-hash solo en demos, comentado.
4. **Mensajes de error genéricos** al cliente. El detalle va al log interno.
5. **Validar en el server** siempre, aunque ya valides en el cliente.
6. **Secrets en variables de entorno**, nunca en el repo.

## Antipatrón
```js
// MAL: filtra existencia del usuario
if (!user) return { error: 'USER_NOT_FOUND' };
if (user.password !== input) return { error: 'WRONG_PASSWORD' };
```

## Bueno
```js
if (!user || user.password !== input) {
  return { error: 'INVALID_CREDENTIALS' };
}
```

## Origen
- Skill seed inicial del lab. Alineada con OWASP Top 10.
