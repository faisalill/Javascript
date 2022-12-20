// const FetchPromise = ()=>{
//     return fetch('data.json')
// }
// const promise = FetchPromise()
// .then(()=>{
//     console.log("it worked")
// })
// .catch(()=>{
//     console.log("Error")
// })
// .then(()=>{
//     console.log("Line after the first catch ")
// })
const ReturnPromies = ()=>{
    return new Promise ((resolve, reject)=>{
        resolve({"check":"working", "not_check": "not working"})
    })
}
ReturnPromies().then((data)=>{
    console.log(data.not_check)
})