var firebaseConfig = {
      apiKey: "AIzaSyA1-0iwZ5VuyyWggt3My8CLWKLMuYejvVo",
      authDomain: "kwitter-4ae71.firebaseapp.com",
      databaseURL: "https://kwitter-4ae71-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ae71",
      storageBucket: "kwitter-4ae71.appspot.com",
      messagingSenderId: "136585865926",
      appId: "1:136585865926:web:ed4604cc506f75690d45c7"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

      user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    ({
        purpose : "adding room name" 
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";      
}

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}

getData();
 
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
