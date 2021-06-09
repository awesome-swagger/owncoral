import React, { Dispatch, SetStateAction } from 'react';
import type { UserProfileT } from './shared-fullstack/types';

export const UserContext = React.createContext<
  [
    UserProfileT | null,
    Dispatch<SetStateAction<UserProfileT | null>>,
    Array<String>,
    Dispatch<SetStateAction<any>>,
  ]
>([null, () => {}, [], () => {}]);
