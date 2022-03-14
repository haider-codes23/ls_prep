const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe'; 
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
// we get a type error due to this statement because const type variables cannot be reassigned
// instead if we used let keyword to decalre the NAME varibale this program will work. We would then
// have three greeting statements for Victor and three greeting statements for Joe