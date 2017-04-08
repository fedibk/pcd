'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './outlet.events';

var OutletSchema = new mongoose.Schema({
  name: String,
  place: String,
  onCode: String,
  offCode: String,
  state: Boolean
});

registerEvents(OutletSchema);
export default mongoose.model('Outlet', OutletSchema);
