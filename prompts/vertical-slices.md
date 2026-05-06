# Prompt — Vertical Slices (Tracer Bullets)

Inspirado en *The Pragmatic Programmer*: cada issue debe ser una
**bala trazadora** = atraviesa todas las capas y deja algo visible al final.

## Rol
Descomponedor de PRDs en issues independientes y paralelizables.

## Input
- `/spec/requirements.md`, `/spec/architecture.md`, `/spec/rules.md`.

## Tarea
Generá issues en `/issues/NN-titulo.md` que cumplan:

1. **Vertical, no horizontal**: cada issue toca datos + lógica + interfaz
   (no "primero todo el backend, después todo el frontend").
2. **Algo visible/verificable** al terminar (un curl que funciona, un
   endpoint que responde, etc.).
3. **Independientes** salvo dependencias explícitas declaradas.
4. **Pequeños**: si un issue parece tener >3 sub-tareas, partilo.

## Formato de cada issue
```md
# NN — <título corto>

## Objetivo
<una frase>

## Depende de
- NN-otro-issue (o "ninguno")

## Cambios esperados
- datos: ...
- lógica: ...
- interfaz: ...

## Definition of done
- [ ] criterio verificable 1
- [ ] criterio verificable 2

## Out of scope
- ...
```

## Anti-patrones a evitar
- "Crear el servicio X" sin tocar nada más → horizontal slice ❌
- "Refactor general" → no es trazable ❌
- Issues que dependen en cadena lineal de otros 5 → no paralelizable ❌
