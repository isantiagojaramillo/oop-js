// const company = {
//     name: "Stark Industries",
//     empleyees: [],
//     sortEmployees: function() {}
// }

function Company(name) {
    let employees = []
    this.name =  name

    this.getEmployees = function() {
        return employees;
    }

    this.addEmployees = function(employee) {
        employees.push(employee);
    }
}

const company = new Company('Oscorp');
const company2 = new Company('Daily Planet');

console.log(company);
console.log(company2);

company.addEmployees({name: 'Spider Man'});
company2.addEmployees({name: 'Clark Kent'});

console.log(company.getEmployees());
console.log(company2.getEmployees());
