"use strict";

var el    = {};
var now   = {};
var last  = {};
var first = {};

window.onload = function() {

  // 513907140 Real bday minute at 23:59:00
  // But for all purposes I count and celebrate starting at 0:00:00
  first.bday = moment.unix( 513820800 );
    
  now.timestamp = moment();

  // now.timestamp = moment.unix( 1460592000 ); // 04/14/2016
  // now.timestamp = moment.unix( 1429056000 ); // 04/15/2015

  el.timestamp = document.createElement( 'pre' );
  el.timestamp.innerHTML = 'now: ' + now.timestamp; 

  document.body.appendChild( el.timestamp );

  
  now.alive = now.timestamp.diff( first.bday );

  el.alive = document.createElement( 'pre' );
  el.alive.innerHTML = 'alive: ' + now.alive;
  
  document.body.appendChild( el.alive );


  now.years = Math.floor( moment.duration( now.alive, 'seconds' ).asYears() / 1000 );

  last.bday = first.bday.add( now.years, 'years' );
  last.sunday = last.bday;

  while ( parseInt( last.sunday.utc().format( 'd' ) ) > 0 )
    last.sunday.utc().subtract( 1, 'day' );

  now.weeks = moment().diff( last.sunday, 'weeks' );

  el.point = document.createElement( 'h2' );
  el.point.innerHTML = now.years + '.' + now.weeks;

  document.body.appendChild( el.point );


}
