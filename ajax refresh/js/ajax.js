const url ="https://jsonplaceholder.typicode.com/photos";
fetch(url) //request
.then (response => response.json()) //response
.then (data =>{
    const card = document.querySelector('#card');
        data.forEach(item =>{
            if (item.id <100) { //NOTE ://btn for hover  // bg for background
                card.innerHTML += `
                    <div class="card mt-4">
                        <div class="card-header bg-primary text-white">${item.title}</div>
                        <div class="card-body">
                            <img src ="${item.url}" class="img-fluid">
                        </div>
                    </div>
                `;
            }
        })
})// success
.catch( () => console.error("Cannot request")) //error
.finally( () =>console.warn("Alwayss url!"))  // always execute


// server status when we request to server

// 100 - continue
// 101 - switching protocol
// 200 - ok (1)
// 300 - Multi process
// 304 - not moditied
// 400 - bad request
// 401 - Unauthorized
// 403 - Forbidden (4)
// 404 - Not Fond (2)
// 500 - Internal Server Error