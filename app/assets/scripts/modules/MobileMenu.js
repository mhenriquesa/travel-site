import $ from 'jquery'; /*Chamando pacote JQuery*/

class MobileMenu {
	/*-----------------------------------------------
	constructor() {
		$(".site-header__menu-icon").click(function () {
		console.log("The top right icon was clicked.")
		})
	}

		---------------------------------------------
		Todas as funcionalidades estão misturadas. (Espagueti)
		a) Seleção de elementos do DOM
		b) Event Handling
		c) Defining Functionality
		É dificil de admistrar um grande app dessa forma
	*/ 
	constructor() {
		this.siteHeader = $(".site-header"); 
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;