---
name: writing-good-specs
description: Cómo estructurar un PRD útil para SDD. Aplicar antes de escribir requirements.md o architecture.md.
triggers: [spec, prd, requirements, architecture]
---

# Writing Good Specs

## Cuándo usar
- Empezás un feature nuevo y vas a escribir `spec/requirements.md`.
- Vas a actualizar un spec existente con cambios de scope.

## Reglas
1. **Objetivo en una oración.** Si no entra, el feature está mal recortado.
2. **Happy path explícito**, paso a paso, en presente.
3. **Sad paths con código de error** ya definido (ver `spec/rules.md`).
4. **Out of scope** es obligatorio. Lo que NO va es tan importante como lo que va.
5. **Sin verbos vagos**: nada de "manejar", "soportar", "gestionar".
6. **Términos del dominio** alineados con `spec/glossary.md`. Si aparece
   uno nuevo, agregalo al glossary en el mismo PR.

## Ejemplo bueno
```md
## Objetivo
Permitir que un usuario registrado se autentique con email y password,
recibiendo un token.

## Happy path
1. El cliente envía POST /login con {email, password}.
2. El sistema valida formato.
3. ...
```

## Antipatrón
```md
## Objetivo
Implementar un sistema de autenticación robusto y escalable.
```
Demasiado vago, no se puede verificar.

## Origen
- Skill seed inicial del lab.
