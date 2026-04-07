
 function saveUser(data) {
    localStorage.setItem("key", JSON.stringify(data));
}

function getUser() {
    return JSON.parse(localStorage.getItem("key"));
}

 function removeUser() {
    localStorage.removeItem("key");
}

export { saveUser, getUser, removeUser };