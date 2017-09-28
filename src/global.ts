import styler, { createStyler } from './';
import scrollStyler from 'scroll';

(<any>window).styler = styler;
(<any>window).createStyler = createStyler;
(<any>window).scrollStyler = scrollStyler;

