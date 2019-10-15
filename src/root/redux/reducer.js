import { combineReducers } from 'redux';

import app from '../app/store/reducer';
import auth from '~/modules/auth/store/reducer';
import signup from '~/modules/auth_signup/store/reducer';
import map from '~/modules/map/store/reducer'

export default combineReducers({
  app,
  auth,
  signup,
  map,
});
