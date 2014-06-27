(function () {

    'use strict';

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

    window.round = function (number) {
        return Math.round(number * 100) / 100;
    };
})();