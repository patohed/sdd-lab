# Prompt — Generar Golden Questions desde el Spec

## Rol
Sos un analista técnico experto en Spec-Driven Development.

## Contexto
Te paso los archivos de la carpeta `/spec`:
- `requirements.md`
- `architecture.md`
- `rules.md`

## Tarea
Leé los tres archivos y detectá:
1. **Gaps**: información faltante para implementar sin asumir.
2. **Ambigüedades**: frases que pueden interpretarse de más de una forma.
3. **Contradicciones**: reglas que se pisan entre archivos.
4. **Casos borde** no cubiertos.

A partir de eso generá **golden questions**: preguntas cuya respuesta
desbloquea decisiones de diseño o implementación.

## Reglas para las preguntas
- Evitá preguntas triviales (cosas ya respondidas en el spec).
- Evitá preguntas de estilo o preferencia personal.
- Cada pregunta debe poder responderse con una decisión concreta.
- Agrupá por tema: validación, seguridad, errores, datos, infra.
- Si una pregunta tiene un default razonable, sugerilo.

## Formato de salida
```
### <tema>
1. <pregunta> — *default sugerido: <opción>*
2. ...
```

## Anti-objetivos
- No propongas implementación.
- No reescribas el spec.
- No inventes requisitos nuevos: solo preguntá sobre lo ya escrito.
