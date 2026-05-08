# Ejemplo SDD — Login

Demo mínima de **Spec-Driven Development (SDD)** usando un login simple
en Node.js puro (sin frameworks, sin DB, sin dependencias).

## ¿Qué es esto?
Un proyecto pensado para mostrarle a un equipo cómo se ve SDD en la práctica:
primero se escribe el spec, luego se hacen preguntas para cerrar gaps,
y recién después se genera el código.

## Estructura
```
AGENTS.md              # instrucciones canónicas para cualquier agente IA
CLAUDE.md              # stub → AGENTS.md (Claude Code)
.github/
  copilot-instructions.md   # stub → AGENTS.md (Copilot)
  pull_request_template.md  # checklist SDD para PRs
.cursor/rules/sdd.mdc  # stub → AGENTS.md (Cursor)
spec/
  requirements.md      # qué hace el sistema
  architecture.md      # cómo está armado
  rules.md             # validaciones, seguridad, errores
  glossary.md          # vocabulario del dominio
skills/                # patrones reutilizables del equipo (vivo)
  README.md
  writing-good-specs.md
  vertical-slicing.md
  security-baseline.md
  postmortem-template.md
decisions/             # ADRs
  ADR-001-http-nativo.md
  ADR-002-token-fake.md
issues/                # vertical slices
  01-login-basico.md
  02-rutas-y-metodos.md
prompts/               # prompts canónicos por fase
  grilling-session.md
  generate-questions.md
  vertical-slices.md
  generate-code.md
  code-review.md
  spec-drift-check.md
src/
  login.js
CONTRIBUTING.md        # cómo usar como template + ruta de adopción
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


