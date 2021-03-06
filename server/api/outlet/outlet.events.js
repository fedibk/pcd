/**
 * Outlet model events
 */

'use strict';

import {EventEmitter} from 'events';
var OutletEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OutletEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Outlet) {
  for(var e in events) {
    let event = events[e];
    Outlet.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    OutletEvents.emit(event + ':' + doc._id, doc);
    OutletEvents.emit(event, doc);
  };
}

export {registerEvents};
export default OutletEvents;
