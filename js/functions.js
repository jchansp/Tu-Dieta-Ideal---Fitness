(function () {

    'use strict';

    /**
     * bodyMassIndex
     * @weight number
     * @height number
     * returns number
     */
    window.bodyMassIndex = function (weight, height) {
        if (weight && height) return round(weight / Math.pow(height, 2));
    };

    /**
     * bodyMassIndexRange
     * @bodyMassIndex number
     * returns string ( underweight | normal | overweight | obese | morbid )
     */
    window.bodyMassIndexRange = function (bodyMassIndex) {
        switch (true) {
        case (bodyMassIndex < 18.5):
            return 'underweight';
        case (bodyMassIndex >= 18.5 && bodyMassIndex < 25):
            return 'normal';
        case (bodyMassIndex >= 25 && bodyMassIndex < 30):
            return 'overweight';
        case (bodyMassIndex >= 30 && bodyMassIndex < 40):
            return 'obese';
        case (bodyMassIndex >= 40):
            return 'morbid';
        }
    };

    /**
     * dateToJSON
     * @date Date
     * returns string (yyyy-mm-dd)
     */
    window.dateToJSON = function (date) {
        /* Si es una fecha de verdad, la parseamos para devolver un string en formato yyyy-mm-dd */
        if (isDate(date))
            return JSON.stringify(dateToString(date));
    };

    window.dateToString = function (date) {
        if (isDate(date))
            return date.toISOString().replace('"', '').split('T')[0];
    };

    /**
     * isArray
     * @array Object
     * returns boolean
     */
    window.isArray = function (array) {
        return Object.prototype.toString.call(array) === '[object Array]';
    };

    /**
     * isDate
     * @date Object
     * returns boolean
     */
    window.isDate = function (date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    };

    /**
     * isNullOrUndefined
     * @nullOrUndefined Object
     * returns boolean
     */
    window.isNullOrUndefined = function (nullOrUndefined) {
        return Object.prototype.toString.call(nullOrUndefined) === '[object Null]' || Object.prototype.toString.call(nullOrUndefined) === '[object Undefined]';
    };

    /**
     * isNumber
     * @number Object
     * returns boolean
     */
    window.isNumber = function (number) {
        return Object.prototype.toString.call(number) === '[object Number]';
    };

    /**
     * isString
     * @number Object
     * returns boolean
     */
    window.isString = function (string) {
        return Object.prototype.toString.call(string) === '[object String]';
    };

    /**
     * newId
     * returns number
     */
    window.newId = function () {
        return (new Date()).getTime();
    };

    /**
     * JSONtoDate
     * @JSONdate string (yyyy-mm-aa)
     * returns Date
     */
    window.JSONtoDate = function (JSONdate) {
        /* Devolvemos una nueva fecha a partir de la que nos pasen */
        return (isString(JSONdate) && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(JSONdate)) ? new Date(JSONdate) : null;
    };

    window.JSONtoNumber = function (JSONnumber) {
        return (isString(JSONnumber)) ? round(JSONnumber) : null;
    };

    window.numberToJSON = function (number) {
        return JSON.stringify(number);
    };

    window.retrieve = function (key) {
        var value = window.localStorage.getItem(key);
        if (isNumber(JSONtoNumber(value))) value = round(value);
        else if (isDate(JSONtoDate(value))) value = value;
        return value;
    };

    window.round = function (number) {
        return Math.round(number * 100) / 100;
    };

    window.store = function (key, value) {
        if (isDate(value))
            window.localStorage.setItem(key, dateToString(value));
        else if (isArray(value))
            window.localStorage.setItem(key, JSON.stringify(value));
        else
            window.localStorage.setItem(key, value);
    };

    window.stringToDate = function (stringDate) {
        if (isString(stringDate) && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(stringDate))
            return new Date(stringDate);
    };

    window.stringToNumber = function (stringNumber) {
        if (isString(stringNumber) && !isNaN(parseFloat(stringNumber)))
            return round(stringNumber);
    };
})();