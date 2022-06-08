import { useContext } from 'react';
import StoreContext from './Context';

export const useHookContext = () => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
};
