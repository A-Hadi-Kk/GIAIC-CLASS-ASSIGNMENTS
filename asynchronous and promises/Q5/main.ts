function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Data fetched successfully! ...")
        },1000)
    })
}
function processData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Data process failed! ...")
        },2000)
    })
}
function executeSequentially(fetchDataCallback:any, processDataCallback:any){
    fetchDataCallback().then((res:string)=>{
         console.log(res)  
         return processDataCallback()
        }) .catch((rej:string)=>{
            console.log(rej)
           
        })
    }
    executeSequentially(fetchData, processData)