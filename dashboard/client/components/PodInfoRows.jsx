import React, { useState, useEffect } from 'react';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const PodInfoRows = ({ clickedArray, setClickedArray, podNums, setStep, setTimeWindow }) => {

  const newClick = (arg) => {
    let found = false;
    const newClickedArray = clickedArray.slice();
    for (let i = 0; i < newClickedArray.length; i++) {
      if (newClickedArray[i].podName === arg) {
        newClickedArray.splice(i, 1);
        setClickedArray(newClickedArray);
        found = true;
       
        break;
      }
    }
    if (!found) {
      newClickedArray.push(podNums[arg]);
      setClickedArray(newClickedArray);
    }
  };

  // -----------------------------------------------------------------------------------------
  // for changing time and step range - 
  // to disable functionality: 
  // comment out this section and div w/ id of 'dropdowns' in podInfoRows render
  // comment out imeWindow and step state added to podcontainer 
  const oneHour = 3600;
  const sixHours = 21600;
  const twelveHours = 43200;
  const oneDay = 86400;
  const threeDays = 259200;

  const times = [oneHour, sixHours, twelveHours, oneDay, threeDays];
  const timeButtons = [];
  times.forEach(time => {
    timeButtons.push(<DropdownItem menuVariant="dark"> <div onClick={() => { console.log('clicked'); setTimeWindow(time); setClickedArray([]) }} style={{ padding: '5px'}}>{time}</div></DropdownItem>);
  })

  const steps = ['1m', '5m', '30m', '1hr'];
  const stepButtons = [];
  steps.forEach(step => {
    stepButtons.push(<DropdownItem menuVariant="dark"> <div onClick={() => { console.log('clicked'); setStep(step); setClickedArray([]) }} style={{ padding: '5px'}}>{step}</div></DropdownItem>);
  })
  // ------------------------------------------------------------------------------------------

  const podNames = Object.entries(podNums);
  const podList = [];

  for (let i = 0; i < podNames.length; i++) {
    let pod = podNames[i][1];
    podList.push(
      <li
        onClick={() => {
          newClick(pod.podName);
        }}
        key={i}>
        {pod.name} {pod.podName}
      </li>
    );
  }

  return (
    <div>
      <div id='dropdowns'>
        <DropdownButton class="dropdown-button" title="Time Range">
          {timeButtons}
        </DropdownButton>
        <DropdownButton class="dropdown-button" title="Step">
          {stepButtons}
        </DropdownButton>
      </div>
      {' '}
      <ul>{podList}</ul>{' '}
    </div>
  );
};

export default PodInfoRows;

//container

//podinforows
//click fuction to add pods to clickedArray.
//memorytimeseries
//clickedArray
