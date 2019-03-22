import $ from 'jquery'; /*Chamando pacote JQuery*/

class MobileMenu {

	constructor() {
		/*a) Seleção de elementos do DOM*/
		this.siteHeader = $(".site-header"); 
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		
		this.events();
	}

	events() {
		/* b) Event Handling */
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		/*c) Defining Functionality*/
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;