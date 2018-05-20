function toggleMenu() {
    document.getElementById('dropdown').classList.toggle('toggled');
}

function toggleDropdown() {
    document.getElementById('submenu').classList.toggle('toggled');
}

function validateForm() {
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var message = document.getElementById('message').value;
    var error = document.getElementById('error');

    if (name == "" || name == null) {
        error.innerHTML = '';
        error.innerHTML += "Invalid name";
        return false;

    }

    if (lastname == "" || lastname == null) {
        error.innerHTML = '';
        error.innerHTML += "Invalid last name";
        return false;
    }

    if (message == "" || message == null) {
        error.innerHTML = '';
        error.innerHTML += "Message is empty";
        return false;
    }

    alert('Valid!');
    return true;
}