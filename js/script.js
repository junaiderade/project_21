const header = document.getElementById("header")

function submitForm(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('address');

    var name = nameInput.value;
    var email = emailInput.value;

    var data = {
      name: name,
      email: email
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://ki0m5rtgz5.execute-api.us-east-1.amazonaws.com/appendEmail');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Request sent successfully!');
        // You can perform additional actions here after the request is successful
      } else {
        console.log('Request failed. Status:', xhr.status);
        // You can handle the error case here
      }
    };
    xhr.send(JSON.stringify(data));
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