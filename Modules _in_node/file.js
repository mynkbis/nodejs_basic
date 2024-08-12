const fs = require("fs")


// creating a file and adding the data
// its a synchronous call we have created a file in current dir
fs.writeFileSync('./testing.txt', "Hello m testing how to create a file using fs.writeFileSync")

// if we change the content it will overite the file
// now async
fs.writeFile('./testAsync.txt', "hello world", (err)=>{})



// reading a file
// provide the path and provide the encoding
const result= fs.readFileSync("./testing.txt", "utf-8")
// console.log("reading the file", result)


// in case of async the result will not be returned in the variable, we have to use a callback here to et the result as in the second line
// const result1= fs.readFile("./testing.txt", "utf-8")
// console.log("reading the file", result1)

fs.readFile("./testing.txt", "utf-8", (err, result)=>{
    // if(err){
    //     console.log("error:", err)
    // }
    // else {
    //     console.log("result:", result)
    // }
})


//appending the data into the file.

// fs.appendFileSync('./testing.txt', new Date().getDate().toLocaleString() )


//will make a log for tracking the user actions
// fs.appendFile('./testing.txt', "Hey there", (err, result)=>{
//     if(err){
//         console.log("error:", err)
//     }
//     else {
//         console.log("result:", result)
//     } })

fs.appendFileSync('./testing.txt', `\r\n${Date.now()} Hey there\r\n`);