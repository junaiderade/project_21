const header = document.getElementById("header")

function submitForm(event) {
    const name = document.getElementById("nameSignUp").value;
    const email = document.getElementById("address").value;
    console.log(name,email)

    fetch('https://j5qv4hfkvd.execute-api.us-east-1.amazonaws.com/staging/addemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          name: name
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);
          // Handle the response data here
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occur during the request
        });
  }

window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})

const mood = document.getElementById("change-mood");

const root = document.getElementById("root")

mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})