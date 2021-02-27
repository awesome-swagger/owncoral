import React from 'react';

export type UserT = any; // TODO: fix type
export const UserContext = React.createContext<UserT>(null);
