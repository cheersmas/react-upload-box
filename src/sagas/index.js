import {all, call} from 'redux-saga/effects';
import {
  mySaga
} from './percentageSaga';

export default function* rootSaga() {
  yield all([
    call(mySaga),
  ]);
};
