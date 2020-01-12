const url="https://jsonplaceholder.typicode.com/comments";
fetch(url)
.then(resp => resp.json())
.then(data => {
    const list = document.querySelector('#list');
    data.forEach(item =>{
       if (item.id <=10) {
        list.innerHTML +=`
        <ul class="list-group mt-4 text-secondary">
            <li class="list-group-item">${item.id}</li>
            <li class="list-group-item">${item.name}</li>
            <li class="list-group-item">${item.email}</li>
        </ul>
        `;
       }
    })
})
.catch( () => console.log("Cannot allow data"))
.finally( () => console.log("Cannot request"))