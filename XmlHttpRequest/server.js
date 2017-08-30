// PETICION PARA SIMPLEMENTE COGER DATOS DE UN SERVIDOR WEB "GET" EMPLEADOS
$('#employees').click(function() {
    var url = 'datos.json';
    $.getJSON(url, function(data) {
        var statusHTML = '<ul class="bulleted">'
        $.each(data, function(index, employee) {
            if (this.inline) { // this = employee;
                statusHTML += '<li class="in">'
            } else {
                statusHTML += '<li class="out">'
            }
            statusHTML += this.employee + '</li>';
        }); // end jquery each
        statusHTML += '</ul>'
        $('#aim').html(statusHTML);
    }); //end GETJSON
}); //end click function

/*PETICION CON MANEJO DE ERRORES AÑADIDO, NO FUNCIONA EN EL METODO LOAD() 
NI PETICIONES A SERVIDORES REMOTOS*/
$.get('missing.html', function(response) {
    $('#error').html(response);
}).fail(function(jqXHR) {
    console.log(jqXHR.status, jqXHR.statusText);
})

// PETICION PARA GUARDAR DATOS EN LA BASE DE DATOS EN UN SERVIDOR WEB "POST"
$('form').submit(function(event) {
    event.preventDefault();
    var url = $(this).attr('action');
    var formData = $(this).serialize();
    $.post(url, formData, function(response) {
        $('formulario').html('<h1>Thanks for sign up with US!</h1>')
    }); //end post
}); // end submit

// REESCRITO EL ANTERIOR METODO PARA FUNCONAR CON $.ajax()

$('form').submit(function(event) {
    event.preventDefault();
    var url = $(this).attr('action');
    var formData = $(this).serialize();
    $.ajax(url, {
        data: formData,
        type: "POST",
        success: function(response) {
            $('formulario').html('<h1>Thanks for sign up with US!</h1>')
        }
    }); //end ajax
});


/* EJEMPLO PARA HACER UNA PETICION 'GET' AJAX CON JAVASCRIPT PURO

document.getElementById('apreta'
).onclick = function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var employees = JSON.parse(xhr.responseText);
                var statusHTML = '<ul class="bulleted">'
                for (var i = 0; i < employees.length; i++) {
                	if (employees[i].inline) {
                		statusHTML += '<li class="in">' + employees[i].employee + '</li>'
                	} else {
                		statusHTML += '<li class="out">' + employees[i].employee + '</li>'
                	}
                }
                document.getElementById('aim').innerHTML = statusHTML + '</ul>';
            } else {
                alert(xhr.statusText);
            }
        }
    };

    xhr.open('GET', 'datos.json');
    xhr.send();
    document.getElementById('apreta').style.display = 'none';
};
*/