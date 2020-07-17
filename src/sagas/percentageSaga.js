import {call, takeLatest, take, race, put, select, cancelled} from "redux-saga/effects";
import {eventChannel} from 'redux-saga';
import {ActionConstants} from "../constants";
import {
  updatePercentage,
  stopUpload,
  pauseUpload,
} from '../actions';

const getPercentage = (store) => store.percentageStore.percentage;

function percentageTick(secs) { //tick every 100ms to signal increase of percentage
  return eventChannel(emit => {
    const interval = setInterval(() => {
      emit('tick')
    }, secs);
    return () => clearInterval(interval);
  })
}

function* percentageUpdater() {
  const chan = yield call(percentageTick, 80);
  try {
    while(take(ActionConstants.START_UPLOAD)) {
      const {update, stop, pause} = yield race({
        update: take(chan),
        stop: take(ActionConstants.STOP_UPLOAD),
        pause: take(ActionConstants.PAUSE_UPLOAD)
      });
      if (stop) {
        put(stopUpload());
        break
      } else if (pause) {
        put(pauseUpload());
        break
      } else {
        const percentage = yield select(getPercentage);
        if (percentage >= 100) {
          chan.close()
          break
        }
        yield put(updatePercentage())
      }
    }
  } finally {
    if (yield cancelled()) {
      chan.close()
      console.log('Timer Terminated')
    }
  }
}
export function* mySaga() {
  yield takeLatest(ActionConstants.START_UPLOAD, percentageUpdater);
}