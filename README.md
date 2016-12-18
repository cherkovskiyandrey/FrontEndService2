TODO:

1. Переводим на чистый html (+)

2. Верстаем форму главного экрана (-)
   - Связываем с сервером (-)

3. Верстаем форму входа в систему на bootstarap (-)
   - Связываем с сервером (-)
   - Добавляем интерактивность с помощью JS (-)

4. Верстаем форму регестрации (-)
   - Связываем с сервером (-)
   - Добавляем интерактивность с помощью JS (-)

5. Верстаем форму поиска людей и добавления их в друзья (-)
   - Связываем с сервером (-)
   - Добавляем интерактивность с помощью JS (-)

6. Верстаем Форму чата с друзьями (-)
   - Связываем с сервером (-)
   - Добавляем интерактивность с помощью JS (-)
   
   <script>
   //window.addEventListener("load", d);
   function d() {
     var xhttp;
     xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           document.getElementById("debug").innerHTML = this.responseText;
       }
     };
     xhttp.open("GET", '/country/list', true);
     xhttp.send();
   }
   </script>