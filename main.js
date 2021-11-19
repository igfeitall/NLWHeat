const links = {
  github: "igfeitall",
  youtube: "MrIgDark",
  instagram: "igor.feitall",
  linkedin: "in/igor-feital-04545a181",
  twitter: "igdark_bs"
}

function changeSocialMediaLinks (){
  for(let li of socialMedia.children){
    const social = li.getAttribute("class");

    li.children[0].href = "https://www."+social+".com/"+links[social];
  }
}

function getGitHubUserInfos(){
  let url = "https://api.github.com/users/"+links.github;
  fetch(url)
  .then( response => response.json())
  .then( data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLogin.textContent = data.login;
    userLink.href = data.html_url;
    userAvatar.src = data.avatar_url;
  })
}

changeSocialMediaLinks()
getGitHubUserInfos()