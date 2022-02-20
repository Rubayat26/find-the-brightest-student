const student = [
    {name: 'Bob', marks : [50, 60, 70]},
    {name: 'Alice', marks :[70, 80, 90]},
    {name: 'John' , marks :[30, 40, 50]},
    {name: 'Rob', marks : [90, 100, 80]},
    {name: 'Martha', marks : [10,15,20]}
]



function calculateAverage(marks){
    const reducer = (a, b) => a+b;
    const av = marks.reduce(reducer)/marks.length;
    return av;

}



studentAverage= [];   // Created an empty array to store the average values in an array

student.forEach(student => {
    
    a = calculateAverage(student.marks);
    
    studentAverage.push(a)   // pushed average values in the array
    
})
console.log(studentAverage)


const studentScore= [];     // created an empty array to store average value and name later on
for (let i = 0; i < student.length; i++) {
    const score = {name: student[i].name, score: studentAverage[i]};    // created input to add name and average to the array
    
    studentScore.push(score) 
}

console.log(studentScore)


let maxValue = studentScore[0].score;     // declared the fist student score as the max value for iterations

for (let i = 1; i < studentScore.length; i++) {  
    
    if (studentScore[i].score> maxValue){    // created for loop for comparing each value with the previously declared maximum value
        maxValue = studentScore[i].score;
    }
    
}

console.log(maxValue)

const brightestStudent = studentScore.find(studentScore => studentScore.score===maxValue) // used #find to find the element cotaining maximum value

console.log(brightestStudent)

console.log(`${brightestStudent.name} is the brightest student`)