const form = document.getElementById('myForm');

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById('search').value;

    //removing spaces in the name typed
    var originalName = search.split(' ').join('')

    document.getElementById('result').innerHTML = '';
    // alert(originalName) --- test remove spaces

    // alert(search) -- test fetch data from index.html

    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        
        document.getElementById('result').innerHTML = `
        <a target="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}" /></a> 
        `
    })
})