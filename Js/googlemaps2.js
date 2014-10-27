$(document).ready(function() {


var panorama;

var sv = new google.maps.StreetViewService();


    function initialize() {

          //Marker Positons
          var Pos1 = new google.maps.LatLng(-41.29402304,174.77763981);
          var Pos2 = new google.maps.LatLng(-41.29633246,174.77785707);
          var Pos3 = new google.maps.LatLng(-41.29447848,174.77358699);
          var Pos4 = new google.maps.LatLng(-41.29364216,174.77543503);
          var Pos5 = new google.maps.LatLng(-41.29142737,174.77732062);
          var Pos6 = new google.maps.LatLng(-41.29754557,174.77646768);
          var Pos7 = new google.maps.LatLng(-41.29324314,174.78082091);
          var Pos8 = new google.maps.LatLng(-41.29370463,174.78109449);


          var WSYMarker = 'Imagery/WSYMarker3.png';

           panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'))
     
        var mapOptions = {
          center: { lat: -41.2934628, lng: 174.77618337},
          disableDefaultUI: true,
          zoom: 15,
           disableDoubleClickZoom: true,
            scrollwheel: false,
            streetViewControl: false,
           // mapTypeId: 'satellite'
        };



        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


//*** Info Window Variabe ***//

  var  infobox1 = new InfoBox({
         content: document.getElementById("infobox1"),
         // disableAutoPan: false,
         // maxWidth: 400,
         pixelOffset: new google.maps.Size(-251, -317),
         zIndex: null,
        //  boxStyle: {
        //     // background: "url('Imagery/tipbox.png') no-repeat",
        //     opacity: 1,
        //     width: "280px"
        // },
        closeBoxMargin: "12px 2px 2px 2px",

        closeBoxURL: "Imagery/closebutton2.png",
        infoBoxClearance: new google.maps.Size(0.1, 0.1)
    });

   var  infobox2 = new InfoBox({
         content: document.getElementById("infobox2"),
         // disableAutoPan: false,
         // maxWidth: 400,
         pixelOffset: new google.maps.Size(-251, -317),
         zIndex: null,
         boxStyle: {
            background: "url('Imagery/tipbox.png') no-repeat",
            opacity: 1,
            width: "280px"
        },
        closeBoxMargin: "12px -220px 2px 2px",

        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
        infoBoxClearance: new google.maps.Size(1, 1)
    });
    




//*** Markers Var **///


 var marker1 = new google.maps.Marker({
      position: Pos1,
      map: map,
      icon: WSYMarker
  });

var marker2 = new google.maps.Marker({
      position: Pos2,
      map: map,
      icon: WSYMarker
  });

var marker3 = new google.maps.Marker({
      position: Pos3,
      map: map,
      icon: WSYMarker
  });


var marker4 = new google.maps.Marker({
      position: Pos4,
      map: map,
      icon: WSYMarker
  });
var marker5 = new google.maps.Marker({
      position: Pos5,
      map: map,
      icon: WSYMarker
  });
var marker6 = new google.maps.Marker({
      position: Pos6,
      map: map,
      icon: WSYMarker
  });
var marker7 = new google.maps.Marker({
      position: Pos7,
      map: map,
      icon: WSYMarker
  });
var marker8 = new google.maps.Marker({
      position: Pos8,
      map: map,
      icon: WSYMarker
  });


//*** Listener for InfoWindow ***//


 google.maps.event.addListener(marker1, 'click', function() {
        infobox1.open(map, this);
        map.panTo(Pos1);
    });

 google.maps.event.addListener(marker2, 'click', function() {
        infobox2.open(map, this);
        map.panTo(Pos2);
    });


    google.maps.event.addListener(map,'click', function (event) {
      sv.getPanoramaByLocation(event.latLng, 50, processSVData);
      });
      }

function processSVData(data, status) {
  if (status == google.maps.StreetViewStatus.OK) {
    var marker = new google.maps.Marker({
      position: data.location.latLng,
      map: map,
      title: data.location.description
    });

    panorama.setPano(data.location.pano);
    panorama.setPov({
      heading: 270,
      pitch: 0
    });
    panorama.setVisible(true);

    google.maps.event.addListener(marker, 'click', function() {

      var markerPanoID = data.location.pano;
      // Set the Pano to use the passed panoID
      panorama.setPano(markerPanoID);
      panorama.setPov({
        heading: 270,
        pitch: 0
      });
      panorama.setVisible(true);
    });
  } else {
    alert('Street View data not found for this location.');
  }
}



   

google.maps.event.addDomListener(window, 'load', initialize); //last

