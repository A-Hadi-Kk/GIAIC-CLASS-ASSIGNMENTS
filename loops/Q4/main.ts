const myobject: { [key: string]: string } = {
    BHK4: "3cr",
    Mansion: "40cr",
    Banglow: "14CR"
};
for (const key in myobject) {
    if (myobject.hasOwnProperty(key)) { 
        console.log(`Property Name: ${key}, Property Value: ${myobject[key]}`);
    }
}
