// ---------------getting dummy organization data
document.getElementById("viewOrgs").addEventListener("click", viewOrgs);
function viewOrgs() {
  fetch("https://api.github.com/organizations")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output =
        '<h2 class="mb-5">These are all dummy organizations</h2>';
      data.forEach(function (organization) {
        output += `
          <div class="card card-body mb-3">
              <p>Name of the organization: ${organization.login}</->
              <p>Organization id: ${organization.id}</p>
              <p>Org Node id: ${organization.node_id}</p>
          </div>
          `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

// --------------display user on search
const form = document.getElementById('myForm');
form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById('search').value;
    //removing spaces in the name typed
    var originalName = search.split(' ').join('')
    document.getElementById('result').innerHTML = '';
     fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        
        document.getElementById('result').innerHTML = `
        <p>Github Username: ${data.login}</p> 
        <p>User ID: ${data.id}</p> 
        <p>Avatar: <img src=${data.avatar_url} alt="Avatar" /></p> 
        <p>Location: ${data.location}</p> 
        <p>Twitter Handle: ${data.twitter_username}</p> 
        `
    })
})



// display organizaion on search
const form2 = document.getElementById('myForm2');
form2.addEventListener('submit', function(e){
    e.preventDefault()
    var search2 = document.getElementById('search2').value;
    //removing spaces in the name typed
    var orgName = search2.split(' ').join('')
    document.getElementById('result2').innerHTML = '';
     fetch("https://api.github.com/orgs/"+orgName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        
        document.getElementById('result2').innerHTML = `
        <p>Name of the organization: ${data.login}</->
        <p>Organization id: ${data.id}</p>
        <p>Org Node id: ${data.node_id}</p>
        `
    })
})
