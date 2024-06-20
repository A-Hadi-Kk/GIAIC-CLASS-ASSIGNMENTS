function fetchWithError(){
    return new Promise ((resolve, reject) => {
     
        setTimeout(()=>{
            let Resolve = true; 
             if(Resolve){
                resolve("Data fetched successfully!")
            }
        else{
            reject("Data fetch failed!")
        }
        },1000)
    })
    }
    let p = fetchWithError();
    p.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });