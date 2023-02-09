function initMap() {
    var latlng = {
        lat: 48.88520794099239,
        lng: 2.3053482448301255
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: latlng
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
}