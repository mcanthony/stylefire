# Popstyle

A simple, unified get/set interface for performantly styling HTML, SVG and SVG paths.

- **Universal:** Replaces the complicated SVG transform model with the simple CSS spec.
- **Performant:** By default, a `set` schedules a job on the [Framesync](https://github.com/popmotion/framesync) `render` step. Subsequent `set`s fired that frame will batch.
- **Lightweight reads:** Only hits the DOM for a read if there's no cached value available .
- **Sensible defaults:** `x: 100` -> `x: '100px'`, `rotateX: 100` -> `rotateX: '100deg'`
- **Tiny:** 3kb max, and CSS, SVG, path and scroll stylers can be imported seperately.
- **Extendable:** New renderers can be created .
- **Type-safe:** Written in TypeScript, with Flow definitions available from [flow-typed](https://github.com/flowtype/flow-typed).

## Install

```
npm install popstyle --save
```

## Example

```javascript
import popstyle from 'popstyle';

const divStyler = popstyle(document.querySelector('div'));

divStyler.set({
  x: 100,
  y: 100,
  backgroundColor: '#f00'
});

divStyler.get('x'); // 100
```

## Docs
