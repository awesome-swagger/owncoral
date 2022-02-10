import type { UserProfileT } from '../shared-fullstack/types';

import { fetchWrap } from './api';

export async function getUser(): Promise<UserProfileT | null> {
  const resp = await fetchWrap('/api/currentUser');
  if (!resp?.ok) return null;

  return await resp.json();
}
