let users;
let renderBodyTag = document.getElementById('renderBody');
let formData = document.forms['data'];
formData.btnAddUser.addEventListener('click', function () {
    let login = formData.login.value;
    let pass = formData.pass.value;
    let email = formData.email.value;
    if (login != '' && pass != '' && email != '') {
        let newUser = new Profile(login, pass, email);
        users.push(newUser);
        formData.reset();
        renderBody();
    }
});
// class Profile {
//     constructor(login, pass, email) {
//         this.login = login;
//         this.pass = pass;
//         this.email = email;
//     }
// }
function Profile(login, pass, email) {
    this.login = login;
    this.pass = pass;
    this.email = email;
}
function renderBody() {
    renderBodyTag.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = i + 1;
        tr.appendChild(td);
        for (let key in users[i]) {
            let td = document.createElement('td');
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        }
        tr.innerHTML += `<button type="button" class="btn__edit" onclick="editValue(${i})">Edit</button>`;
        tr.innerHTML += `<button class="btn__delete" onclick="deleteValue(${i})">Delete</button>`;
        renderBodyTag.appendChild(tr);
    }
}
function editValue(ind) {
    formData.login.value = users[ind].login;
    formData.pass.value = users[ind].pass;
    formData.email.value = users[ind].email;
    formData.btnAddUser.style.display = "none";
    formData.btnEditUser.style.display = "block";
    formData.btnEditUser.onclick = function () {
        changeValue(ind);
    };
}
function changeValue(ind) {
    users[ind].login = formData.login.value;
    users[ind].pass = formData.pass.value;
    users[ind].email = formData.email.value;
    formData.btnAddUser.style.display = "block";
    formData.btnEditUser.style.display = "none";
    formData.reset();
    renderBody();
}
function deleteValue(ind) {
    users.splice(ind, 1);
    renderBody();
}
