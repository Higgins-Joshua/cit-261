if(sessionStorage.cars) {
    cars = JSON.parse(sessionStorage.getItem('cars'));
    document.getElementsByClassName('carsBtn')[0].innerHTML = '<button onclick="deleteLocal()" type="button" class="btn primary">Delete Local List</button>';
    generateTable();
}
else {
    cars = [];
}

function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    console.log(result);
    return result;
}

function deleteLocal() {
    sessionStorage.clear();
    cars = [];
    document.getElementsByClassName('carsBtn')[0].innerHTML = "";
    document.getElementsByClassName('carList')[0].innerHTML = "";
}

function generateTable() {
    var retrievedObject = sessionStorage.getItem('cars')
    var jsonObject = JSON.parse(retrievedObject);
    var listOfCars = "";
    for (var i in jsonObject){
        listOfCars += `<tr><td>${jsonObject[i].make}</td><td>${jsonObject[i].model}</td><td>${jsonObject[i].year}</td></tr>`;
    }
    var table = `
        <table style="width:100%">
            <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
            </tr>
            `
            +
            listOfCars
            +
            `
        </table> 
    `;
    document.getElementsByClassName('carList')[0].innerHTML = table;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

document.getElementsByClassName('addCar')[0].onclick = function() {
    var make = document.getElementsByClassName('make')[0].value;
    var model = document.getElementsByClassName('model')[0].value;
    var year = document.getElementsByClassName('year')[0].value;
    
    if (make !== "" && model !== "" && year !== ""){
        var newCar = new Car(make, model, year);

        newCar.car = function () {
            return this.make + " " + this.model + " " + this.year;
        };
    
        cars.push(newCar);
    
        sessionStorage.setItem('cars', JSON.stringify(cars));

        document.getElementsByClassName('carsBtn')[0].innerHTML = '<button onclick="deleteLocal()" type="button" class="btn primary">Delete Local List</button>';

        generateTable();
    }

    var retrievedObject = sessionStorage.getItem('cars')
    console.log(JSON.parse(retrievedObject));
}