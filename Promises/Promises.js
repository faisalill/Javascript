const FetchPromise = ()=>{
    return fetch('data.json')
}
const promise = FetchPromise()
.then(()=>{
    console.log("it worked")
})
.catch(()=>{
    console.log("Error")
})
.then(()=>{
    console.log("Line after the first catch ")
})