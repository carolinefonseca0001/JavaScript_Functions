console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 0; i < count; i++) {
        if (i % 2 == 0) {
            continue;
        } else {
            console.log(i)
        }
    }
}



printOdds(50)



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName} but you need to wait until you are 16.`;
    if (age >= 16)
        console.log (aboveSixteen);
    else if (age < 16)
        console.log (belowSixteen);
}
checkAge('Leah', 19)

checkAge('Maria', 10)


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant(x, y) {
    if ((x >= 1) && (y >= 1)){
    console.log (`(${x}, ${y}) is in Quadrant 1.`);
    }
    if ((x<0) && (y<0)){
        console.log (`(${x}, ${y}) is in Quadrant 3`)
    }
    if ((x<0) && (y>=1)){
        console.log (`(${x}, ${y}) is in Quadrant 4`)
    }
    if ((x>=1) && (y<0)){
        console.log (`(${x}, ${y}) is in Quadrant 2`)
    }
    if ((x===0) && (y>0)){
        console.log (`(${x}, ${y}) is on the X axis.`)
    }
    if ((x===0) && (y<0)){
        console.log (`(${x}, ${y}) is on the X axis.`)
    }
    if ((x>0) && (y===0)){
        console.log (`(${x}, ${y}) is on the Y axis.`)
    }
    if ((x<0) && (y===0)){
        console.log (`(${x}, ${y}) is on the Y axis.`)
    }
}
quadrant(5, 7)
quadrant(2, -8)
quadrant(-6, -7)
quadrant(-2, 9)
quadrant(0, 12)
quadrant(12,0)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangles(sideA, sideB, sideC) {
    if ((sideA + sideB < sideC) || (sideB + sideC < sideA) || (sideA + sideC < sideB)) {
        console.log ("The lengths entered make an invalid triangle.")
    }
    else if ((sideA == sideB) && (sideB == sideC)) {
        console.log ("The lengths entered make an equilateral triangle.")
    }
   else if ((sideA == sideB) && (sideB != sideC) || (sideA == sideC) && (sideA !=sideB) || (sideB == sideC) && (sideA != sideC)) {
        console.log ("The lengths entered make an isoceles triangle.")
    }
   else if ((sideA != sideB) && (sideB != sideC) && (sideA != sideC)) {
        console.log("The lengths entered make a scalene triangle.")
    }
}
triangles(1, 3, 11)
triangles(10, 10, 10)
triangles(5,5,7)
triangles(1,4,5)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n")
function cellPhone(planLimit, day, usage) {
    let totaldataLeft = (planLimit - usage)
    var daysLeft = (30 - day)
    var daysUsed = (0 + day)
    var avgdailyUse = (usage / day)
    var dailyLimit = (planLimit / 30)
    var actualUse = (avgdailyUse - dailyLimit)
    var actualdailyLimit = (totaldataLeft / daysLeft)
    var exceedData = (actualUse * daysLeft)
    var potentialUse = (dailyLimit - avgdailyUse)

    if(avgdailyUse < dailyLimit){
        console.log(`${daysUsed} days used, ${daysLeft} days left. 
            You have only used ${usage} GB of your ${planLimit} GB of monthly allotted data.
            Average daily use: ${avgdailyUse} GB/day
            You are using less than your daily limit, which is ${dailyLimit} GB per day, so feel free to use an additional ${potentialUse} GB per day`)
        }
    if(totaldataLeft / daysLeft < dailyLimit && totaldataLeft > 0)
    {
        console.log(`${daysUsed} days used, ${daysLeft} days left. 
        You have already used ${usage} GB of your ${planLimit} GB of monthly allotted data.
        Average daily use: ${avgdailyUse} GB/day
        You are EXCEEDING your average (or recommended) daily use by ${actualUse} GB/day,
        If you continue this high usage, you'll exceed your data plan by
        ${exceedData} GB.
        To stay below your data plan, use no more than ${actualdailyLimit} GB/day.`)
    }
        if(totaldataLeft <0)
{
            console.log(`${daysUsed} days used, ${daysLeft} days left. 
            You have already used ${usage} GB of your ${planLimit} GB of monthly allotted data.
            Average daily use: ${avgdailyUse} GB/day
            You have EXCEEDED your average daily use by ${actualUse} GB/day.
            You've run out of data. Yikes.`)
    }
            if(avgdailyUse === dailyLimit){
                console.log(`${daysUsed} days used, ${daysLeft} days left. 
                You have used ${usage} GB of your ${planLimit} GB of monthly allotted data.
                Average daily use: ${avgdailyUse} GB/day
                You are on target with your average daily use by ${avgdailyUse} GB/day.
                Great job.`)
 }
}
cellPhone(60,5,40)

cellPhone(60,22,61)

cellPhone (60, 10, 20)

cellPhone(60, 8, 4)