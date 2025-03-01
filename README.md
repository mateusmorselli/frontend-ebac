# Meu Github

Este projeto exibe informações do perfil do usuário no GitHub utilizando a API pública do GitHub e jQuery.

## 🚀 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- jQuery
- GitHub API

## 📂 Estrutura do Projeto

```
📁 meu-github
│-- 📄 index.html
│-- 📄 main.css
│-- 📄 main.js
│-- 📄 jquery.js
│-- 📄 jquery.mask.min.js
```

## 📜 Descrição

O site exibe as seguintes informações do perfil do usuário no GitHub:
- Foto de perfil
- Nome
- Nome de usuário
- Número de repositórios
- Seguidores
- Seguindo

## 🔍 Como Funciona

O script `main.js` faz uma requisição para a API do GitHub:

```javascript
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
});
```

## 🌐 Demonstração

A página apresenta os dados dinâmicos do perfil GitHub, atualizando automaticamente as informações sempre que o usuário acessa o site.

---

📌 Desenvolvido por Mateus Morselli
