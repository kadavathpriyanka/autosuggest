//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8

var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest";

var searchbar=document.getElementById("search-input");
var searchSuggestions=document.getElementById("search-suggestions");
//this function is called every time the user wants to read a letter
//get the data whata user wants
//use user typed data in query in th API call
//API call
//append to all the search suggestions to div tag in UI
searchbar.addEventListener("input",function(){
    var query=searchbar.value.trim();
     if (query === "") {
        searchSuggestions.innerHTML = "";   // clear suggestions when input is empty
        return;
    }
    fetchSuggestions(query)
})
function fetchSuggestions(query){
        var fullAPI=API_URL + "?q=" + query+ "&weighted=true&algorithm=trie&limit=8";
        fetch(fullAPI)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
               showSuggestions(data);
            //    console.log(data);
               
            })
            .catch(function(err){
                console.log("Error:"+err);
            })
    }

function showSuggestions(data){
        var values=data.results;
        if(data.count===0){
            searchSuggestions.innerHTML="<div>No Matching results found</div>"
        }else{
            var htmlstring="";
            for(var i=0;i<values.length;i++){

                htmlstring+="<div><span class='suggestion-item'>" + values[i].text+"</span><span class='item-weight'>"+values[i].weight+"</span></div>";
            }
            searchSuggestions.innerHTML=htmlstring;
        }

    }
