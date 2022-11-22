//Fetch
let isLoading = true;
fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
  response
    .json()
    .then((json) => console.log(json))
    .catch((e) => console.error(e))
    .finally(() => {
      isLoading = false;
    })
);

//async, await


