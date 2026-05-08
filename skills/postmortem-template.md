---
name: postmortem-template
description: Estructura para postmortems después de un incidente. Aplicar después de cualquier bug que llegó a prod.
triggers: [postmortem, incident, outage, bug, hotfix]
---

# Postmortem Template

## Cuándo usar
- Bug que llegó a producción.
- Incidente que afectó usuarios.
- Cualquier "no entiendo cómo pasó esto".

## Estructura

```md
# Postmortem — <título corto> — YYYY-MM-DD

## Resumen
<2-3 líneas: qué pasó, a quién afectó, cuánto duró>

## Timeline
- HH:MM — evento detonante
- HH:MM — detección
- HH:MM — mitigación
- HH:MM — resolución

## Causa raíz
<por qué pasó, no quién lo causó>

## Por qué no lo detectamos antes
<gap en tests / monitoring / review>

## Acciones
- [ ] Fix inmediato (link al PR)
- [ ] Test de regresión
- [ ] ¿Nueva skill o actualización de skill existente?
- [ ] ¿Nuevo ADR?
- [ ] ¿Cambio en spec?

## Lecciones
<que el resto del equipo se lleva>
```

## Reglas
1. **Blameless.** Foco en sistemas y procesos, no en personas.
2. **Acción concreta** o no es postmortem, es venteo.
3. Si la causa raíz es un patrón evitable → **debe** generar skill nueva
   o update de existente.

## Origen
- Skill seed inicial del lab.
