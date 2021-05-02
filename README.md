https://indy660.github.io/appointment_to_doctor_vue/

Сделать SPA приложение для записи на прием к врачу.
Использовать библиотеки: 
•	Bootstrap 4 (https://bootstrap-vue.org/)
•	Поиск адресов с помощью Dadata (https://github.com/ikloster03/vue-dadata)
•	Vue Router

На главной странице отобразить форму из 5 полей:
•	Ф.И.О — текст обязательно наличие 2-х слов;
•	Возраст — число, обязательно, min: 0, max: 150;
•	Дата записи — формат ДД.ММ.ГГГГ — обязательное;
•	Город проживания — использовать поиск\подсказки Dadata;
•	Выбор времени: select из часовых промежутков, например 09:00-10:00. Обязательно к выбору; 
Поле Dadata оформить в виде однофайлового компонента.

Форма при отправке валидирует каждое поле и показывает ошибки каждого поля, если есть.
В случае успешной валидации — отправляет сообщение с данными формы на адрес эл.почты и перенаправляет на страницу информации о результате отправки сообщения: успешно/не успешно, а также данные формы в табличном виде.
Данные и состояние хранить в Vuex
Важно: не нужно обращать внимания на красоты и UI при реализации. Использования простого Boostrap вполне хватит. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
