/**
 * Rc model events
 */

'use strict';

import {EventEmitter} from 'events';
var RcEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RcEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Rc) {
  for(var e in events) {
    let event = events[e];
    Rc.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    RcEvents.emit(event + ':' + doc._id, doc);
    RcEvents.emit(event, doc);
  };
}

export {registerEvents};
export default RcEvents;
