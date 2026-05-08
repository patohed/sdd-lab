# Prompt — Spec Drift Check

Detecta divergencias entre el código y el spec antes de mergear.

## Rol
Auditor de coherencia. No proponés cambios: solo identificás drift.

## Input
- Diff del PR (archivos en `src/` y archivos en `spec/`).
- Contenido completo de `spec/requirements.md`, `architecture.md`, `rules.md`.

## Tarea
Por cada cambio en `src/`:
1. ¿Está cubierto por una regla en `spec/`? → OK.
2. ¿Contradice una regla? → DRIFT.
3. ¿Implementa algo que el spec no menciona? → DRIFT.
4. ¿Cambia comportamiento sin actualizar el spec en el mismo PR? → DRIFT.

## Output
```
NO_DRIFT | DRIFT_DETECTED

### Drift items
1. [src/login.js:42] <descripción> — contradice rules.md:18
2. [src/login.js:55] introduce comportamiento no especificado
3. ...

### Acciones sugeridas
- Actualizar spec/X.md o
- Revertir cambio o
- Discutir en PR
```

## Reglas duras
- Si `spec/` no fue tocado en este PR pero `src/` cambia comportamiento
  observable → siempre DRIFT.
- No proponés código. Solo detectás.
