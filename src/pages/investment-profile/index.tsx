import React, {
  createContext,
  Dispatch,
  lazy,
  useCallback,
  useEffect,
  useReducer
} from 'react';
import { Redirect, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { ProtectedRoute } from '../../components';
import { investmentProfileRouteGraph } from './investmentProfileRoutes';

const Error404 = lazy(() => import('../error404'));

export type ContextType = {
  formState?: formStateType;
  dispatch?: any;
};

type ActionType = {
  type: string;
  payload: { [key: string]: any };
};

type formStateType = {
  [key: string]: any;
};

export type InvestmentContextT = {
  formState?: formStateType;
  dispatch?: Dispatch<Partial<formStateType>>;
};

export type StepPropsT = {
  nextStep: (nextExit?: number) => void;
  prevStep: () => void;
};

export const InvestmentProfileContext = createContext<InvestmentContextT>({});

export function InvestmentProfileProvider ({ children }: { children: React.ReactNode}) {
  const [formState, dispatch] = useReducer(
    InvestFormReducer,
    JSON.parse(localStorage.getItem('investment_state') || '{}')
  );

  useEffect(() => {
    /** store state at local storage as well for future use */
    localStorage.setItem('investment_state', JSON.stringify(formState));
  }, [formState]);

  return (
    <InvestmentProfileContext.Provider value={{formState, dispatch}}>
      {children}
    </InvestmentProfileContext.Provider>
  );
}

export const StepFormContext = createContext<ContextType>({});

function formReducer(state: formStateType, action: ActionType) {
  switch (action.type) {
    case 'update-form':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const InvestFormReducer = 
  (state: formStateType, updateAction: Partial<formStateType>) => ({ ...state, ...updateAction })

function InvestmentProfileFlow() {
  const [formState, dispatch] = useReducer(
    formReducer,
    JSON.parse(localStorage.getItem('login_state') || '{}'),
  );

  const { url: investmentRootUrl } = useRouteMatch();
  const history = useHistory();

  const createNextStep = (exits: Array<string>) => (exitNum = 0) => {
    if (exits.length === 0) {
      history.push('/');
    } else {
      history.push(investmentRootUrl + exits[exitNum]);
    }
  };

  useEffect(() => {
    /** store state at local storage as well for future use */ 
    localStorage.setItem('login_state', JSON.stringify(formState));
  }, [formState]);

  const prevStep = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <StepFormContext.Provider value={{ formState, dispatch }}>
      <Switch>
        <ProtectedRoute exact path={investmentRootUrl}>
          <Redirect to={investmentRootUrl + '/information-missing'} />
        </ProtectedRoute>
        {Object.keys(investmentProfileRouteGraph).map(
          (path) => {
            const Component = investmentProfileRouteGraph[path].component;
            return (
              <ProtectedRoute exact path={investmentRootUrl + path} key={path}>
                <Component nextStep={createNextStep(investmentProfileRouteGraph[path].next)} prevStep={prevStep} />
              </ProtectedRoute>
            );
          }
        )}
        <ProtectedRoute path="*" component={Error404} />
      </Switch>
    </StepFormContext.Provider>
  );
}

// eslint-disable-next-line import/no-default-export
export default InvestmentProfileFlow;
