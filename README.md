## Запуск

```
npm i
npm start
```

## Список исправлений:

- index.js исправила экпорт по умолчанию на именованный экспорт, тк в map.js использовался импорт с именем initMap
- index.css - добавлены размеры для контейнера карты
- mappers.js - исправлен порядок гео-кооридинат
- map.js - добавлен вызов метода, добавляющего маркеры на карту
- details.js - замена стрелочной функции на функциональное выражение, тк стрелочная функция берет контекст из замыкания, а у function expression контекст определяется в момент вызова функции.
- chart.js - удаление ограничения координат графика нагрузки по оси Y
- map.js - удалила задания зеленого цвета точкам кластера - точки кластера должный отражать количество активных и неактивных дронов
- удалила popup js
- привела код к единому виду (кавычки и отступы)
