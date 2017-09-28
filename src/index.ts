import css from 'css';
import svg from 'svg';
import _createStyler from 'styler';

export default function (node: (SVGGraphicsElement & SVGPathElement) | HTMLElement) {
  return (node instanceof SVGGraphicsElement) ? svg(node) : css(node);
};

export const createStyler = _createStyler;
