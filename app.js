// Firebase starts here 
// --------------------------
var firebaseConfig = {
    apiKey: "AIzaSyASPKr8c-69uXTmMcDSEfykNK6QWb4vhis", //
    authDomain: "hr-portal-7803a.firebaseapp.com",
    databaseURL: "https://train-scheduler-4f283.firebaseio.com/",//
    projectId: "hr-portal-7803a",
    storageBucket: "gs://train-scheduler-4f283.appspot.com",//
    messagingSenderId: "296460954555",
    appId: "1:296460954555:web:78146d549858b76c83f29e",
    measurementId: "G-P2FBQ01HFM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ---------------------
var database = firebase.database();
//----------------------
//Code Starts Here:
$(document).ready(function () {
    var name, dest, time, rate, now;

    setInterval(function () {
        $(".now").text(moment(now).format('h:mm:ss a'));
    }, 100);


    $("#submit").on("click", function () {

        event.preventDefault();

        name = $("#name").val().trim();
        dest = $("#dest").val().trim();
        time = $("#time").val().trim();
        rate = $("#rate").val().trim();


    var first = moment(time, "HH:mm");
    var current = moment();

    var arrival = current.diff(first, 'minutes');
    var minuteLast = arrival % rate;
    var next = rate - minuteLast;

    var arrival = current.add(next, 'minutes');
    var arrivaltime = arrival.format("HH:mm");

var array=[name,dest,rate,arrivaltime,next];

    var row = $("<tr>")
        for (var i = 0; i < array.length; i++) {
            var data = $("<td>");
            $(data).text(array[i]);
            $(row).append(data);
        }
        $(".table").append(row);
    });
});



//----------------------
// Firebase watcher + initial loader:
// database.ref().on("value", function (snapshot) {
//     //changing the html to reflect the data c hange in the DB
//     $("#").text(snapshot.val().name); //change
//     $("#").text(snapshot.val().role); //change
//     $("#").text(snapshot.val().date); //change
//     $("#").text(snapshot.val().rate); //change
// });