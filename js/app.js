// DOM Elements

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  goals = document.getElementById('goals');

// Show Time
function showTime (){
  let today = new Date(2022, 06,10,20,33,30),
  //let today = new Date(),
   hour = today.getHours(),
   min = today.getMinutes(),
   sec = today.getSeconds();

  // Setting Am or Pm
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12 hr Format
  hour = hour % 12 || 12;

  // Output Time 
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}
//Add Zeros
function addZero(num){
  return (parseInt(num,10) <10 ? '0': '') + num;
}

// Set Background and Greeting 
function setBgGreet(){
  let today = new Date(2022, 06,10,20,33,30),
  //let today = new Date(),
    hour = today.getHours();

  if(hour<12){
    document.body.style.backgroundImage ="url('../img/Morning.jpg')";
    greeting.textContent = 'Good Morning';

  }else if (hour <18) {
    document.body.style.backgroundImage ="url('../img/Afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';

  } else {
    document.body.style.backgroundImage ="url('../img/Night.jpg')";
    document.body.style.backgroundSize ="cover";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  } else{
    name.textContent = localStorage.getItem('name');
  }
}
// Set Name
function setName(e){
  if(e.type=== 'keypress'){
    // Make sure enter is pressed 
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur(); 
    }
  } else{
    localStorage.setItem('name', e.target.innerText);
  }
}
// Get Goals
function getGoals() {
  if (localStorage.getItem('goals') === null){
    goals.textContent = '[Enter Goals]';
  } else{
    goals.textContent = localStorage.getItem('goals');
  }
}
// Set Goals
function setGoals(e){
  if(e.type=== 'keypress'){
    // Make sure enter is pressed 
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('goals', e.target.innerText);
      goals.blur(); 
    }
  } else{
    localStorage.setItem('goals', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goals.addEventListener('keypress', setGoals);
goals.addEventListener('blur', setGoals);

// Run
showTime();
setBgGreet();
getName();
getGoals();