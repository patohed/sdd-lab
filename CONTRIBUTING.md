# Contributing

## Filosofía
Este repo es un **documento vivo**. El spec, las skills y los ADRs
valen tanto como el código. Si solo agregás código, probablemente
el PR está incompleto.

## Cómo arrancar (template / bootstrap)

### Opción A — Usar como template
1. En GitHub: `Use this template` → nuevo repo.
2. Editá `spec/` para tu dominio.
3. Borrá los issues/ADRs de ejemplo.
4. Mantené `skills/`, `prompts/`, `AGENTS.md` como base.

### Opción B — Copiar al repo existente
Copiá estas carpetas/archivos a tu proyecto:
```
AGENTS.md
spec/
skills/
prompts/
decisions/
.github/pull_request_template.md
.cursor/rules/sdd.mdc           (si usás Cursor)
.github/copilot-instructions.md (si usás Copilot)
CLAUDE.md                       (si usás Claude Code)
```

### Opción C — Bootstrap con LLM
Pegá este prompt al agente con el repo abierto:
> Leé `AGENTS.md` y `skills/README.md`. Resumime el flujo SDD que sigue
> este repo y cómo se aplica a mi feature: `<descripción>`. Después
> hacé una grilling session conmigo siguiendo `prompts/grilling-session.md`.

## Ruta de adopción para un equipo nuevo
Semana 1 → solo `spec/` + `prompts/grilling-session.md`.
Semana 2 → sumar `prompts/vertical-slices.md` + tablero de issues.
Semana 3 → sumar `prompts/code-review.md` y drift-check.
Mes 2 → primeras skills y ADRs nacidos del propio equipo.

## Reglas para PRs
1. Spec y código se mueven juntos. Si cambia comportamiento, cambia el spec.
2. Toda decisión no-trivial → ADR.
3. Patrón visto 3 veces en review → skill.
4. Postmortem siempre genera al menos una acción concreta (skill, test, ADR).

## Cómo proponer una skill
1. Abrí PR en `skills/<nombre>.md` con el front-matter requerido.
2. Linkeá los 2-3 PRs / incidentes que la motivaron.
3. Pedí review a alguien que no haya estado en esos PRs (segunda opinión).

## Cómo proponer un ADR
1. Copiá la estructura de `decisions/ADR-001-*.md`.
2. Numero secuencial.
3. Estado inicial: `Propuesto`. Pasa a `Aceptado` cuando hay consenso.
4. ADRs viejos se marcan como `Reemplazado por ADR-NNN`, no se borran.
