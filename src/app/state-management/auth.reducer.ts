import {AuthModel} from "../models/auth/auth.model";
import * as AuthActions from "../state-management/auth.actions"

const defaultState: AuthModel = {
  is_logged_in: false,
  refresh: null,
  access: null
};

export function authReducer(state: AuthModel = defaultState,
                            action: AuthActions.AuthActions) {

  switch (action.type) {
    case "[AUTHMODEL] Login":
      return action.payload;
    case "[AUTHMODEL] Logout":
      return defaultState;
    default:
      return defaultState;
  }

}
