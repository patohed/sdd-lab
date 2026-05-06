# Requirements — Login

## Objetivo
Permitir que un usuario registrado se autentique con email y password,
recibiendo un token que lo identifique en llamadas posteriores.

## Happy path
1. El cliente envía `POST /login` con `{ email, password }`.
2. El sistema valida el formato de los campos.
3. El sistema busca el usuario por email.
4. Compara el password recibido contra el almacenado.
5. Si coincide, genera un token y responde `200` con `{ token }`.

## Sad paths
- Campos faltantes o vacíos → `400 BAD_REQUEST`.
- Email con formato inválido → `400 INVALID_EMAIL`.
- Password menor a 5 caracteres → `400 INVALID_PASSWORD`.
- Usuario inexistente o password incorrecto → `401 INVALID_CREDENTIALS`
  (mismo error para ambos casos, no se distingue).
- Error inesperado → `500 INTERNAL_ERROR`.

## Requisitos no funcionales
- Sin dependencias externas (solo Node.js nativo).
- Respuesta en JSON.
- No loguear passwords ni tokens.
- Mensajes de error genéricos para no filtrar información.
- Código legible y entendible en pocos minutos.
