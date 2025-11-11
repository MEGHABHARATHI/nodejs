// const url= "https://jsonplaceholder.typicode.com/posts";

// const data = fetch(url)  

// data.then((value) => {
//     return value.json();
// }).then((response) => {
//     console.log(response);
// })


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });