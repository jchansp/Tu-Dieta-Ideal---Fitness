(function () {
    'use strict';
    window.User = {
        //    get physicalActivity() {
        //        var physicalActivity = JSON.parse(window.localStorage.getItem('physicalActivity'));
        //        if (!physicalActivity) throw new ReferenceError('window.localStorage.getItem(\'physicalActivity\') not initialized');
        //        if (!isInteger(physicalActivity)) throw new TypeError('window.localStorage.getItem(\'physicalActivity\') not integer');
        //        return physicalActivity;
        //    },
        /**
         * @height number
         */
        set physicalActivity(physicalActivity) {
            if (isNumber(physicalActivity))
                store('physicalActivity', physicalActivity);
        },
        //        /**
        //         * returns number
        //         */
        //        get height() {
        //            if (this.User && this.User.height) return JSONtoNumber(this.User.height);
        //        },
        /**
         * @height number
         */
        set height(height) {
            if (isNumber(height))
                store('height', height);
        },
        //    /**
        //     * Hombres: (10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) + 5
        //     * Mujeres: (10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) - 161
        //     * returns number
        //     */
        //    get dailyCaloricNeeds() {
        //        var calorias;
        //        switch (this.physicalActivity) {
        //        case 1: // Poco o ningún ejercicio
        //            calorias = this.TMB * 1.2;
        //            break;
        //        case 2: // Ejercicio ligero (1-3 días a la week)
        //            calorias = this.TMB * 1.375;
        //            break;
        //        case 3: // Ejercicio moderado (3-5 días a la week)
        //            calorias = this.TMB * 1.55;
        //            break;
        //        case 4: // Ejercicio fuerte (6-7 días a la week)
        //            calorias = this.TMB * 1.725;
        //            break;
        //        case 5: // Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)
        //            calorias = this.TMB * 1.9;
        //            break;
        //        }
        //        return calorias;
        //    },
        //    /**
        //     * returns number
        //     */
        //    get age() {
        //        var ahora = new Date();
        //        return Math.floor((ahora.getTime() - this.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
        //    },
        /**
         * returns Date
         */
        get initialDate() {
            return retrieve('initialDate');
        },
        //        /**
        //         * @initialDate Date
        //         */
        //        set initialDate(initialDate) {
        //            if (isDate(initialDate))
        //                store('initialDate', initialDate);
        //        },
        //    /**
        //     * returns Date
        //     */
        //    get dateOfBirth() {
        //        var dateOfBirth = JSON.parse(window.localStorage.getItem('dateOfBirth'));
        //        if (!dateOfBirth) throw new ReferenceError('window.localStorage.getItem(\'dateOfBirth\') not initialized');
        //        dateOfBirth = new Date(dateOfBirth);
        //        dateOfBirth.setHours(0, 0, 0);
        //        console.log(dateOfBirth);
        //        if (!isDate(dateOfBirth)) throw new TypeError('window.localStorage.getItem(\'dateOfBirth\') not Date');
        //        return dateOfBirth;
        //    },
        /**
         * @dateOfBirth Date
         */
        set dateOfBirth(dateOfBirth) {
            if (isDate(dateOfBirth))
                store('dateOfBirth', dateOfBirth);
        },
        //    /**
        //     * returns number
        //     */
        //    get bodyMassIndex() {
        //        return this.weight / Math.pow(this.height, 2);
        //    },
        //    /**
        //     * returns number
        //     */
        //    get month() {
        //        return this.months[this.months.length - 1];
        //    },
        //    /**
        //     * returns number
        //     */
        //    get months() {
        //        var months = [];
        //        this.weeks.forEach(function (week, index) {
        //            if (index % 4 == 0)
        //                months.push(week);
        //        });
        //        return months;
        //    },
        //    /**
        //     * returns string
        //     */
        //    get name() {
        //        var name = JSON.parse(window.localStorage.getItem('name'));
        //        if (!name) throw new ReferenceError('window.localStorage.getItem(\'name\') not initialized');
        //        if (!isString(name)) throw new TypeError('window.localStorage.getItem(\'name\') not String');
        //        return name;
        //    },
        /**
         * @name string
         */
        set name(name) {
            if (isString(name))
                store('name', name);
        },
        //    /**
        //     * returns number
        //     */
        //    get weight() {
        //        var weight;
        //        var i = this.weights.length;
        //        while (!weight && i--)
        //            weight = this.weights[i];
        //        return weight;
        //    },
        //    /**
        //     * @weight number
        //     */
        //    set weight(weight) {
        //        if (!weight) throw new ReferenceError('weight not initialized');
        //        if (!isInteger(weight)) throw new TypeError('weight not integer');
        //        var weights = this.weights;
        //        if (weights && this.weeks)
        //            if (weights[this.weeks.length - 1] != weight) {
        //                weights[this.weeks.length - 1] = weight;
        //                this.weights = weights;
        //            };
        //    },
        //    /**
        //     * returns [number]
        //     */
        //    get idealWeight() {
        //        return 21.75 * Math.pow(this.height, 2);
        //    },
        //    /**
        //     * returns number
        //     */
        //    get lastMonthsMaximumWeight() {
        //        var lastMonthsMaximumWeight = 0;
        //        var weights = this.weights.splice(this.weights.length - 4, this.weights.length - 1);
        //        for (var i = 0; i < weights.length; i++)
        //            if (weights[i] > lastMonthsMaximumWeight)
        //                lastMonthsMaximumWeight = weights[i];
        //        return lastMonthsMaximumWeight;
        //    },
        //    /**
        //     * returns number
        //     */
        //    get lastMonthsMinimumWeight() {
        //        var lastMonthsMinimumWeight = 1000;
        //        var weights = this.weights.splice(this.weights.length - 4, this.weights.length - 1);
        //        for (var i = 0; i < weights.length; i++)
        //            if (weights[i] < lastMonthsMinimumWeight)
        //                lastMonthsMinimumWeight = weights[i];
        //        return lastMonthsMinimumWeight;
        //    },
        //    /**
        //     * returns number
        //     */
        //    get targetWeight() {
        //        var targetWeight;
        //        var i = this.targetWeights.length;
        //        while (!targetWeight && i--)
        //            targetWeight = this.targetWeights[i];
        //        return targetWeight;
        //    },
        //    /**
        //     * @targetWeight number
        //     */
        //    set targetWeight(targetWeight) {
        //        if (!targetWeight) throw new ReferenceError('targetWeight not initialized');
        //        if (!isInteger(targetWeight)) throw new TypeError('targetWeight not integer');
        //        var targetWeights = this.targetWeights;
        //        if (targetWeights && this.months)
        //            if (targetWeights[this.months.length - 1] != targetWeight) {
        //                targetWeights[this.months.length - 1] = targetWeight;
        //                this.targetWeights = targetWeights;
        //            };
        //    },
        //    /**
        //     * returns [number]
        //     */
        //    get weights() {
        //        var weights = JSON.parse(window.localStorage.getItem('weights'));
        //        if (!weights) throw new ReferenceError('window.localStorage.getItem(\'weights\') not initialized');
        //        if (!isIntegerArray(weights)) throw new TypeError('window.localStorage.getItem(\'weights\') not Array');
        //        weights.forEach(function (weight, i) {
        //            if (!weight)
        //                weights[i] = weights[i - 1];
        //        });
        //        return weights;
        //    },
        /**
         * @weights [{id : number, date : Date, weight : number}]
         */
        set weights(weights) {
            if (isArray(weights))
                if (isNumber(weights.id) && isDate(weights.date) && isNumber(weights.weight))
                    store('weights', weights);
        },
        //    /**
        //     * returns [number]
        //     */
        //    get targetWeights() {
        //        var targetWeights = JSON.parse(window.localStorage.getItem('targetWeights'));
        //        if (!targetWeights) throw new ReferenceError('window.localStorage.getItem(\'targetWeights\') not initialized');
        //        if (!isIntegerArray(targetWeights)) throw new TypeError('window.localStorage.getItem(\'targetWeights\') not Array');
        //        return targetWeights;
        //    },
        //    /**
        //     * @targetWeights [number]
        //     */
        //    set targetWeights(targetWeights) {
        //        if (!targetWeights) throw new ReferenceError('targetWeights not initialized');
        //        if (!isIntegerArray(targetWeights)) throw new TypeError('targetWeights not integer');
        //        if (this.months) {
        //            for (var i = 0; i < targetWeights.length; i++) {
        //                var j = i;
        //                if (j != this.months.length - 1)
        //                    while (!targetWeights[j])
        //                        j--;
        //                targetWeights[i] = targetWeights[j];
        //            }
        //            window.localStorage.setItem('targetWeights', JSON.stringify(targetWeights));
        //        }
        //    },
        //    /**
        //     * returns number
        //     */
        //    get week() {
        //        return this.weeks[this.weeks.length - 1];
        //    },
        //    /**
        //     * returns [Date]
        //     */
        //    get weeks() {
        //        var weeks = [];
        //        var date = new Date(+this.initialDate);
        //        console.log(date);
        //        for (var i = 0; i <= Math.ceil((((new Date() - this.initialDate) / 86400000) + 1) / 7) - 1; i++) {
        //            weeks.push(new Date(+date));
        //            date.setDate(date.getDate() + 7);
        //        }
        //        return weeks;
        //    },
        //    /**
        //     * returns boolean
        //     */
        //    get seHaPesadoEstaSemana() {
        //        return this.weights[this.weeks.length - 1] != null;
        //    },
        //    /**
        //     * returns string
        //     */
        //    get sex() {
        //        var sex = JSON.parse(window.localStorage.getItem('sex'));
        //        if (!sex) throw new ReferenceError('window.localStorage.getItem(\'sex\') not initialized');
        //        if (!isString(sex)) throw new TypeError('window.localStorage.getItem(\'sex\') not String');
        //        return sex;
        //    },
        /**
         * @sex string
         */
        set sex(sex) {
            if (isString(sex))
                store('sex', sex);
        },
        //    /**
        //     * returns number
        //     */
        //    get TMB() {
        //        return (10 * this.weight) + (6.25 * this.height * 100) - (5 * this.age) + ((this.sex === 'Masculino') ? 5 : -161);
        //    }
    };
})();

