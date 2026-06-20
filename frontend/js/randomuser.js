function randomuser(){
    fetch("https://randomuser.me/api/")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user=data.results[0];
        var fullName=user.name.title+" "+user.name.first+" "+user.name.last

        document.getElementById("user-img").src=user.picture.large;

        //update for name and gender
        document.getElementById("username").innerText=fullName;

        document.getElementById("usergender").innerText=user.gender;
    })
    .catch(function(err){
        console.log("Error:"+err);
    })
}