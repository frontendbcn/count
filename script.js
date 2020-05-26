// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDehzIpE_E0tC2I98cbMI78rQhjf_lxpKU",
  authDomain: "conteo-92e34.firebaseapp.com",
  databaseURL: "https://conteo-92e34.firebaseio.com",
  projectId: "conteo-92e34",
  storageBucket: "conteo-92e34.appspot.com",
  messagingSenderId: "693305890138",
  appId: "1:693305890138:web:169ecf3ac609e4fe720f63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});

var rootRef = database.ref('/');

rootRef.once('value', function(snapshot){
  console.log(snapshot.val());
});

function pushData(){
  var data = document.getElementById("hueco3z").value;
  var dataRef = database.ref('/pushData').push();
  dataRef.set({
    value: data
  });
}

function setData(){
  var data = document.getElementById("hueco3z").value;
  var dataRef = database.ref('/setData');
  console.log(data)
  dataRef.set({
    value: data
  });
}

setDataRef = database.ref("/setData");
setDataRef.on('child_changed', function(snapshot) {
  console.log("Below is the data from child_changed");
  console.log(snapshot.val());
});

pushDataRef = database.ref("/pushData");
pushDataRef.on("child_added", function(snapshot){
  console.log("Below is the data from child_added");
  console.log(snapshot.val());
});

database.ref('/pushData').once('value', function(snapshot){
  snapshot.forEach(function(data){
    console.log("Below are the child keys of the values in 'pushData'")
    console.log(data.key);
  });
  console.log(Object.keys(snapshot.val()));
});