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
//YOUR FIREBASE LINKS
function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
                              console.log(firebase_message_id);
                              console.log(message_data);
                              name = message_data['name']; 
                              message = message_data['message'];
                              like = message_data['like'];
                              name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                              message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
                              span_with_tag =   "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button><hr>";

                        row = name_with_tag + message_with_tag +like_button+span_with_tag;
                        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update
    ({
        like : updated_likes
    });
}