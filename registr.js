function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }
function userNameCheck(form) {
    var status = 0;
    var elStatus = document.getElementById('name_status');
    var name = form.elements.username.value;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'check.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("name=" + encodeURIComponent(name)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          status = xmlhttp.responseText; // Выводим ответ сервера
        }
      }
    };
    setTimeout(function(){
      if(name.length < 31 && name.length  > 4){
        if(status == "false"){
			elStatus.innerHTML = "";
            form.elements.submit.disabled = false;
        }
          else {
			  elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>This name already exists!</div></div>";
              form.elements.submit.setAttribute('disabled','disabled');
          }
    }
        else{
 			  elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>Incorrect name size!</div></div>";
            form.elements.submit.setAttribute('disabled','disabled');
        }
    }, 1000);


}
function passwordCheck(form){
    var status = 0;
    var elStatus = document.getElementById('re_pas_status');
    var pas = form.elements.password.value;
    var rePas = form.elements.re_password.value;
    if(pas.length < 31 && pas.length > 3){
        if(pas == rePas){
			elStatus.innerHTML = "";
            form.elements.submit.disabled = false;
        }
        else {
 			elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>Passwords do not match!</div></div>";
            form.elements.submit.setAttribute('disabled','disabled');
        }
    }
    else {
		elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>Incorrect password size!</div></div>";
        form.elements.submit.setAttribute('disabled','disabled');
    }
}
function emailCheck(form){
    var status = 0;
    var elStatus = document.getElementById('email_status');
    var email = form.elements.email.value;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'check.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("name=" + encodeURIComponent(email)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          status = xmlhttp.responseText; // Выводим ответ сервера
        }
      }
    };
    var tmp = 0;
    for(var i = 0;i < email.length;i++){
        if(email[i] == '@')tmp = 1;
    }
    setTimeout(function(){
      if(email.length < 31 && email.length  > 5 && tmp == 1){
        if(status == "false"){
			elStatus.innerHTML = "";
            form.elements.submit.disabled = false;
        }
          else {
			  elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>This e-mail already exists!</div></div>";
              form.elements.submit.setAttribute('disabled','disabled');
          }
    }
        else {
		   elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Input error!</div><div class='panel-body'>Incorrect email !</div></div>";
            form.elements.submit.setAttribute('disabled','disabled');
        }
    }, 1000);
}

function authorCheck(form){
    var status = 0;
    var elStatus = document.getElementById('auth_status');
    var name = form.elements.username.value;
    var pas = form.elements.password.value;
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'authorize.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("username=" + encodeURIComponent(name) + "&password=" + encodeURIComponent(pas)); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          status = xmlhttp.responseText; // Выводим ответ сервера

        }
      }
    };
    setTimeout(function(){
      if(status == "false") elStatus.innerHTML = "<div class='panel panel-danger'><div class='panel-heading'>Ошибка авторизации</div><div class='panel-body'>Такого пользователя не существует</div></div>";
        else document.location.href = "request.html";
    }, 1000);
}
function ckeckNote(tmp){
    var title = tmp.title.value;
    var element = document.getElementById('inputTitleGroup');
    var elementLabel = document.getElementById('inputTitleLabel');
    if(title.length < 2){
        element.setAttribute('class', 'form-group has-error');
        elementLabel.innerHTML = "Too short";
    }
    else{
        element.setAttribute('class', 'form-group');
        elementLabel.innerHTML = "Title";
    }
}

function getUserName(){
    var element =  document.getElementById('person');
    var username = "";
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'personal.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("username=" + encodeURIComponent('a')); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
            element.innerHTML = xmlhttp.responseText.substr(0,xmlhttp.responseText.indexOf("*")); // Выводим ответ сервера
        }
      }
    };
}

function profile(form){
    var name = form.elements.userName;
    var email = form.elements.email;
    var count = form.elements.count;
    var element =  document.getElementById('person');
    var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'personal.php', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send(); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
            element.innerHTML = xmlhttp.responseText.substr(0,xmlhttp.responseText.indexOf("*")); // Выводим ответ сервера
            name.value = xmlhttp.responseText.substr(0,xmlhttp.responseText.indexOf("*"));
            count.value = xmlhttp.responseText.substring(xmlhttp.responseText.indexOf("*")+1,xmlhttp.responseText.indexOf("+"));
            email.value = xmlhttp.responseText.substring(xmlhttp.responseText.indexOf("+")+1,xmlhttp.responseText.indexOf("%"));

        }
      }
    };
}
