import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  startUpload,
  pauseUpload,
  stopUpload,
  resetUpload
} from './actions';
import {UploadBox} from "./components/UploadBox";
import {Annotations} from "./components/Annotations";
import './App.css';
import {Status} from "./constants";

function App({
  // store
  percentage,
  status,
  // actions
  startUpload,
  stopUpload,
  pauseUpload,
  resetUpload,
}) {
  useEffect(() => {startUpload()}, []);
  const getStatus = () => {
    switch(status) {
      case(Status.RUNNING):
        return "Uploading..."
      case(Status.STOPPED):
        return "Stopped"
      case(Status.PAUSED):
        return "Paused"
      case(Status.COMPLETED):
        return "Upload Complete"
      default:
        return "Uploading..."
    }
  }
  const getPaused = () => status === Status.PAUSED
  const getStopped = () => status === Status.STOPPED
  const getCompleted = () => status === Status.COMPLETED
  return (
    <div className="App">
      <UploadBox
        percentage={percentage}
        paused={getPaused()}
        stopped={getStopped()}
        completed={getCompleted()}
        status={getStatus()}
        fileName={'ubuntu-14.0.4.zip'}
        {...{
          percentage,
          startUpload,
          stopUpload,
          pauseUpload,
          resetUpload
        }}
      />
      <Annotations />
    </div>
  );
}

const mapStateToProps = store => ({
  percentage: store.percentageStore.percentage,
  status: store.percentageStore.status
});

const mapDispatchToProps = dispatch => {
  return {
    startUpload: () => dispatch(startUpload()),
    stopUpload: () => dispatch(stopUpload()),
    pauseUpload: () => dispatch(pauseUpload()),
    resetUpload: () => dispatch(resetUpload())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
