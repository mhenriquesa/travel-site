import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
/*Pacotes necessários para o script
'jquery', 'waypoints'
*/

class RevealOnScroll {
	constructor (els, offset) {
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		
		/*Chamando funções automaticamente no inicio do loading*/
		this.hideInitally();
		this.createWaypoints();
	}

	hideInitally() {
		this.itemsToReveal.addClass("reveal-item");

	}

	createWaypoints () {
		var that = this;

		/*Contruindo os waypontis*/
		this.itemsToReveal.each(
			function () {
			var currentItem = this;
		
			new Waypoint({
				element: currentItem,
			
				handler: function () {
					$(currentItem).addClass("reveal-item--is-visible");
				},
			
				offset: that.offsetPercentage
			});	
		});
	}	
	/*************************/
}

export default RevealOnScroll;