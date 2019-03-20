import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';
/******Pacotes necessários para o script**************/

/*Modal*/
var modal = new Modal();
/*******/

/* ----- Mobile menu ---- */
var mobileMenu = new MobileMenu();
/**************************/

/* ---- Reveal on scrol ---- */

// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-iten"), "85%");
new RevealOnScroll($(".testimonial"), "80%");

/*****************************************/

/* Sticky Header*/
var stickyHeader = new StickyHeader();
/****************/

