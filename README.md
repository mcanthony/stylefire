# Rendersync

A simple, unified get/set interface for performantly styling HTML, SVG and SVG paths.

- *Universal:* Replaces the complicated SVG transform model with the simple 
- *Performant:* By default, 
- *Sensible defaults:* `x: 100` -> `x: '100px'`, `rotateX: 100` -> `rotateX: '100deg'`
- *Type-safe:* Written in TypeScript, with Flow definitions available from [flow-typed](https://github.com/flowtype/flow-typed).

## Install

```
npm install renderpop --save
```

## Usage

```javascript
import createRenderer from 'rendersync';

const divRenderer = createRenderer(document.querySelector('div'));

divRenderer.set({
  x: 100,
  y: 100,
  backgroundColor: '#f00'
});
```
