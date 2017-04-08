'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './button.events';

var ButtonSchema = new mongoose.Schema({
  rc_reference: String,
  onCode: String,
  offCode: String,
  active: Boolean
});

registerEvents(ButtonSchema);
export default mongoose.model('Button', ButtonSchema);
