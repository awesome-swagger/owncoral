import { css } from '@emotion/react';
import React, { Fragment, useContext } from 'react';

import { UserContext } from '../../userContext';

function DebugPanel() {
  const [user] = useContext(UserContext);
  return process.env.NODE_ENV === 'development' ? (
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
        text-align: center;
      `}
    >
      <pre>{user?.email ? 'Profile loaded: ' + user.email : 'No profile loaded'}</pre>
    </div>
  ) : null;
}

// eslint-disable-next-line import/no-default-export
export default DebugPanel;
