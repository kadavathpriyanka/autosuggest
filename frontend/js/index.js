
var users=[
      {
        "name" : "JOHN LEAN",
        "gender" : "male",
        "image" : "/images/john.png"
      },
      {
        "name" : "PRIYANKA",
        "gender" : "female",
        "image" : "/images/jane.png"
      },
      {
         "name" : "MOUNIKA",
        "gender" : "female",
        "image" : "/images/woman.png"
      }
    ]
var curId=0;
function toggle(){
        //toggle cuid from 0->1 & 1->0
        curId= (curId+1)%users.length;
        
        var user=users[curId];
        //toggle the rendered user details
        document.getElementById("user-img").src=user.image;

        //update for name and gender
        document.getElementById("username").innerText=user.name;

        document.getElementById("usergender").innerText=user.gender;

}