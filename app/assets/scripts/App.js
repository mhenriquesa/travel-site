import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

/* ----- Mobile menu ---- */
var mobileMenu = new MobileMenu();

/* ---- Reveal on scrol ---- */
new RevealOnScroll($(".feature-iten"), "85%");
new RevealOnScroll($(".testimonial"), "80%");

/* Sticky Header*/
var stickyHeader = new StickyHeader();

/*Modal*/
var modal = new Modal();






