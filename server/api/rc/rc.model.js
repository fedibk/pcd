'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './rc.events';

var RcSchema = new mongoose.Schema({
  model: String,
  reference: { type: String, required: true, unique: true }
});

registerEvents(RcSchema);
export default mongoose.model('Rc', RcSchema);
