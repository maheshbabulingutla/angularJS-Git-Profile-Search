
myApp.factory("github", function($http){

    var getUser = function(gituser){
        return $http.get("https://api.github.com/users/" + gituser)
        .then(function(response){
            return response.data;
        });
    };

    var getRepos = function(user){
        return $http.get(user.repos_url)
        .then(function(response){
            return response.data;
        });
    };
    
    return{
        
        getUser: getUser,
        getRepos: getRepos

    };

});