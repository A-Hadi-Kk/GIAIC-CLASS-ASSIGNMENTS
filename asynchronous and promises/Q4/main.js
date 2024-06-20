function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var Resolve = true;
            if (Resolve) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
var p = fetchWithError();
p.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});
