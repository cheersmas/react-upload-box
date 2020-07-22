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
        return {text: "Uploading...", color: '#ade3cf'}
      case(Status.STOPPED):
        return {text: "Stopped", color: '#fda7a7'}
      case(Status.PAUSED):
        return {text: "Paused", color: '#518be8'}
      case(Status.COMPLETED):
        return {text: "Upload Complete", color: '#6ee379'}
      default:
        return {text: "Uploading...", color: '#ade3cf'}
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
