import { createContext, useMemo, useReducer } from 'react';
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
  caloriesConsumed: number;
  caloriesBurned: number;
  netCalories: number;
};

export const ActityContext = createContext<ActityContextProps>(null!);

export const ActivityProvider = ({ children }: ActivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + +activity.calories : total,
        0
      ),
    [state.activities]
  );

  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + +activity.calories : total,
        0
      ),
    [state.activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [state.activities]
  );

  return (
    <ActityContext.Provider
      value={{ state, dispatch, caloriesConsumed, caloriesBurned, netCalories }}
    >
      {children}
    </ActityContext.Provider>
  );
};
