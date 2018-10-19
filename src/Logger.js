/*
 * @author mr.doob / http://mrdoob.com/
 */

var Logger = function () {

	this.logElement = document.createElement( 'div' );
	this.logElement.style.fontFamily = 'Helvetica, Arial, sans-serif';
	this.logElement.style.textAlign = 'left';
	this.logElement.style.fontSize = '10px';
	this.logElement.style.padding = '2px 0px 3px 0px';

	this.log = function ( msg, expand ) {

		this.logElement.appendChild( document.createTextNode( msg ) );
		this.logElement.appendChild( document.createElement( 'br' ) );

		if ( expand && msg instanceof Object ) {

			for ( var param in msg ) {

				this.logElement.appendChild( document.createTextNode( `- ${ param }: ${ msg[ param ] }` ) );
				this.logElement.appendChild( document.createElement( 'br' ) );

			}

		}

	};

	this.clear = function () {

		while ( this.logElement.childNodes.length ) {

			this.logElement.removeChild( this.logElement.firstChild );

		}

	};

};
