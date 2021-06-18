import { createContext, Dispatch, SetStateAction } from 'react';
import type { UserProfileT } from './shared-fullstack/types';

export const UserContext = createContext<
  [UserProfileT | null, Dispatch<SetStateAction<UserProfileT | null>>]
>([null, () => {}]);
