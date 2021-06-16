import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { pick } from 'remeda';

import { UserContext } from '../../userContext';

export function DebugPanel() {
  const [user] = useContext(UserContext);
  return import.meta.env.SNOWPACK_PUBLIC_CORAL_ENV === 'development' ? (
    <div
      css={css`
        background-color: rgba(0, 0, 0, 0);
        display: inline-block;
        pointer-events: none;
        position: fixed;
        bottom: 20px;
        width: 200px;
        left: 20px;
        color: darkred;
        z-index: 100;
        user-select: none;
        text-align: left;
      `}
    >
      <pre>
        {user
          ? 'User Profile\n' + JSON.stringify(pick(user, ['email', 'isAdmin']), null, 2)
          : 'No profile loaded'}
      </pre>
    </div>
  ) : null;
}
