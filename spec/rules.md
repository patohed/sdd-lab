# Rules — Login

## Validaciones
- `email`: requerido, string, regex básico `/^\S+@\S+\.\S+$/`.
- `password`: requerido, string, mínimo 5 caracteres.
- Si falta cualquiera de los dos → `400 BAD_REQUEST`.

## Seguridad
- El password **debe almacenarse hasheado** (en este demo se deja
  pseudo-hash comentado en el código; en producción usar bcrypt/argon2).
- No se debe distinguir entre "usuario no existe" y "password incorrecto":
  ambos devuelven `401 INVALID_CREDENTIALS`.
- No incluir el password ni el hash en logs ni en la respuesta.
- Token: string aleatorio generado con `crypto.randomBytes`.

## Formato de respuesta
- Siempre JSON.
- Éxito: `{ "token": "..." }`.
- Error: `{ "error": "CODE", "message": "texto genérico" }`.

## Códigos de error
| HTTP | code                | cuándo                                |
|------|---------------------|---------------------------------------|
| 200  | —                   | login exitoso                         |
| 400  | BAD_REQUEST         | falta email o password                |
| 400  | INVALID_EMAIL       | email con formato inválido            |
| 400  | INVALID_PASSWORD    | password con menos de 5 caracteres    |
| 401  | INVALID_CREDENTIALS | usuario no existe o password incorrecto |
| 405  | METHOD_NOT_ALLOWED  | método distinto a POST en /login      |
| 404  | NOT_FOUND           | ruta distinta a /login                |
| 500  | INTERNAL_ERROR      | error inesperado                      |
