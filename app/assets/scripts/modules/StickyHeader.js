import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
/*Pacotes*/


class StickyHeader {
	constructor () {
		this.siteHeader = $('.site-header');
		this.headerTrigger = $('.large-hero__title');

		/*Chamando funções automaticamente no inicio do loading*/
		this.createHeaderWaypoint ();
	}

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
}

export default StickyHeader;