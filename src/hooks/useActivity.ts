import { useContext } from 'react';
import { ActityContext } from '../context/ActivityContext';

export const useActivity = () => {
  const context = useContext(ActityContext);

  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};
