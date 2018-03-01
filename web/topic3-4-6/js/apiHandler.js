var repos = "";

document.getElementsByClassName('searchUser')[0].onclick = function() {
    var userName = document.getElementsByClassName('githubUsername')[0].value;

    if(userName == "Higgins723" || userName == "higgins723"){
        var repoHttp = new XMLHttpRequest();
        repoHttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var repoData = JSON.parse(this.responseText);
                transformRepoData(repoData);
            }
        };
        repoHttp.open("GET", "/topic3-4-6/txt/higgins723Repos.txt", false);
        repoHttp.send();

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                transformData(data, repos);
            }
        };
        xhttp.open("GET", "/topic3-4-6/txt/higgins723.txt", true);
        xhttp.send();
    }
}

function transformData(d, r) {
    var div = document.createElement('div');

    div.className = "row";
    div.innerHTML = `
        <div class="col-6">
            <img class="img-fluid" src="${d.avatar_url}"/>
        </div>
        <div class="col-6">
            <p><b>Username:</b> ${d.login}</p>
            <p><b>Github URL:</b> <a href="${d.html_url}" target="_blank">Link to Github</a></p>
            <p><b>Name:</b> ${d.name}</p>
            <p><b>Repositories:</b><p>
            <ul>
                `
                +
                repos
                +
                `
            </ul>
        </div>
    `;
    repos = "";
    document.getElementsByClassName('gitContent')[0].appendChild(div);
}

function transformRepoData(d) {
    repos = "";
    for (var i in d) {
        repos += `<li><a target="_blank" href="${d[i].html_url}">${d[i].name}</a></li>`;
    }
}

function changeButtonStatus() {
    var userName = document.getElementsByClassName('githubUsername')[0].value;
    if (userName == "") {
        document.getElementsByClassName('searchUser')[0].disabled = true;
    } else {
        document.getElementsByClassName('searchUser')[0].disabled = false;
    }
}

function deleteLocal() {
    var localStorage = document.getElementsByClassName('gitContent')[0];
    while(localStorage.hasChildNodes()){
        localStorage.removeChild(localStorage.lastChild);
    }
}