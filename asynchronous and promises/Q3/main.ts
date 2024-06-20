function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Data fetched successfully!")
        },1000)
    })
}
let p=fetchData()
p.then((res)=>{
    console.log(res)
})