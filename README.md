# Stylefire

High-performance stylers for CSS, SVG and DOM scroll.

- **Tiny:** Less than 4kb, and all stylers can be imported seperately.
- **Fast:** Optimised for use with animation libraries, Stylefire batches renders and executes once per frame.
- **SVGreat:** Harmonises the confusing SVG transform model with the CSS model.
- **Paths:** Full support for line drawing using `pathLength` and `pathSpacing`.
- **Cross-browser:** Detects and uses vendor prefixes when neccessary.
- **Extendable:** New, performant stylers can be created easily.
- **Type-safe:** Written in TypeScript, with Flow definitions available from [flow-typed](https://github.com/flowtype/flow-typed).

## Install

```
npm install stylefire --save
```

## Example

```javascript
import styler from 'stylefire';

const divStyler = styler(document.querySelector('div'));

divStyler.set({
  x: 100,
  y: 100,
  backgroundColor: '#f00'
});

divStyler.get('x'); // 100
```

### [Documentation](https://popmotion.io/api/stylefire)

TODO:
 - Test caching, SVG, SVG path
 - Export absolute typescript paths to relative