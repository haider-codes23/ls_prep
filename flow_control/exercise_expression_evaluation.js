// true && false returns false ,then false || false returns false. so expression 1 captures the value false.
let expression1 = (false || (true && false)) ? 'is true' : 'is false';
console.log(`Expression-1: ${expression1}`);
// The Expression in the parentheses is evaluated first which results in 3, 3 is a truthy value. later true || 3 returns.
let expression2 = (true || (1 + 2)) ? 'is true' : 'is (1 + 2)';
console.log(`Expression-2: ${expression2}`);
// (1+2) gets evaluated first to 3 which is a truthy value . later true || (1 + 2) get evaluated which returns. 
let expression3 = ((1 + 2) || true) ? '(1 + 2)' : 'true';
console.log(`Expression-3: ${expression3}`);
// (1+2) get evaluated first which results in 3 a truthy value. Then true && 3 get evaluated which reuslt in true 
let expression4 = (true && (1 + 2)) ? 'true' : '(1 + 2)';
console.log(`Expression-4: ${expression4}`);
// (1+2) is evaluated first which results in 3 which is a truthy value. Then false && 3 gets evaluated which evaluates to false
let expression5 = (false && (1 + 2)) ? 'false' : '(1+2)';
console.log(`Expression-5: ${expression5}`);
// (1+2) is evaluated first which results in 3 which is a truthy value. Then 3 and true are evaluated to true 
let expression6 = ((1 + 2) && true) ? '(1+2)' : true;
console.log(`Expression-6: ${expression6}`);
//(32*4) is evaluated first which results in 128 which is a truthy value. Then 128 >= 129 is evaluated which evaluated to false
let expression7 = ((32 * 4) >= 129) ? '(32 * 4)' : '129';
console.log(`Expression-7: ${expression7}`);
// 4 is truthy value so this expression evaluated to true
let expression8 = (true === 4) ? 'its "true" that true === 4' : 'its "false" that true ==== 4';
console.log(`Expression-8: ${expression8}`);
// (847 === '847') is evaluated first which results to false. Then false === false is evaluated to true
let expression9 = (false === (847 === '847')) ? 'false' : "847 ==== '847'";
console.log(`Expression-9: ${expression9}`);
// The expression (847 == '847') is evaluated as true. Then the expression (false === true) is evaluated as false 
let expression10 = (false === (847 == '847')) ? 'false' : '847 == "847"';
console.log(`Expression-10: ${expression10}`);
// The expressions in the inner most parentheses is evaluated first. e.g (100/5) and (328/4) 
// then the results of those are evaluated with the expression in the outer parentheses
// (20 === 20) and (82 === 82) . In this way it works its way out to the outer most part of expression
let expression11 = ((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
console.log(`Expression-11: ${expression11}`);