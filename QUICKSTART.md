# Quickstart — Tu primer día con el lab

Acabás de hacer `Use this template` o clonaste el repo. Ahora qué.

---

## Paso 0 — Entender el modelo mental (2 min)

El repo es un **documento vivo**. No empezás escribiendo código:
empezás escribiendo el **spec** con ayuda del agente. El agente lee
`AGENTS.md` automáticamente al iniciar y sabe qué reglas seguir.

Vos sos el **PM/tech lead**. El agente es el **implementador**.
Vos escribís el qué, el agente propone el cómo.

---

## Paso 1 — Traer los inputs del cliente / equipo (5 min)

Creá una carpeta temporal `inputs/` (no se versiona, está en `.gitignore`)
y metele todo lo que tengas del lado humano:

```
inputs/
  brief.md            # brief del cliente
  scope.md            # alcance acordado
  meeting-notes.md    # notas de reuniones
  references/         # screenshots, PDFs, links
```

> No la mires con cariño. Es material crudo, va a desaparecer cuando
> el spec esté armado. Su único objetivo: alimentar la grilling session.

---

## Paso 2 — Configurar tu agente (1 min)

Tu agente ya sabe leer `AGENTS.md` automáticamente si usás:

| IDE / Tool | Config | Acción |
|---|---|---|
| **Cursor** | `.cursor/rules/sdd.mdc` ya está | Abrir el repo y listo |
| **VS Code + Copilot** | `.github/copilot-instructions.md` ya está | Abrir el repo y listo |
| **Claude Code (terminal)** | `CLAUDE.md` ya está | `cd repo && claude` |
| **Otro (Aider, Codex, etc.)** | Leen `AGENTS.md` por convención | Abrir el repo |

**Verificá** que funcionó preguntándole al agente:
> "¿Qué reglas seguís en este repo?"

Debería responder citando `AGENTS.md` (spec es fuente de verdad,
vertical slices, no inventar comportamiento, etc.).

---

## Paso 3 — Grilling session (15-30 min)

Esta es la fase clave. Vos no escribís el spec: el agente te pregunta
hasta cerrar gaps.

### En Cursor / VS Code chat
Pegá esto:
> Sos un tech lead escéptico. Leé `prompts/grilling-session.md` y
> seguí esas reglas. Acá tenés el material del cliente:
>
> [pegá `inputs/brief.md` y `inputs/scope.md` enteros]
>
> Empezá la grilling session. Una pregunta a la vez.

### En Claude Code
```bash
claude
> /add inputs/brief.md inputs/scope.md
> Seguí prompts/grilling-session.md y empezá la grilling session.
```

### Cómo se siente
- El agente te tira **una pregunta**, vos respondés.
- A las ~10-20 preguntas detecta `READY_FOR_PRD` y resume las decisiones.
- Si te aburrís o hace preguntas tontas, paralo y ajustá `prompts/grilling-session.md`.

---

## Paso 4 — Generar el spec (10 min)

Una vez que el agente dice `READY_FOR_PRD`:

> En base a las decisiones que tomamos, escribí/actualizá:
> - `spec/requirements.md`
> - `spec/architecture.md`
> - `spec/rules.md`
> - `spec/glossary.md`
>
> Respetá la estructura existente. Cuando termines, listá los términos
> nuevos que agregaste al glossary.

**Vos revisás y editás manualmente.** El spec es tuyo, no del agente.
Hacé commit cuando estés conforme.

---

## Paso 5 — Vertical slices → issues (10 min)

> Leé el spec actualizado y `prompts/vertical-slices.md`.
> Generá los issues en `/issues/NN-titulo.md`. No empieces a codear.

Revisá los issues. Son tu **backlog**. Cada uno debería dejar algo
visible al terminar.

---

## Paso 6 — Implementación (variable)

Para cada issue, en orden de dependencias:

> Implementá `issues/01-titulo.md` siguiendo `prompts/generate-code.md`.
> Si encontrás un gap en el spec, parate y preguntame.

**Reglas que el agente ya conoce** (vienen de `AGENTS.md`):
- No inventa comportamiento fuera del spec.
- Si hay drift, frena.
- Toca tests + spec + código en el mismo cambio.

---

## Paso 7 — Review automatizado (5 min)

Antes de mergear:

> Leé `prompts/code-review.md` y `prompts/spec-drift-check.md`.
> Reviewá el diff de este branch contra `spec/`.

Si dice `DRIFT_DETECTED` → actualizás el spec o revertís el código.
Nunca mergees con drift sin documentarlo.

---

## Paso 8 — QA humano (5-15 min)

Vos. A mano. Probás el feature. No lo automatices: este es el filtro
de **taste** del que hablamos. Si algo no te gusta:

- Bug → nuevo issue.
- Patrón a evitar → candidato a skill (después de 3 strikes).
- Decisión arquitectónica → nuevo ADR.

---

## Paso 9 — Cerrar el ciclo

Cuando el feature está mergeado:
- [ ] Mover issues completados a `issues/done/` (o cerrar en GitHub).
- [ ] ¿Aprendiste algo? → PR a `skills/`.
- [ ] ¿Tomaste decisión no-trivial? → PR a `decisions/`.
- [ ] Borrá `inputs/` (ya está digerido en el spec).

---

## Cheatsheet de prompts

| Cuándo | Qué decirle al agente |
|---|---|
| Arrancar | "Leé `AGENTS.md` y resumime el flujo SDD." |
| Spec nuevo | "Seguí `prompts/grilling-session.md` con este brief: [...]" |
| Generar spec | "Pasá las decisiones de la grilling a `spec/`." |
| Partir issues | "Seguí `prompts/vertical-slices.md` con el spec actual." |
| Codear | "Implementá `issues/NN.md` con `prompts/generate-code.md`." |
| Reviewar | "Corré `prompts/code-review.md` + `spec-drift-check.md` sobre este diff." |

---

## Errores comunes en el primer día

1. **Saltar la grilling y escribir el spec a mano.**
   → El spec sale incompleto, el agente alucina después.

2. **Pegarle el brief al agente y pedir "implementá esto".**
   → El agente intenta algo, vos no entendés qué hizo, no hay spec
   contra el cual revisar.

3. **No actualizar el spec cuando cambia el código.**
   → Drift. En el próximo PR el agente se confunde con docs viejos.

4. **Crear skills antes de que el patrón aparezca 3 veces.**
   → Sobre-ingeniería. Las skills nacen del dolor real, no de la teoría.

5. **Querer que el lab haga todo el primer día.**
   → No. El lab se vuelve útil con el uso. La primera skill nueva la
   escribís vos en el mes 1, no hoy.
