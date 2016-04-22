'use strict';

var DateBetween = function DateBetween(startDate, endDate) {
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var distance = endDate - startDate;
  console.log(distance);
  var checker = document.getElementById('checker');
  if (distance < 0) {
     checker.innerHTML = 'Ja';
     
    return 'count down date expired';
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor(distance % day / hour);
  var minutes = Math.floor(distance % hour / minute);
  var seconds = Math.floor(distance % minute / second);

  var day_description;
  var hour_description;
  var min_description;
  var sec_description;

  if (days == 1) {
    day_description = ' dag ';
  } else {
    day_description = ' dagen ';
  }

  if (hours == 1) {
    hour_description = ' uur ';
  } else {
    hour_description = ' uur ';
  }

  if (minutes == 1) {
    min_description = ' minuut ';
  } else {
    min_description = ' minuten ';
  }

  if (seconds == 1) {
    sec_description = ' seconde';
  } else {
    sec_description = ' seconden';
  }

  var between = days + day_description;
  between += hours + hour_description;
  between += minutes + min_description;
  between += seconds + sec_description;

  
  var dater = document.getElementById('date');
  
  console.log(endDate - startDate);
  if((endDate - startDate) < 0){
      console.log('test');
      checker.innerHTML = 'Ja';
    }else{
      checker.innerHTML = 'Nee';
    }

  dater.innerHTML = 'Nog '+ between;

  return between;

};

var myCounter = setInterval(function(){
	var startDate = new Date();
	var endDate = new Date('04/22/2016 3:00 PM');
		
	DateBetween(startDate, endDate);
},1000);

