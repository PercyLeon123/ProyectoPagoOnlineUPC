//function initializeMap() {
//    var map = new google.maps.Map(document.getElementById('map'), {
//        center: {lat: -12.0431800, lng: -77.0282400},
//        zoom: 13,
//        mapTypeId: google.maps.MapTypeId.HYBRID
//    });
//
//    var trafficLayer = new google.maps.TrafficLayer();
//    trafficLayer.setMap(map);
//}
var map = null;
var points = [];
var vehicles = [];

function initialLoad() {
    // iniciamos el mapa
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLng(-12.0431800, -77.0282400),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    // cargamos la capa de tráfico
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);

    google.maps.event.addListener(map, 'click', function (event) {
        var loc = event.latLng;

        if ($('#points').css('display') === 'block') {
            //pointsAdd(loc.lat(), loc.lng());
        }
    });

    google.maps.event.addListener(map, 'bounds_changed', function () {
        if ($('#points').css('display') === 'block') {
            //pointsUpdateVisiblePoints();
        }
    });

    //points = data.points;
    //createVehicles(data.vehicles);
    //post('','',);
    //zoomToAll();
}

function createVehicles(vs) {
    var $tbody = $('#vehicles > tbody');
    var $map = $('#map');

    $tbody.empty();
    $.each(vs, function () {
        vehicles.push(new vehicle(this, $tbody, $map));
    });

//    initialiseGroups();
//    setupScrolling();
//    selectFirstVisibleGridRow();
}

function zoomToAll() {
    var bounds = new google.maps.LatLngBounds();

    $.each(vehicles, function () {
        bounds.extend(latLng(this.lat, this.lon));
    });

    map.fitBounds(bounds);
}

function latLng(lat, lng) {
    return new google.maps.LatLng(lat, lng);
}

function pointsAdd(lat, lon) {
    var point = {
        id: -1,
        point_name: 'New point',
        point_group: 'Points',
        lat: lat,
        lon: lon,
        radius: 50,
        enter_address: '',
        exit_address: ''
    };

//    post(
//        'add_point.php',
//        'Adding custom point',
//        $.param({
//            tab_id: tab_id,
//            lat: lat,
//            lon: lon,
//            name: point.point_name,
//            group: point.point_group,
//            radius: point.radius
//        }),
//        function(data) {
//            point.id = data.id;
//            pointsSelect(point);
//            $('#points-name').focus();
//            pointsCreateTree(data.points);
//        }
//    );
}

// función para traer datos ajax
function post(url, description, params, success, userError) {
    var error = typeof userError != 'undefined'
        ? userError
        : function(x) {
            updatePending = false;
            alert(x);
        };

    if (description != '') {
        $('#msj').text(description).parent('.x_title').show();
    }

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        data: params,
        timeout: 60000,
        error: ajaxError,
        success: function(data) {
            updatePending = false;
            $('#msj').parent('.x_title').hide();
            data.success ? success(data.result) : error(data.error);
        }
    });
}