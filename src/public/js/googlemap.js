function iniciarMap(){
    var coord = {lat:-21.876941,lng:  -63.612782};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}