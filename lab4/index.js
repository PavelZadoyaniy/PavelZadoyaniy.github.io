const getUser = () => (
    fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('image').setAttribute('src', data.avatar_url);
            for(let str of ['name', 'login', 'bio', 'company', 'location', 'email', 'blog'])
                document.getElementById(str).innerHTML = data[str] || "...";
        })
        .catch(err => console.log(err))
  )
  getUser()
  