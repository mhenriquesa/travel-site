import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
/******Pacotes necessários para o script**************/

var mobileMenu = new MobileMenu();

// var revealOnScroll = new RevealOnScroll();

new RevealOnScroll($(".feature-iten"), "85%");
new RevealOnScroll($(".testimonial"), "80%");
