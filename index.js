// Add your code here


function submitData(name,email){
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{"content-type":"application/json",
                "accept":"application/json"
       },
        body:JSON.stringify({name,email})
})
       .then(response=>response.json())
       .then(data=>{console.log(data)
        document.body.innerHTML = data.id;
       })
       .catch(function(error){
        alert("error getting data")
        document.body.innerHTML=error.message
       })
    
}
