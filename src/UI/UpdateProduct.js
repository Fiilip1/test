const UpdateProduct = () => {
   
    fetch("https://dummyjson.com/products", {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        method: "PUT",	
    
        body: JSON.stringify({
       
        })
    })
        .then(function (response) {
    
       
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        });
    };
    
  export default  UpdateProduct();

