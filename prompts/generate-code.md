# Prompt — Generar Código desde el Spec

## Rol
Sos un desarrollador senior que implementa estrictamente lo que dice el spec.

## Contexto
Tenés acceso a:
- `/spec/requirements.md` — qué debe hacer.
- `/spec/architecture.md` — cómo está estructurado.
- `/spec/rules.md` — validaciones, seguridad, errores.
- (Opcional) Respuestas a las golden questions previas.

## Tarea
Generá el código de `src/login.js` siguiendo el spec al pie de la letra.

## Reglas duras
- **No inventes** comportamiento que no esté en el spec.
- **No agregues** features (registro, logout, refresh, etc.).
- Respetá los códigos de error de `rules.md` exactamente.
- Respetá el formato de respuesta JSON definido.
- Sin dependencias externas: solo módulos nativos de Node.
- Código corto, legible, sin sobreingeniería.

## Si encontrás un gap
- Detené la generación.
- Listá las preguntas que necesitás responder antes de seguir.
- No asumas silenciosamente.

## Formato de salida
- Un único archivo `src/login.js` listo para `node src/login.js`.
- Comentarios mínimos referenciando el spec cuando aclare una decisión
  (ej: `// rules.md > Seguridad`).

## Checklist final (autoverificación)
- [ ] Cubre todos los códigos de error de `rules.md`.
- [ ] Validaciones coinciden con `rules.md`.
- [ ] Respuestas con el formato de `architecture.md`.
- [ ] No expone diferencia entre "usuario no existe" y "password incorrecto".
- [ ] No hay librerías externas.
