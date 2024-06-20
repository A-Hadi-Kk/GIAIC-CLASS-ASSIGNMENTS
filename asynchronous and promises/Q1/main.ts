async function fetchGreeting (){
    return new Promise((resolve) => {
        setTimeout (()=>{
    resolve("Hope u r doing well! ...");
        },2000)
    });
    }
     let p = fetchGreeting()
     p.then((res)=>{
        console.log(res)
     })