import { actionTypes } from '../constants';

export const incrementCount = () => ({ type: actionTypes.INCREMENT });

export const decrementCount = () => ({ type: actionTypes.DECREMENT });

export const resetCount = () => ({ type: actionTypes.RESET });
