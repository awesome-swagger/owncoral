import React from 'react';

export type User = any; // TODO: fix type
export const UserContext = React.createContext<User>(null);
