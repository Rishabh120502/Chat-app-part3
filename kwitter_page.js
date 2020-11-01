 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAXasngzF5LEwjyCzWhiGFdyRsVcIDT4BU",
    authDomain: "chat-app-project-part1.firebaseapp.com",
    databaseURL: "https://chat-app-project-part1.firebaseio.com",
    projectId: "chat-app-project-part1",
    storageBucket: "chat-app-project-part1.appspot.com",
    messagingSenderId: "661032681032",
    appId: "1:661032681032:web:9f473e451a28f9ac54e27d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send(){
    msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
