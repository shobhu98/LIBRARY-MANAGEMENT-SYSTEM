
function addbook() {
    let name=document.getElementById("name").value;
    let author=document.getElementById("author").value;
    let genre=document.getElementById("genre").value;


    // console.log(name);
    // console.log(author);
    // console.log(genre);

    fetch('/add', {
        method:'POST',
        body:JSON.stringify({'naming':name,'author':author,'genre':genre})
    }).then(function (data) {
        data.text().then(function (d) {
            console.log(d);
            alert(d);



        })


    })



}

function searchbook() {
    let name=document.getElementById('names').value;
    let author=document.getElementById('authors').value;

    fetch('/search?qi='+name)
        .then(function (data) {
        data.text().then(function (d) {
            console.log(d);
            // document.getElementById('dislayname').innerText=d.author;

        })

    })


}