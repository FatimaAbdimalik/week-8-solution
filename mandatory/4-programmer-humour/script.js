function humor() {
  let url = "https://xkcd.now.sh/?comic=latest";

  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((response) => {
      console.log(response);
      let image = document.createElement("img");

      document.getElementById("photo").src = response.img;
    })
    .catch((err) => alert(err));
}

window.onload = humor();
