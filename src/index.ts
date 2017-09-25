import css from 'css';
import svg from 'svg';

export createStyler from 'styler';

export default function (node: SVGElement | HTMLElement) {
  return (node instanceof SVGElement) ? svg(node) : css(node);
};
