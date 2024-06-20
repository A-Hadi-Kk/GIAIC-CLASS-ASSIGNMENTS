function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully! ...");
        }, 1000);
    });
}
function processData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Data process failed! ...");
        }, 2000);
    });
}
function executeSequentially(fetchDataCallback, processDataCallback) {
    fetchDataCallback().then(function (res) {
        console.log(res);
        return processDataCallback();
    }).catch(function (rej) {
        console.log(rej);
    });
}
executeSequentially(fetchData, processData);
