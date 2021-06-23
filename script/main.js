
function sendEmail() {
    let name = `New Message From: ${document.getElementById("name").value}` 
    let body = document.getElementById("message").value
    window.open(`mailto:francisuloko@yahoo.com?subject=${name}&body=${body}`);
}
