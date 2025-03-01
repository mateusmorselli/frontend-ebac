$(document).ready(function() {
    const endPoint = `https://api.github.com/users/mateusmorselli`;

    fetch(endPoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json) {
            console.log(json);
            const foto = json.avatar_url;
            const nome = json.name;
            const user = json.login;
            const repos = json.public_repos;
            const seguidores = json.followers;
            const seguindo = json.following;
            $('#profile-pic').attr('src', foto);
            $('#git-name').text(nome);
            $('#git-user').text(user);
            $('#repositorios').text(repos);
            $('#Seguidores').text(seguidores);
            $('#seguindo').text(seguindo);      
        })

})