const FetchPromise = ()=>{
    return fetch('data.json')
}
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
const ReturnPromises = ()=>{
    return new Promise ((resolve, reject)=>{
        // resolve({"check":"working", "not_check": "not working"})
        reject(400)
    })
}
// ReturnPromises().then((data)=>{
//     console.log(data.check)
// })
const awaitFunction = async()=>{
    try {
        const log_instance = await ReturnPromises()    
    } catch (error) {
        console.log(error)        
        }
    }
    
// awaitFunction()