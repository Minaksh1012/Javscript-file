
// 1.Create a folder named it minakshi

// const fs=require('fs')
// fs.mkdir('minakshi',function(err){
//     console.log("created")
// })

// NAMED THE FILE

// 2.create a file in it named file.txt  and data into it.
// const fs=require('fs')
// fs.writeFile("minakshi/file.txt","My name is Minakshi Dhangare",function(err){
//     console.log("rename")
// })


// READ THE DATA

// var fs=require('fs')
// fs.readFile('Read.txt','utf8',function(err,data){
//     console.log(data)
// })

// WITH ARROW FUNCTION

// var fs=require('fs')
// fs.readFile('Read.txt','utf8',(err,data)=>{
//     console.log(data)
// })



// WRITE THE DATA

// var fs=require('fs')
// fs.writeFile('file.txt','minakshi dayashankar dhangare',function(err){
//     console.log("data saved")
// })

// WITH ARROW FUNCTION

// var fs=require('fs')
// fs.writeFile('Read.txt','minakshi dayashankar dhangare',(err)=>{
//     console.log("data saved")
// })





// APPEND THE VALUE
var fs=require('fs')
fs.appendFile('Read.txt',' school name:Abhyankar kanya school',function(err){
    console.log("saved")
})

// WITH ARROW FUNCTION

// var fs=require('fs')
// fs.appendFile('Read.txt',' school name:Abhyankar kanya school',(err)=>{
//     console.log("saved")
// })






// var fs=require('fs')
// fs.unlink('Read.txt',function(err){
//     console.log("deleted")
// })

// WITH ARROW FUNCTION

// var fs=require('fs')
// fs.unlink('Read.txt',(err)=>{
//     console.log("deleted")
// })




// 5.rename the file name to myinformation.txt.

// const fs=require('fs')
// fs.rename('minakshi/file.txt','minakshi/myinformation',function(err){
// console.log("rename successfully")})


// WITH ARROW FUNCTION
// 5.rename the file name to myinformation.txt.
// const fs=require('fs')
// fs.rename('minakshi/file.txt','minakshi/myinformation',(err) =>{
// console.log("rename successfully")})
