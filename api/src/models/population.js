const mongoose = require("mongoose"),
    Schema = mongoose.Schema;


let PopulationSchema = new Schema({
    name: {
        type: Object
    },
    tld: {
        type: Array
    },
    independent: {
        type: Boolean
    },
    status: {
        type: Boolean
    },
    unMember: {
        type: Boolean
    },
    currencies: {
        type: Object
    },
    idd: {
        type: Object
    },
    capital: {
        type: Array
    },
    altSpellings: {
        type: Array
    },
    region:{
        type:String
    },
    subregion:{
        type:String
    },
    languages: {
        type: Object
    },
    translations : {
        type: Object
    },
    latlng:{
        type: Array
    },
    landlocked:{
        type: Boolean
    },
    demonyms : {
        type: Object
    },
    flag :{
        type:String
    },
    maps : {
        type: Object
    },
    population : {
        type: Number
    },
    fifa :{
        type:String
    },
    car : {
        type: Object
    },
    timezones :{
        type: Array
    },
    continents :{
        type: Array
    },
    flags :  {
        type: Object
    },
    coatOfArms : {
        type: Object
    },
    startOfWeek : {
        type:String
    },
    capitalInfo : {
        type: Object
    }     
})


module.exports = mongoose.model("Country_population", PopulationSchema,'country_population');