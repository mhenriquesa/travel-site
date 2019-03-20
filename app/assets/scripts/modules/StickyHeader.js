import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
/*Pacotes*/


class StickyHeader {
	
	constructor () {

		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__title');
		this.pageSections = $('.page-section');
		this.headerLinks = $(".primary-nav a")
		this.lazyimages = $(".lazyload");

		/*Chamando funções automaticamente no inicio do loading*/
		this.createHeaderWaypoint ();
		this.createSectionWaypoints ();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	

/**************************************/
	createHeaderWaypoint () {
		var that = this;
		
		new Waypoint({
			element: this.headerTrigger[0], /*ATENÇÃO! Dom Element - o indice [0] se refere ao Dom Element*/
			/*
			handler: function () {
				that.siteHeader.addClass("site-header--dark");
			}*/
			handler: function (direction) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
/************************************/
	createSectionWaypoints () {
		var that = this;

		this.pageSections.each(
			function () {
			var currentPageSection = this;
		
			new Waypoint({
				element: currentPageSection,
			
				handler: function (direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
							that.headerLinks.removeClass("is-current-link");
							$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "20%"
			});	

			new Waypoint({
				element: currentPageSection,
			
				handler: function (direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
							that.headerLinks.removeClass("is-current-link");
							$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});	
		
		});

	}
	
	refreshWaypoints() {
		this.lazyimages.on('load', function () {
			Waypoint.refreshAll();
		})
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll(); /*Chamar o pacote para cada link*/
	}

}

export default StickyHeader;