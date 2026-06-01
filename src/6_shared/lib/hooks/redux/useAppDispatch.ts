import type { AppDispatch } from '@app/store/store.ts';
import { useDispatch } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
