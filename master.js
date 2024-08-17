// [1] Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

// [4] Event Click

getButton.onclick = function () {
    getRepos();
};

// [2] Get Repos Function
function getRepos() {
    if (theInput.value == "") {

        // [3] If Value Is Empty
        reposData.innerHTML = "<span>Please Write Github Username</span>"
    
    } else {
        // [5]  Get Fetch Link
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        
        .then((response) => response.json())

        .then((repositories) => {
        
            // [6] Empty The Container
            reposData.innerHTML = '';

            // [7] Loop On Repositories
            repositories.forEach((repo) => {

                // [8] Create The Main Div Element
                let mainDiv = document.createElement("div");
                
                // [9] Create Repo Name Text
                let repoName = document.createTextNode(repo.name);

                // [10] Append The Text To Main Div
                mainDiv.appendChild(repoName);

                // [12] Create Repo URL Anchor
                let theUrl = document.createElement('a');

                // [13] Create Repo Url Text
                let theUrlText = document.createTextNode("Visit");

                // [14] Append The Repo Url Text To Anchor Tag
                theUrl.appendChild(theUrlText);

                // [15] Add The Hypertext Reference "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // [16] Set Attribute Blank
                theUrl.setAttribute('target', '_blank');

                // [17] Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);

                // [18] Create Stars Count Span
                let starsSpan = document.createElement("span");

                // [19] Create The Stars Count Text
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // [20] Add Stars Count Text To Stars Span
                starsSpan.appendChild(starsText);

                // [21] Append Stars Count Span To Main Div
                mainDiv.appendChild(starsSpan);

                // [22] Add Class On Main Div
                mainDiv.className = 'repo-box';

                // [11] Append The Main Div To Container
                reposData.appendChild(mainDiv);
            });
        });
    }
};