//'use strict';
//
//function isFloat(n) {
//    return n === +n && n !== (n | 0);
//}
//
//function isInteger(n) {
//    return n === +n && n === (n | 0);
//}
//
//function isArray(n) {
//    return Object.prototype.toString.call(n) === '[object Array]';
//}
//
//function isString(n) {
//    return Object.prototype.toString.call(n) === '[object String]';
//}
//
//function isNull(n) {
//    return Object.prototype.toString.call(n) === '[object Null]';
//}
//
//function isDate(n) {
//    return Object.prototype.toString.call(n) === '[object Date]';
//}
//
//function isIntegerArray(n) {
//    if (isArray(n)) {
//        for (var i = 0; i < n.length; i++) {
//            if (!(isInteger(n[i]) || !n[i]))
//                return false;
//        }
//        return true;
//    } else
//        return false;
//}
//
//var User = {
//    /**
//     * returns number
//     */
//    get physicalActivity() {
//        var physicalActivity = JSON.parse(window.localStorage.getItem('physicalActivity'));
//        if (!physicalActivity) throw new ReferenceError('window.localStorage.getItem(\'physicalActivity\') not initialized');
//        if (!isInteger(physicalActivity)) throw new TypeError('window.localStorage.getItem(\'physicalActivity\') not integer');
//        return physicalActivity;
//    },
//    /**
//     * @height number
//     */
//    set physicalActivity(physicalActivity) {
//        if (!physicalActivity) throw new ReferenceError('physicalActivity not initialized');
//        if (!isInteger(physicalActivity)) throw new TypeError('physicalActivity not integer');
//        window.localStorage.setItem('physicalActivity', JSON.stringify(physicalActivity));
//    },
//    /**
//     * returns number
//     */
//    get height() {
//        var height = JSON.parse(window.localStorage.getItem('height'));
//        if (!height) throw new ReferenceError('window.localStorage.getItem(\'height\') not initialized');
//        if (!isFloat(height) && !isInteger(height)) throw new TypeError('window.localStorage.getItem(\'height\') not float or integer');
//        return height;
//    },
//    /**
//     * @height number
//     */
//    set height(height) {
//        if (!height) throw new ReferenceError('height not initialized');
//        if (!isFloat(height) && !isInteger(height)) throw new TypeError('height not integer');
//        window.localStorage.setItem('height', JSON.stringify(height));
//    },
//    /**
//     * Hombres: (10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) + 5
//     * Mujeres: (10 x weight en kg) + (6,25 × height en cm) - (5 × age en años) - 161
//     * returns number
//     */
//    get dailyCaloricNeeds() {
//        var calorias;
//        switch (this.physicalActivity) {
//        case 1: // Poco o ningún ejercicio
//            calorias = this.TMB * 1.2;
//            break;
//        case 2: // Ejercicio ligero (1-3 días a la week)
//            calorias = this.TMB * 1.375;
//            break;
//        case 3: // Ejercicio moderado (3-5 días a la week)
//            calorias = this.TMB * 1.55;
//            break;
//        case 4: // Ejercicio fuerte (6-7 días a la week)
//            calorias = this.TMB * 1.725;
//            break;
//        case 5: // Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)
//            calorias = this.TMB * 1.9;
//            break;
//        }
//        return calorias;
//    },
//    /**
//     * returns number
//     */
//    get age() {
//        var ahora = new Date();
//        return Math.floor((ahora.getTime() - this.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
//    },
//    /**
//     * returns Date
//     */
//    get initialDate() {
//        var initialDate = JSON.parse(window.localStorage.getItem('initialDate'));
//        if (!initialDate) throw new ReferenceError('window.localStorage.getItem(\'initialDate\') not initialized');
//        initialDate = new Date(initialDate);
//        initialDate.setHours(0, 0, 0);
//        if (!isDate(initialDate)) throw new TypeError('window.localStorage.getItem(\'initialDate\') not Date');
//        return initialDate;
//    },
//    /**
//     * @dateOfBirth Date
//     */
//    set initialDate(initialDate) {
//        if (!initialDate) throw new ReferenceError('initialDate not initialized');
//        initialDate = new Date(initialDate);
//        initialDate.setHours(0, 0, 0);
//        if (!isDate(initialDate)) throw new TypeError('initialDate not Date');
//        window.localStorage.setItem('initialDate', JSON.stringify(initialDate));
//    },
//    /**
//     * returns Date
//     */
//    get dateOfBirth() {
//        var dateOfBirth = JSON.parse(window.localStorage.getItem('dateOfBirth'));
//        if (!dateOfBirth) throw new ReferenceError('window.localStorage.getItem(\'dateOfBirth\') not initialized');
//        dateOfBirth = new Date(dateOfBirth);
//        dateOfBirth.setHours(0, 0, 0);
//        console.log(dateOfBirth);
//        if (!isDate(dateOfBirth)) throw new TypeError('window.localStorage.getItem(\'dateOfBirth\') not Date');
//        return dateOfBirth;
//    },
//    /**
//     * @dateOfBirth Date
//     */
//    set dateOfBirth(dateOfBirth) {
//        if (!dateOfBirth) throw new ReferenceError('dateOfBirth not initialized');
//        dateOfBirth = new Date(dateOfBirth);
//        dateOfBirth.setHours(0, 0, 0);
//        if (!isDate(dateOfBirth)) throw new TypeError('dateOfBirth not Date');
//        window.localStorage.setItem('dateOfBirth', JSON.stringify(dateOfBirth));
//    },
//    /**
//     * returns number
//     */
//    get bodyMassIndex() {
//        return this.weight / Math.pow(this.height, 2);
//    },
//    /**
//     * returns number
//     */
//    get month() {
//        return this.months[this.months.length - 1];
//    },
//    /**
//     * returns number
//     */
//    get months() {
//        var months = [];
//        this.weeks.forEach(function (week, index) {
//            if (index % 4 == 0)
//                months.push(week);
//        });
//        return months;
//    },
//    /**
//     * returns string
//     */
//    get name() {
//        var name = JSON.parse(window.localStorage.getItem('name'));
//        if (!name) throw new ReferenceError('window.localStorage.getItem(\'name\') not initialized');
//        if (!isString(name)) throw new TypeError('window.localStorage.getItem(\'name\') not String');
//        return name;
//    },
//    /**
//     * @name string
//     */
//    set name(name) {
//        if (!name) throw new ReferenceError('name not initialized');
//        if (!isString(name)) throw new TypeError('name not String');
//        window.localStorage.setItem('name', JSON.stringify(name));
//    },
//    /**
//     * returns number
//     */
//    get weight() {
//        var weight;
//        var i = this.weights.length;
//        while (!weight && i--)
//            weight = this.weights[i];
//        return weight;
//    },
//    /**
//     * @weight number
//     */
//    set weight(weight) {
//        if (!weight) throw new ReferenceError('weight not initialized');
//        if (!isInteger(weight)) throw new TypeError('weight not integer');
//        var weights = this.weights;
//        if (weights && this.weeks)
//            if (weights[this.weeks.length - 1] != weight) {
//                weights[this.weeks.length - 1] = weight;
//                this.weights = weights;
//            };
//    },
//    /**
//     * returns [number]
//     */
//    get idealWeight() {
//        return 21.75 * Math.pow(this.height, 2);
//    },
//    /**
//     * returns number
//     */
//    get lastMonthsMaximumWeight() {
//        var lastMonthsMaximumWeight = 0;
//        var weights = this.weights.splice(this.weights.length - 4, this.weights.length - 1);
//        for (var i = 0; i < weights.length; i++)
//            if (weights[i] > lastMonthsMaximumWeight)
//                lastMonthsMaximumWeight = weights[i];
//        return lastMonthsMaximumWeight;
//    },
//    /**
//     * returns number
//     */
//    get lastMonthsMinimumWeight() {
//        var lastMonthsMinimumWeight = 1000;
//        var weights = this.weights.splice(this.weights.length - 4, this.weights.length - 1);
//        for (var i = 0; i < weights.length; i++)
//            if (weights[i] < lastMonthsMinimumWeight)
//                lastMonthsMinimumWeight = weights[i];
//        return lastMonthsMinimumWeight;
//    },
//    /**
//     * returns number
//     */
//    get targetWeight() {
//        var targetWeight;
//        var i = this.targetWeights.length;
//        while (!targetWeight && i--)
//            targetWeight = this.targetWeights[i];
//        return targetWeight;
//    },
//    /**
//     * @targetWeight number
//     */
//    set targetWeight(targetWeight) {
//        if (!targetWeight) throw new ReferenceError('targetWeight not initialized');
//        if (!isInteger(targetWeight)) throw new TypeError('targetWeight not integer');
//        var targetWeights = this.targetWeights;
//        if (targetWeights && this.months)
//            if (targetWeights[this.months.length - 1] != targetWeight) {
//                targetWeights[this.months.length - 1] = targetWeight;
//                this.targetWeights = targetWeights;
//            };
//    },
//    /**
//     * returns [number]
//     */
//    get weights() {
//        var weights = JSON.parse(window.localStorage.getItem('weights'));
//        if (!weights) throw new ReferenceError('window.localStorage.getItem(\'weights\') not initialized');
//        if (!isIntegerArray(weights)) throw new TypeError('window.localStorage.getItem(\'weights\') not Array');
//        weights.forEach(function (weight, i) {
//            if (!weight)
//                weights[i] = weights[i - 1];
//        });
//        return weights;
//    },
//    /**
//     * @weights [number]
//     */
//    set weights(weights) {
//        if (!weights) throw new ReferenceError('weights not initialized');
//        if (!isIntegerArray(weights)) throw new TypeError('weights not integer Array');
//        window.localStorage.setItem('weights', JSON.stringify(weights));
//    },
//    /**
//     * returns [number]
//     */
//    get targetWeights() {
//        var targetWeights = JSON.parse(window.localStorage.getItem('targetWeights'));
//        if (!targetWeights) throw new ReferenceError('window.localStorage.getItem(\'targetWeights\') not initialized');
//        if (!isIntegerArray(targetWeights)) throw new TypeError('window.localStorage.getItem(\'targetWeights\') not Array');
//        return targetWeights;
//    },
//    /**
//     * @targetWeights [number]
//     */
//    set targetWeights(targetWeights) {
//        if (!targetWeights) throw new ReferenceError('targetWeights not initialized');
//        if (!isIntegerArray(targetWeights)) throw new TypeError('targetWeights not integer');
//        if (this.months) {
//            for (var i = 0; i < targetWeights.length; i++) {
//                var j = i;
//                if (j != this.months.length - 1)
//                    while (!targetWeights[j])
//                        j--;
//                targetWeights[i] = targetWeights[j];
//            }
//            window.localStorage.setItem('targetWeights', JSON.stringify(targetWeights));
//        }
//    },
//    /**
//     * returns number
//     */
//    get week() {
//        return this.weeks[this.weeks.length - 1];
//    },
//    /**
//     * returns [Date]
//     */
//    get weeks() {
//        var weeks = [];
//        var date = new Date(+this.initialDate);
//        console.log(date);
//        for (var i = 0; i <= Math.ceil((((new Date() - this.initialDate) / 86400000) + 1) / 7) - 1; i++) {
//            weeks.push(new Date(+date));
//            date.setDate(date.getDate() + 7);
//        }
//        return weeks;
//    },
//    /**
//     * returns boolean
//     */
//    get seHaPesadoEstaSemana() {
//        return this.weights[this.weeks.length - 1] != null;
//    },
//    /**
//     * returns string
//     */
//    get sex() {
//        var sex = JSON.parse(window.localStorage.getItem('sex'));
//        if (!sex) throw new ReferenceError('window.localStorage.getItem(\'sex\') not initialized');
//        if (!isString(sex)) throw new TypeError('window.localStorage.getItem(\'sex\') not String');
//        return sex;
//    },
//    /**
//     * @sex string
//     */
//    set sex(sex) {
//        if (!sex) throw new ReferenceError('sex not initialized');
//        if (!isString(sex)) throw new TypeError('sex not String');
//        window.localStorage.setItem('sex', JSON.stringify(sex));
//    },
//    /**
//     * returns number
//     */
//    get TMB() {
//        return (10 * this.weight) + (6.25 * this.height * 100) - (5 * this.age) + ((this.sex === 'Masculino') ? 5 : -161);
//    }
//}