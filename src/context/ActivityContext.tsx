import { createContext, useReducer } from 'react';
import {
  ActivityActions,
  activityReducer,
  ActivityState,
  initialState,
} from '../reducers/activity-reducer';

type ActivityProviderProps = {
  children: React.ReactNode;
};

type ActityContextProps = {
  state: ActivityState;
  dispatch: React.Dispatch<ActivityActions>;
};

export const ActityContext = createContext<ActityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <ActityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActityContext.Provider>
  );
};
