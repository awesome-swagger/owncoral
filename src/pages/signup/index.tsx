import React, { lazy, useCallback, useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { Box, BoxProps } from '@chakra-ui/layout'
import { AnimatePresence , motion } from 'framer-motion';
import { ProtectedRoute, SlideMotionBox } from '../../components';
import { signupRouteGraph } from './signupRoutes';
import { ResultAlmostThere } from './steps/ResultAlmostThere';

const Error404 = lazy(() => import('../error404'));

export type StepPropsT = {
  nextStep: (nextExit?: number) => void;
  prevStep: () => void;
};

/**
 * Overview
 *
 * 1. First check for accreditation. All state for these questions is
 *    local.
 * 2. If user is accredited, they set up a login and we start a session.
 * 3. Once they are logged in, we incrementally update the user_self
 *    view as they answer more questions.
 */

export const MotionBox = motion<BoxProps>(Box)

function SignupFlow() {
  const [ slideDirection, setSlideDirection ] = useState<number>(1);
  const [ height, setHeight ] = useState<number>(window.innerHeight);
  const [ width, setWidth ] = useState<number>(window.innerWidth);

  const { url: signupRootUrl } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const createNextStep = (exits: Array<string>) => (exitNum = 0) => {
    if (exits.length === 0) {
      history.push('/');
    } else {
      setSlideDirection(1);
      history.push(signupRootUrl + '/' + exits[exitNum]);
    }
  };
  const prevStep = useCallback(() => {
    history.goBack();
    setSlideDirection(-1);
  }, [history]);

  useEffect(() => {
    window.addEventListener('resize',()=> {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })
  },[])

  return (
    <Box pos="absolute" height={height} width={width} overflow="hidden">
      <AnimatePresence initial={false} custom={slideDirection} >
      <Switch location={location} key={location.key}>
        <Route exact path={signupRootUrl}>
          <Redirect push to={signupRootUrl + '/name'} />
        </Route>
          {Object.keys(signupRouteGraph).map(
            (path) => {
              const RouteComponent = signupRouteGraph[path].isProtectedRoute ? ProtectedRoute : Route;
              const SignupComponent = signupRouteGraph[path].component;
              return (
                  <RouteComponent exact path={signupRootUrl + '/' + path} key={path}>
                    <SlideMotionBox custom={slideDirection}>
                      <SignupComponent nextStep={createNextStep(signupRouteGraph[path].next)} prevStep={prevStep} />
                    </SlideMotionBox>
                  </RouteComponent> 
              );
            },
          )}
        <Route exact path={signupRootUrl + '/almost-there'}>
          <ResultAlmostThere />
        </Route>
        <Route path="*" component={Error404} />
      </Switch>
    </AnimatePresence>
    </Box>
  );
}

// eslint-disable-next-line import/no-default-export
export default SignupFlow;
