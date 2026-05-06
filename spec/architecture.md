# Architecture — Login

## Endpoint
`POST /login`

### Input (JSON)
```json
{
  "email": "user@example.com",
  "password": "12345"
}
```

### Output OK (200)
```json
{
  "token": "a1b2c3d4..."
}
```

### Output Error
```json
{
  "error": "INVALID_CREDENTIALS",
  "message": "Email o password incorrectos"
}
```

## Flujo interno
1. Servidor HTTP nativo (`http`) recibe el request.
2. Se parsea el body como JSON.
3. Se valida formato (email, password).
4. Se busca el usuario en el store en memoria.
5. Se compara el password (pseudo-hash, ver rules.md).
6. Si todo OK, se genera token random y se devuelve.

## Componentes
- **Server**: `http.createServer` escuchando en un puerto.
- **Handler de login**: función que recibe `{email, password}` y devuelve
  `{ status, body }`.
- **Store de usuarios**: array en memoria con usuarios precargados.
- **Auth**: función que genera token random con `crypto.randomBytes`.

## Fuera de alcance
- Persistencia real (DB).
- Refresh tokens / expiración.
- Registro de usuarios.
- HTTPS.
