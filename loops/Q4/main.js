var myobject = {
    BHK4: "3cr",
    Mansion: "40cr",
    Banglow: "14CR"
};
for (var key in myobject) {
    if (myobject.hasOwnProperty(key)) {
        console.log("Property Name: ".concat(key, ", Property Value: ").concat(myobject[key]));
    }
}
