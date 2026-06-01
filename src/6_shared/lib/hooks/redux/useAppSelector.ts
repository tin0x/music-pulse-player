import type { RootState } from '@app/store/store.ts';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
