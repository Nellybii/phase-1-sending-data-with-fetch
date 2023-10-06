// Add your code here
function submitData(name, email){
const configurationObject ={
    method:"POST",
    headers:{
        "content-type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com", 
    })
}
fetch("http://localhost:3000/users", configurationObject)
  .then((response) => response.json())
   .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("sothing wrong happened!");
    console.log(error.message);
  })
}


