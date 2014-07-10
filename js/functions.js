(function () {

    'use strict';

    window.bodyMassIndexRange = function (bodyMassIndex) {
        switch (true) {
        case (bodyMassIndex < 18.5):
            return 1;
        case (bodyMassIndex >= 18.5 && bodyMassIndex < 25):
            return 2;
        case (bodyMassIndex >= 25 && bodyMassIndex < 30):
            return 3;
        case (bodyMassIndex >= 30 && bodyMassIndex < 40):
            return 4;
        case (bodyMassIndex >= 40):
            return 5;
        }
    };

    window.dateToJSON = function (date) {
        /* Si es una fecha de verdad, la parseamos para devolver un string en formato yyyy-mm-dd */
        return (isDate(date)) ? JSON.stringify(date).replace('"', '').split('T')[0] : null;
    };

    window.isArray = function (array) {
        return Object.prototype.toString.call(array) === '[object Array]';
    };

    window.isDate = function (date) {
        return Object.prototype.toString.call(date) === '[object Date]';
    };

    window.isNullOrUndefined = function (nullOrUndefined) {
        return Object.prototype.toString.call(nullOrUndefined) === '[object Null]' || Object.prototype.toString.call(nullOrUndefined) === '[object Undefined]';
    };

    window.isNumber = function (number) {
        return Object.prototype.toString.call(number) === '[object Number]';
    };

    window.isString = function (string) {
        return Object.prototype.toString.call(string) === '[object String]';
    };

    window.JSONtoDate = function (JSONdate) {
        /* Devolvemos una nueva fecha a partir de la que nos pasen */
        return (isString(JSONdate) && new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(JSONdate)) ? new Date(JSONdate) : null;
    };

    window.JSONtoNumber = function (JSONnumber) {
        return (isString(JSONnumber)) ? round(JSONnumber) : null;
    };

    window.numberToJSON = function (number) {
        return (isNumber(number)) ? JSON.stringify(number) : null;
    };

    window.round = function (number) {
        return Math.round(number * 100) / 100;
    };
})();