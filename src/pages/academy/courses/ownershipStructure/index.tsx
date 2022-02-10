import type React from 'react';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';

import { getFlowData, CourseEnum } from '../../../../lib/courseDetailData';
import { useScrollToTop } from '../../../../lib/useScrollToTop';

const Error404 = lazy(() => import('../../../error404'));

const OwnershipStructureFlow: React.FC = () => {
  useScrollToTop();

  const { title } = useParams<{ title: string }>();

  return getFlowData(title, CourseEnum.OWNERSHIP_STRUCTURE) || <Error404 isComponent />;
}

// eslint-disable-next-line import/no-default-export
export default OwnershipStructureFlow;
