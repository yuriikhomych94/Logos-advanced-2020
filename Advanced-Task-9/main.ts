let users: any = [];

let renderBodyTag = document.getElementById('renderBody') as HTMLTableElement;
let formData = document.forms['data'] as HTMLFormElement;



formData.btnAddUser.addEventListener('click', function (): void {
    let login: string = formData.login.value;
    let pass: string = formData.pass.value;
    let email: string = formData.email.value;

    if(login != '' && pass != '' && email != '') {
        let newUser = new Profile(this.login, this.pass, this.email);
        users.push(newUser); 
        formData.reset();
        renderBody(); 
    }
})


function Profile(login: string, pass: string, email: string) {
    this.login = login;
    this.pass = pass;
    this.email = email;
}


function renderBody(): void{
    renderBodyTag.innerHTML = '';
    for(let i: number = 0; i < users.length; i++) {
        let tr = document.createElement('tr') as HTMLElement;
        let td = document.createElement('td') as HTMLElement;
        this.td.innerHTML = i + 1;
        tr.appendChild(td);
        
        for (let key in users[i]) {
            let td = document.createElement('td') as HTMLElement;
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        } 
        tr.innerHTML += `<button type="button" class="btn__edit" onclick="editValue(${i})">Edit</button>`
        tr.innerHTML += `<button class="btn__delete" onclick="deleteValue(${i})">Delete</button>`
        renderBodyTag.appendChild(tr);
    }
}

    function editValue(ind: string): void {
        formData.login.value = users[ind].login;
        formData.pass.value = users[ind].pass;
        formData.email.value = users[ind].email;

        formData.btnAddUser.style.display = "none";
        formData.btnEditUser.style.display = "block";
        formData.btnEditUser.onclick = function(): void {
            changeValue(ind);
        }
    }


function changeValue(ind: string): void{
    users[ind].login = formData.login.value;
    users[ind].pass = formData.pass.value;
    users[ind].email = formData.email.value;

    formData.btnAddUser.style.display = "block";
    formData.btnEditUser.style.display = "none";
    formData.reset();

    renderBody();
}

function deleteValue (ind: number): void {
    users.splice(ind, 1);
    renderBody();
}