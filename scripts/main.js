(function (window) {
    'use strict'
    var App = window.App;
    var Track = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Track('ncc-1701', new DataStore());
    window.myTruck = myTruck;
})(window);
