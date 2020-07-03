//inline event
// error handling level, catching vs wrong status
//status ok, or 200-299
//before or after parsing
//promises line by line
function getDogPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res.status;
      }
    }) //handling using error display ok vs response.text or success
    .then((res) => {
      let item = document.createElement("li");
      document.getElementById("dog-photos").appendChild(item);
      let image = document.createElement("img");
      image.src = res.message;
      image.classList.add("dog-photo");
      document.getElementById("dog-photos").appendChild(image);
    })
    .catch((err) => alert(err)); //when catch called?
}

window.onload = getDogPhoto();
