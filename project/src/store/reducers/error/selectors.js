import {NameSpace} from '../root-reducer';

export const getIsUnexpectedError = (state) => state[NameSpace.ERROR].isUnexpectedError;
