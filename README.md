# Ejemplo SDD — Login

Demo mínima de **Spec-Driven Development (SDD)** usando un login simple
en Node.js puro (sin frameworks, sin DB, sin dependencias).

## ¿Qué es esto?
Un proyecto pensado para mostrarle a un equipo cómo se ve SDD en la práctica:
primero se escribe el spec, luego se hacen preguntas para cerrar gaps,
y recién después se genera el código.

## Estructura
```
spec/
  requirements.md      # qué hace el sistema
  architecture.md      # cómo está armado
  rules.md             # validaciones, seguridad, errores
issues/
  01-login-basico.md   # vertical slice (tracer bullet)
  02-rutas-y-metodos.md
src/
  login.js             # implementación alineada al spec
prompts/
  grilling-session.md  # interrogatorio para cerrar gaps
  generate-questions.md# detectar gaps puntuales
  vertical-slices.md   # PRD → issues paralelizables
  generate-code.md     # generar código desde el spec
  code-review.md       # reviewer automatizado
README.md
```

## Cómo ejecutar
```bash
node src/login.js
```
El servidor levanta en `http://localhost:3000/login`.

Probarlo:
```bash
# OK
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"ana@test.com\",\"password\":\"12345\"}"

# Credenciales inválidas
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"ana@test.com\",\"password\":\"xxxxx\"}"
```

Usuarios precargados (en memoria):
- `ana@test.com` / `12345`
- `beto@test.com` / `hola123`

## Cómo usar los prompts
Los archivos de `prompts/` están pensados para pegarse en cualquier LLM
junto con el contenido de `/spec`:

1. **`prompts/generate-questions.md`**
   Pegá el prompt + los 3 archivos de `/spec`.
   El modelo devuelve *golden questions* sobre gaps y ambigüedades.

2. Respondé esas preguntas y actualizá el spec si hace falta.

3. **`prompts/generate-code.md`**
   Pegá el prompt + el spec actualizado.
   El modelo genera `src/login.js` respetando `rules.md`.

## Flujo SDD
```
idea → grilling → spec → vertical slices (issues) → código → review → QA
  ▲ humano               ▲ humano                    ▲ agente   ▲ agente   ▲ humano
  └──────────────── feedback / iteración ─────────────────────────────────┘
```

La idea clave: **el spec es la fuente de verdad**.
Si el código y el spec se contradicen, gana el spec (o se actualiza el spec
de forma explícita).

## Inspiración
Las ideas extra (grilling, vertical slices / tracer bullets, reviewer
con contexto limpio) vienen del taller de Matt Pocock
*"Full Walkthrough: Workflow for AI Coding"* (AI Engineer).
Acá están adaptadas a una demo mínima.
