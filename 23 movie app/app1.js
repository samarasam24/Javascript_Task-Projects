function searchMovie() {
    const apiKey = '878239e8';
    const input = document.getElementById("search-input").value;

    if (input === "") {
        alert("input required");
    }else{
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${encodeURIComponent(input)}`;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => show(data))
    .catch(err => console.error(err))
    };
};
function show(data) {
    let
}