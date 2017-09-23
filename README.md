# Stylefire

A high-performance get/set interface for performantly setting CSS, SVG, SVG paths and DOM scroll.

- **Universal:** Replaces the complicated SVG transform model with the simple CSS spec.
- **Performant:** By default, a `set` schedules a job on the [Framesync](https://github.com/popmotion/framesync) `render` step. Subsequent `set`s fired that frame will batch.
- **Lightweight reads:** Only hits the DOM for a read if there's no cached value available .
- **Sensible defaults:** `x: 100` -> `x: '100px'`, `rotateX: 100` -> `rotateX: '100deg'`
- **Tiny:** 3kb max, and CSS, SVG, path and scroll stylers can all be imported seperately.
- **Extendable:** New, performant renderers can be easily created.
- **Type-safe:** Written in TypeScript, with Flow definitions available from [flow-typed](https://github.com/flowtype/flow-typed).

## Install

```
npm install stylefire --save
```

## Example

```javascript
import css from 'stylefire/css';

const divStyler = css(document.querySelector('div'));

divStyler.set({
  x: 100,
  y: 100,
  backgroundColor: '#f00'
});

divStyler.get('x'); // 100
```

## Docs
