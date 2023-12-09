window.onload = function() {


    fetch('/res/json/objects.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let parentDiv = document.createElement("DIV");
            json.forEach(element => {
                let post = document.createElement("DIV");
                post.className = 'post';
                let info = document.createElement("DIV");
                info.className = 'info';
                let date = document.createElement("DIV");
                date.className = 'date';
                date.innerHTML = element.date;
                let author = document.createElement("DIV");
                author.innerHTML = element.author;
                let imageAvatar = document.createElement("IMG");
                imageAvatar.src = 'res/png/My_picture.png';
                imageAvatar.className = 'avatar';
                if (element.image != null) {
                    let imageContent = document.createElement("IMG");
                    fetch(element.image.valueOf())
                        .then(response => {
                            if (response.ok) {
                                return response.blob();
                            } else {
                                throw new Error("Failed to fetch content image")
                            }
                        })
                        .then(blob => {
                            let reader = new FileReader();
                            reader.onload = () => {
                                let dataURL = reader.result;
                                imageContent.src = dataURL;
                                imageContent.className = 'image';
                                post.appendChild(imageContent);
                            };
                            reader.readAsDataURL(blob);
                        })
                        .catch(err => {
                            console.error("Error:", err);
                        });
                }
                let content = document.createElement("DIV");
                content.className = 'content';
                content.innerHTML = element.content;
                let imageButton = document.createElement("IMG");
                imageButton.src = 'res/png/heart_button.png';
                imageButton.className = 'button';
                info.appendChild(imageAvatar);
                info.appendChild(date);
                info.appendChild(author);
                post.appendChild(info);
                post.appendChild(content);
                post.appendChild(imageButton);
                parentDiv.appendChild(post);
            })
            document.body.appendChild(parentDiv);

        })
        .finally(() => {
            let footer = document.createElement("FOOTER");
            let p = document.createElement("P");
            p.innerText = "This beautiful page is provided to you by Tartu University students";
            footer.appendChild(p);
            document.body.appendChild(footer);
        })
}