function objectToArray(myObject) {
    var returnArray=[];
    for (key in myObject) {
        returnArray.push(myObject[key]);
    }
    return returnArray
}
var country;

country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};
console.log(objectToArray(country))