 //DETERMINE HOW MANY HRS OF SLEEP EACH NIGHT OF THE WEEK.
const getSleepHours = day =>{
  //TO LOWERCASE THE INPUT AND PROCESS IT.
  day = day.toLowerCase();
  switch(day){
    case 'monday':
     return 10;
    case 'tuesday':
     return 7;
    case 'wednesday':
     return 6;
    case 'thursday':
     return 4;
    case 'friday':
     return 3;
    case 'saturday':
     return 5;
    case 'sunday':
     return 8;
  }
};

// console.log(getSleepHours('monday')); // 10

 //TO THE TOTAL SLEEP HRS.
const getActualSleepHours = () =>{
 let totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');//SUM OF ALL HRS.
 
 return totalHours; 
};

 //IDEAL SLEEP HRS FUNCTION.
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7; //TOTAL HRS/WEEK.
};

// console.log(getIdealSleepHours()); // 56
// console.log(getActualSleepHours()); // 43

 //FUNCTION TO CALCULATE SLEEP DEBT.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log('You Got Perfect Amount Of Sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    let overSlept = actualSleepHours - idealSleepHours;
    console.log(`You Got More Sleep Than Needed. By ${overSlept} Hours.`);
  }
  else{ // actualSleepHours < idealSleepHours
     let underSlept = idealSleepHours - actualSleepHours;
     console.log(`You Need More Sleep By ${underSlept} Hours. Get Some Rest. `);
  }
  };

  calculateSleepDebt();


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

=> getActualSleepHours() could be implemented without calling getSleepHours(). 
Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

 // Put the daily sleep hours directly into getActualSleepHours().

 //CODE 
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;


=> Some people need to sleep longer than others. Rewrite getIdealSleepHours() 
so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.
 
 //CODE
 const getIdealSleepHours = hours => hours * 7;

//FUNCTION TO CALCULATE SLEEP DEBT.
const calculateSleepDebt = (hours) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(hours);
  .
  .
  .
  .
  };

  //CALLING THE FUNCTION
  calculateSleepDebt(8);

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
