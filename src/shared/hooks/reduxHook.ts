import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'src/app/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
