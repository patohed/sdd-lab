# Skills

Patrones reutilizables que el equipo va cristalizando con el tiempo.
Cada skill es un markdown con front-matter para que el agente decida
cuándo cargarla (`pull`).

## Cómo se escribe una skill
```md
---
name: nombre-corto
description: cuándo aplicar esta skill (1 oración)
triggers: [palabra1, palabra2]   # opcional
---

# Título

## Cuándo usar
...

## Reglas
...

## Ejemplo bueno
...

## Antipatrón
...

## Origen
- PR #123, postmortem 2026-04-15, etc.
```

## Cómo nace una skill
1. Patrón observado 3+ veces en code review → se promueve a skill.
2. Causa raíz de un postmortem → se documenta como skill preventiva.
3. Decisión técnica del equipo → ADR + skill.

## Skills actuales
| Skill | Cuándo |
|---|---|
| [writing-good-specs](writing-good-specs.md) | Antes de escribir un PRD nuevo |
| [vertical-slicing](vertical-slicing.md) | Al partir un PRD en issues |
| [security-baseline](security-baseline.md) | Cualquier cambio que toque auth, datos sensibles, logs |
| [postmortem-template](postmortem-template.md) | Después de un bug en prod |
