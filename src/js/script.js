window.onload = function() {



    fetch('https://api.jsonbin.io/v3/b/6543a88d54105e766fca7055')
        .then((response) => response.json())
        .then(data => {
            if (Array.isArray(data.record)) {
                console.log(data);
                let parentDiv = document.createElement("DIV");
                data.record.forEach(element => {
                    let post = document.createElement("DIV");
                    post.className = 'post';
                    let info = document.createElement("DIV");
                    info.className = 'info';
                    let date = document.createElement("DIV");
                    date.className = 'date';
                    date.innerHTML = element.date;
                    let author = document.createElement("DIV");
                    author.innerHTML = element.author;
                    let content = document.createElement("DIV");
                    content.className = 'content';
                    content.innerHTML = element.content;
                    info.appendChild(date);
                    info.appendChild(author);
                    post.appendChild(info);
                    post.appendChild(content);;
                    parentDiv.appendChild(post);
                });
                document.body.appendChild(parentDiv);
            } else {
                console.error('JSON response is not an array:', data);
            }
        })
        .finally(() => {
            let buttons = document.createElement("DIV");
            let addpost = document.createElement("BUTTON");
            addpost.className = "buttons";
            let deleteall = document.createElement("BUTTON");
            deleteall.className = "buttons";
            addpost.innerText = "Add Post";
            deleteall.innerText = "Inner Text";
            addpost.innerHTML = "<a href=\"add_post\">Add Post</a>";
            buttons.appendChild(addpost);
            buttons.appendChild(deleteall);
            document.body.appendChild(buttons);

            let footer = document.createElement("FOOTER");
            let p = document.createElement("P");
            p.innerText = "This beautiful page is provided to you by Tartu University students";
            footer.appendChild(p);
            document.body.appendChild(footer);
        })
}
