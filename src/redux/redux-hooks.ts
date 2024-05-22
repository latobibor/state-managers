import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-store.ts';

export const useReduxDispatch = useDispatch.withTypes<AppDispatch>();
export const useReduxSelector = useSelector.withTypes<RootState>();
