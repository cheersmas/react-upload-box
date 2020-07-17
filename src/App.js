import React from 'react';
import {connect} from 'react-redux';
import {
  startUpload,
  pauseUpload,
  stopUpload,
  resetUpload
} from './actions';
import {UploadBox} from "./components/UploadBox";
import './App.css';
import {Line} from "./components/Line";

function App({
  // store
  percentage,
  // actions
  startUpload,
  stopUpload,
  pauseUpload,
  resetUpload,
}) {
  return (
    <div className="App">
      <button onClick={startUpload}>Start Upload</button>
      <button onClick={pauseUpload}>Pause Upload</button>
      <button onClick={stopUpload}>Stop Upload</button>
      <button onClick={resetUpload}>Reset Upload</button>
      <UploadBox percentage={percentage} />
      <Line />
    </div>
  );
}

const mapStateToProps = store => ({
  percentage: store.percentageStore.percentage
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
