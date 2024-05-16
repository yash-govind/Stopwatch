let startbtn = document.getElementById('start');
let stopbtn = document.getElementById('stop');
let resetbtn = document.getElementById('reset'); //creating buttons 
// initially all values will be 0
let hour, minute, second, milli;
hour = 0;
minute = 0;
second = 0;
milli = 0;

//creating event handlers for buttons to execute the function and run them when we are clicking them 
startbtn.addEventListener('click', function () {
    timer = true; // timer starts when you click on start button
    stop_watch(); //run the stop_watch function when you click on start
});

stopbtn.addEventListener('click', function () {
    timer = false; // timer stops when you click on stop button. 

});
resetbtn.addEventListener('click', function () {
    timer = false; // timer stops when you reset and all values are set to 0
    hour = 0;
    minute = 0;
    milli = 0;
    second = 0; // we display the result in string via ids declared in index.html for hr,min,sec,milliseconds
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milli').innerHTML = "00";
}
);

function stop_watch() {
    if  (timer) { // start the timer 
        milli++; //increment milliseconds 
        //logic is that we will set timer and milliseconds will increment till they reach 100 and we set it to 0 to start again , then seconds will increment till it reaches 60 and set second to 0
        //
        if (milli == 100) {
            second++;
            milli = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        // declare strings for hours ,minutes,seconds and milliseconds for the case the value tends to be in single digits , then we want out stopwatch to show 09 instead of 9
        let hour_string, minute_string, second_string, milli_string;
        hour_string = hour; //set hour string to current hour 
        minute_string = minute;
        second_string = second;
        milli_string = milli;
        if (hour < 10) {
            hour_string = "0" + hour_string;
        }
        if (second < 10) {
            second_string = "0" + second_string;
        }
        if (minute < 10) {
            minute_string = "0" + minute_string;
        }
        if (milli < 10) {
            milli_string = "0" + milli_string;
        }
        //display values in string .
        document.getElementById('hr').innerHTML = hour_string;
        document.getElementById('min').innerHTML = minute_string;
        document.getElementById('sec').innerHTML = second_string;
        document.getElementById('milli').innerHTML = milli_string;
        setTimeout(stop_watch, 10);// sets a delay of 10 milliseconds to execute our stopwatch to run smoothly.
    }
}

