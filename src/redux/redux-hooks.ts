import { useDispatch, useSelector } from 'react-redux';
import { ReduxDispatch, RootState } from './redux-store.ts';

export const useReduxDispatch = useDispatch.withTypes<ReduxDispatch>();
export const useReduxSelector = useSelector.withTypes<RootState>();
