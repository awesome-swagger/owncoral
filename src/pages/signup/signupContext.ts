import React, { Dispatch, Reducer } from 'react';
import { SignupInfo, SignupInfoT } from '../../shared-fullstack/validators';

export type SignupContextT = {
  signupInfo?: SignupInfoT;
  dispatch?: Dispatch<Partial<SignupInfoT>>;
};
export type SignupReducerT = Reducer<SignupInfoT, Partial<SignupInfoT>>;

/**
 * Reducer performs shallow merge of new state into old state.
 *
 * @param state current state
 * @param signupUpdate a shallow update to the signup state
 */
export const signupReducer: SignupReducerT = (state, signupUpdate) => ({
  ...state,
  ...signupUpdate,
});
export const EMPTY_SIGNUP = SignupInfo.parse({
  ...Object.fromEntries(Object.keys(SignupInfo.shape).map((fieldName) => [fieldName, null])),
  isSignupComplete: false,
});

/*
 * TODO:
 *   Rework context into a custom hook to avoid undefined dispatch everywhere:
 *   https://medium.com/@rivoltafilippo/typing-react-context-to-avoid-an-undefined-default-value-2c7c5a7d5947
 */
export const SignupContext = React.createContext<SignupContextT>({});
