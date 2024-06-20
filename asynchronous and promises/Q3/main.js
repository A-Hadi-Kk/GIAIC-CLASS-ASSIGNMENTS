function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
var p = fetchData();
p.then(function (res) {
    console.log(res);
});
