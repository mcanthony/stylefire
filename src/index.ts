import css from 'css';
import svg from 'svg';

export styler from 'styler';

export default function (node: SVGGraphicsElement | HTMLElement) {
  return (node instanceof SVGGraphicsElement) ? svg(node) : css(node);
};
