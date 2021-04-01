import React, { Dispatch, SetStateAction } from 'react';

// TODO: create shared type-lib and fix below
export type UserT = any;
export const UserContext = React.createContext<[UserT, Dispatch<SetStateAction<UserT>>]>([
  null,
  () => {},
]);
