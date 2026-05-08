---
name: vertical-slicing
description: Cómo partir un PRD en issues que cada uno deja algo verificable. Aplicar al crear issues nuevos.
triggers: [issue, slice, ticket, backlog]
---

# Vertical Slicing

## Cuándo usar
- Tenés un PRD aprobado y necesitás partirlo en issues.
- Un issue parece muy grande o muy abstracto.

## Reglas
1. Cada issue debe **atravesar capas**: datos + lógica + interfaz cuando aplique.
2. Cada issue debe terminar en **algo verificable** (un curl, un endpoint, un botón que responde).
3. Issues independientes salvo dependencias declaradas explícitamente.
4. Si un issue tiene > 3 sub-tareas, partilo.

## Ejemplo bueno
> "Login básico: usuario hace POST /login, recibe token o 401."
>
> Toca: array de users en memoria, función login, servidor HTTP.
> DoD: curl con credenciales válidas devuelve 200+token.

## Antipatrón
> "Crear el servicio de autenticación."
>
> No deja nada visible. No se puede QAear. No se puede mergear de forma útil.

## Origen
- Skill seed inicial del lab.
