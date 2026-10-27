var movies=[];
function LoadMovies(){
    

    document.getElementById("lstMovie").innerHTML="";
    movies.map(function(movie){
        var option=document.createElement("option");
        option.text= movie.toUpperCase();
        option.value=movie;
        document.getElementById("lstMovie").appendChild(option);
    })
    document.getElementById("lblCount").innerHTML=`Total No of Movies : ${movies.length}`;
}
function AddClick(){
    var moviesName = document.getElementById("txtMovie").value;
    console.log(moviesName);
    if(movies.indexOf(moviesName.toLowerCase())===-1){
        movies.push(moviesName.toLowerCase());
        alert(`${moviesName.toUpperCase()} Added to list`);
        LoadMovies();
        document.getElementById("txtMovie").value="";
    }else{
          alert(`${moviesName.toUpperCase()} Exists`);
    }
}
function SortAsc(){
    movies.sort();
    LoadMovies();
}
function SortDesc(){
    movies.sort();
    movies.reverse();
    LoadMovies();
}
function ClearClick(){
    movies.length=0;
    LoadMovies();
}
function DeleteClick(){
   var selectedmovie=document.getElementById("lstMovie").value;
   var selectedmovieindex=movies.indexOf(selectedmovie);
   var confirmation=confirm(`Are you sure?\nWhat to delete ${selectedmovie.toUpperCase()}`);
   if(confirmation===true){
    movies.splice(selectedmovieindex,1);
    alert(`${selectedmovie} Deleted`);
    LoadMovies();
   }
}
function EditClick(){
    var selectedmovie=document.getElementById("lstMovie").value;
    document.getElementById("txtEditMovie").value=selectedmovie;
}
function SaveClick(){
    var newmoviename=document.getElementById("txtEditMovie").value;
    var selectedmovie=document.getElementById("lstMovie").value;
    var selectedmovieindex=movies.indexOf(selectedmovie);
    movies[selectedmovieindex]=newmoviename;
    LoadMovies();
}