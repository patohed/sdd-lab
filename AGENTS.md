# AGENTS.md

> Instrucciones canónicas para cualquier agente de IA que trabaje en este repo.
> Este archivo es la **fuente de verdad**. Los archivos específicos de cada
> herramienta (`CLAUDE.md`, `.cursor/rules/`, `.github/copilot-instructions.md`)
> apuntan acá.

## Qué es este repo
Un laboratorio de **Spec-Driven Development (SDD)**. El producto de ejemplo
(login) es secundario: lo importante es el **flujo** y los **artefactos**
reutilizables (specs, skills, prompts, ADRs).

## Reglas duras (push)
1. **El spec es la fuente de verdad.** Si código y spec se contradicen,
   gana el spec — o se actualiza el spec en el mismo PR.
2. **No inventes comportamiento** que no esté en `/spec`. Si falta info,
   detené la generación y listá las preguntas.
3. **Sin dependencias externas** salvo que un ADR lo apruebe.
4. **No expongas información sensible** en errores ni logs (ver
   `spec/rules.md > Seguridad`).
5. **Vertical slices, no horizontales.** Cada cambio debe atravesar
   datos + lógica + interfaz cuando aplique.

## Recursos disponibles (pull)
Cargá estos archivos cuando sean relevantes a la tarea:

- `spec/requirements.md` — qué hace el sistema.
- `spec/architecture.md` — cómo está armado.
- `spec/rules.md` — validaciones, errores, seguridad.
- `spec/glossary.md` — vocabulario del dominio.
- `skills/` — patrones reutilizables del equipo (leé `skills/README.md`
  para ver el índice).
- `decisions/` — ADRs con contexto histórico.
- `prompts/` — prompts canónicos para cada fase del flujo SDD.

## Flujo SDD
```
idea → grilling → spec → vertical slices → code → review → QA → merge
                    ▲                                              │
                    └────────── retroalimentación ─────────────────┘
```

## Cuándo crear o actualizar una skill
- Si en review notás un patrón que ya corregiste antes → proponé skill.
- Si un postmortem identifica una causa raíz evitable → proponé skill.
- Regla "tres strikes": si el mismo feedback aparece en 3 PRs distintos,
  pasá de comentario a skill.

## Cuándo crear un ADR
- Decisión arquitectónica con impacto > 1 módulo.
- Elección entre alternativas que el equipo va a cuestionar después.
- Trade-off no obvio.

## Cómo te comportás en un PR
- Si tocás código, tocá los tests y el spec en el mismo PR.
- Completá el checklist de `.github/pull_request_template.md`.
- Si detectás drift entre código y spec, detené y pedí confirmación.
