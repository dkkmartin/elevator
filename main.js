const building = document.querySelector('.building')
const btns = Array.from(document.querySelectorAll('button'))
const elevatorDiv = document.querySelector('.elevator')
const time = 2000
const gridTemplates = [
  // First floor
  "'floor5 floor5 floor5 .' 'floor4 floor4 floor4 .' 'floor3 floor3 floor3 .' 'floor2 floor2 floor2 .' 'floor1 floor1 floor1 elevator'",
  // Second floor
  "'floor5 floor5 floor5 .' 'floor4 floor4 floor4 .' 'floor3 floor3 floor3 .' 'floor2 floor2 floor2 elevator' 'floor1 floor1 floor1 .'",
  // Third floor
  "'floor5 floor5 floor5 .' 'floor4 floor4 floor4 .' 'floor3 floor3 floor3 elevator' 'floor2 floor2 floor2 .' 'floor1 floor1 floor1 .'",
  // Fourth floor
  "'floor5 floor5 floor5 .' 'floor4 floor4 floor4 elevator' 'floor3 floor3 floor3 .' 'floor2 floor2 floor2 .' 'floor1 floor1 floor1 .'",
  //Fith floor 
  "'floor5 floor5 floor5 elevator' 'floor4 floor4 floor4 .' 'floor3 floor3 floor3 .' 'floor2 floor2 floor2 .' 'floor1 floor1 floor1 .'"
]


// Function elevatorDown moves the elevator down with animation
function elevatorDown1(floor) {
  elevatorDiv.classList.add('slideDown1')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideDown1')
    setElevatorFloor(floor)
  })
}

function elevatorDown2(floor) {
  elevatorDiv.classList.add('slideDown2')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideDown2')
    setElevatorFloor(floor)
  })
}

function elevatorDown3(floor) {
  elevatorDiv.classList.add('slideDown3')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideDown3')
    setElevatorFloor(floor)
  })
}

function elevatorDown4(floor) {
  elevatorDiv.classList.add('slideDown4')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideDown4')
    setElevatorFloor(floor)
  })
}

// Function elelvatorUp moves the elevator up with animation
function elevatorUp1(floor) {
  elevatorDiv.classList.add('slideUp1')
  delay(time).then(() => {
    setElevatorFloor(floor)
    elevatorDiv.classList.remove('slideUp1')
  })
}

function elevatorUp2(floor) {
  elevatorDiv.classList.add('slideUp2')
  delay(time).then(() => {
    setElevatorFloor(floor)
    elevatorDiv.classList.remove('slideUp2')
  })
}

function elevatorUp3(floor) {
  elevatorDiv.classList.add('slideUp3')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideUp3')
    setElevatorFloor(floor)
  })
}

function elevatorUp4(floor) {
  elevatorDiv.classList.add('slideUp4')
  delay(time).then(() => {
    elevatorDiv.classList.remove('slideUp4')
    setElevatorFloor(floor)
  })
}

// Add event listeners for buttons, buttons has a value as the same floor its on
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(`Going to floor: ${btn.name}`)
    controller(btn.name)
  })
})

function controller(btnFloor) {
  const elevatorCurrentFloor = elevatorDiv.dataset.elevatorFloor
  switch (btnFloor) {
    case '1': 
      if (elevatorCurrentFloor === '2') {
        elevatorDown1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '3') {
        elevatorDown2(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '4') {
        elevatorDown3(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '5') {
        elevatorDown4(btnFloor)
        disableBtns()
      }
      break

    case '2':
      if(elevatorCurrentFloor === '1') {
        elevatorUp1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '3') {
        elevatorDown1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '4') {
        elevatorDown2(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '5') {
        elevatorDown3(btnFloor)
        disableBtns()
      }
      break;

    case '3': 
      if(elevatorCurrentFloor === '1') {
        elevatorUp2(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '2') {
        elevatorUp1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '4') {
        elevatorDown1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '5') {
        elevatorDown2(btnFloor)
        disableBtns()
      }
      break

    case '4': 
      if(elevatorCurrentFloor === '1') {
        elevatorUp3(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '2') {
        elevatorUp2(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '3') {
        elevatorUp1(btnFloor)
        disableBtns()
      }
      if(elevatorCurrentFloor === '5') {
        elevatorDown1(btnFloor)
        disableBtns()
      }
      break

    case '5': 
    if(elevatorCurrentFloor === '1') {
      elevatorUp4(btnFloor)
      disableBtns()
    }
    if(elevatorCurrentFloor === '2') {
      elevatorUp3(btnFloor)
      disableBtns()
    }
    if(elevatorCurrentFloor === '3') {
      elevatorUp2(btnFloor)
      disableBtns()
    }
    if(elevatorCurrentFloor === '4') {
      elevatorUp1(btnFloor)
      disableBtns()
    }
    break

    default:
      break;
  }
}

function setElevatorFloor(floor) {
  elevatorDiv.dataset.elevatorFloor = floor
  building.style.gridTemplateAreas = gridTemplates[floor - 1]
}

function disableBtns() {
  btns.forEach((btn) => {
    btn.disabled = true
  })
  delay(time).then(() => {
    btns.forEach((btn) => {
      btn.disabled = false
    })
  })
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
