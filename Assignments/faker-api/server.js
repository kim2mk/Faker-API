const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor(){
        this.password = faker.internet.password(),
        this.email = faker.internet.email(),
        this.phoneNumber = faker.phone.phoneNumberFormat(),
        this.lastName = faker.name.lastName(),
        this.firstName = faker.name.firstName(),
        this._id = faker.datatype.uuid()
    }
}

class Company {
    constructor(){
        this._id = faker.datatype.uuid(),
        this.name = faker.company.companyName(),
        this.address = [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(),faker.address.country()]
    }
}

app.get("/api/users/new", (req, res)=>{
    let newUser = new User()
    res.json({
        results: newUser
    })
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Company()
    res.json({
        results: newCompany
    })
})

app.get("/api/user/company", (req, res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({
        results: {newUser, newCompany}
    })
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );