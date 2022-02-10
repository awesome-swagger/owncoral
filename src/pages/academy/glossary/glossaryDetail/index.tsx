import React, { Fragment, lazy } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { BackBtn } from '../../../../components';
import { Title2 } from '../../../../components/text';
import { useScrollToTop } from '../../../../lib/useScrollToTop';
import { titleToUrlFragment } from '../../lib';
import { GlossaryData } from '../GlossaryData';

const Error404 = lazy(() => import('../../../error404'));

type filteredDataT = { name: string; jsx: React.ReactNode } | undefined;

const GlossaryDetail = () => {
  useScrollToTop();

  const history = useHistory();
  const { title } = useParams<{ title: string }>();

  const filteredData: filteredDataT = GlossaryData.find(
    (val) => titleToUrlFragment(val.name) === title,
  );

  return filteredData ? (
    <Fragment>
      <BackBtn handleClick={() => history.goBack()} />
      <Fragment>
        <Title2 my={4}>{filteredData.name}</Title2>
        {filteredData.jsx}
      </Fragment>
    </Fragment>
  ) : (
    <Error404 isComponent />
  );
};

// eslint-disable-next-line import/no-default-export
export default GlossaryDetail;
