const loginButton = document.getElementById('login');
const dataZone = document.getElementById('data-zone');

loginButton.onclick = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let employees = JSON.parse(xhr.responseText);
                employees.forEach(function(employee) {
                    dataZone.innerHTML += generateTemplate(employee);
                })
            } else {
                alert(xhr.statusText);
            }
        }
    };


    xhr.open('GET', 'datos.json');
    xhr.send();

};

function generateTemplate(employee) {
    let badgeClass = "",
        status = "";

    if (employee.inline) {
        badgeClass = "success";
        status = "Online";
    } else {
        badgeClass = "warning";
        status = "Offline";
    }

    return `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card text-center">
                    <div class="card-header">
                       ${employee.employee}  <span class="badge badge-${badgeClass}">${status}</span>
                    </div>
                    <div class="card-block">
                        <h4 class="card-title">${employee.role}</h4>
                        <p class="card-text">${employee.roleDescription}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Rendimiento en el trabajo: ${employee.productivity}
                    </div>
                </div>
            </div>`
}