database.collection('student').get().then((data)=>{
    const table = document.querySelector('table');
    data.forEach(item=>{
        table.innerHTML+=`
            <tr>
                <td>${item.data().name}</td>
                <td>${item.data().age}</td>
                <td>${item.data().province}</td>
                <td>
                    <i class="material-icons text-danger" style="cursor:pointer;">delete</i>
                </td>
            </tr>
        `;
    });
});

function delStudent(teaId) {
    database.collection('student').doc(teaId).delete();
}
const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click',function(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var province = document.getElementById('pro').value;
    database.collection('student').add({
        name:name,
        age:age,
        province:province,
    });
});