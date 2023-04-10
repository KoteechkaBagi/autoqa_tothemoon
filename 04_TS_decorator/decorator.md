## Complete exercise

+ Создайте в корне репозитория папку с произвольным именем и со следующей структурой:

```javascript
/*
types
├── types.ts
constants
├── constants.ts
helpers
├── helpers.ts
classes
├── building.ts
├── decorator.ts
index.ts
 */
```
+ В файле `types/types.ts` создайте тип (или интерфейс) `Student`, который содержит 4 ключа: строковые `name`, `surname`, `homeTown` (данное свойство необязательное) и `age` (число). Экспортируйте данный тип.

+ В файле `constants/constants.ts` создайте 3 или более объекта, которые имеют тип (или интерфейс) `Student`, описанный выше. Экспортируйте данные объекты.

+ В файле `building.ts` объявите класс `Building`, который принимает в констуктор два параметра: `foundationYear` (число) и `city` (строка) и записывает их в одноименные свойства (свойства неизменяемы). Также у этого класса должен быть метод `getBuildingInfo()`, который выводит в консоль строку вида `This building was found in <foundationYear> in <city>.`, где `<foundationYear>` и `<city>` - соответствующие внутренние свойства данного класса.

+ В этом же файле `building.ts` создайте и экспортируйте новый дочерний от `Building` класс `University`, который принимает в конструктор параметр `name` - название университета - и записывает этот параметр в одноимённое свойство (свойство неизменяемо). Также данный класс должен иметь ещё два публичных свойства, которые НЕ передаются в конструктор: `students` (массив строк) и `studentsAge` (массив чисел) с начальными значениями `[]` и `[]` соответственно.

+ В данном классе есть несколько методов: `getStudentsList()`, `getYoungestStudentAge()`, `assignStudents()` и `graduateStudents()`.

+ Метод `getStudentsList()` выводит в консоль список студентов из свойства `students`. Если массив пуст - выводит строку `The studying year hasn't begun yet in <name> university.`, где `<name>` - значение соответствующего свойства класса `University`.

+ Метод `getYoungestStudentAge()` выводит в консоль строку в виде `The youngest student we have in <name> university is <количество лет> years old.`, где `<name>` - значение соответствующего свойства класса `University`, а `<количество лет>` - самое маленькое значение в массиве `studentsAge` (если массив пуст, то метод выводит строку `We are still waiting for new students.`).

+ Метод `assignStudents()` принимает неограниченное количество объектов с типом `Student`, соединяет свойства каждого из переданых объектов `name`, `surname` в строку `<name> <surname>` и записывать сконкатенированное значение в массив `students` класса `University`. При этом значение ключа `age` записывается как элемент в массив `studentsAge` данного класса.

+ Метод `graduateStudents()` принимает неограниченное количество объектов с типом `Student`, проверяет, есть ли студент с такими именем и фамилией в списке студентов `students`, и при нахождении такового удаляет его из массива `students`, если нет - выводит в консоль сообщение `Sorry, seems like student <name> <surname> is not studying in our university!`, где `<name>` и `<surname>` - одноимённые свойства переданного объекта `Student`.

+ В файле `decorator.ts` папки `classes` создайте интерфейс `Commander`, который имеет следующую структуру:

```javascript
interface Commander {
    execute(action: string, ...args: unknown[]): void;
}
```

+ Здесь же создайте класс `UniversityCommander`, который построен на базе интерфейса выше. Его задача при создании принимать в констуктор экземпляр класса `Univercity`, и предоставить метод `execute()`, который действует точно так же, как и методы `getStudentsList()`, `getYoungestStudentAge()`, `assignStudents()` и `graduateStudents()` с той лишь разницей, что первый аргумент данного метода - название соответствующего метода переданного экземпляра класса `Univercity`, все остальные - необходимые аргументы для выбранного метода. То есть вызов будет выглядеть следующим образом:

```javascript
univercityCommander.execute('getStudentsList');
univercityCommander.execute('getYoungestStudentAge');
univercityCommander.execute('assignStudents', Vadim, Vika);
```

Экспортируйте данный класс.

+ В файле `index.ts` (в корне папки с заданием) импортируйте классы и `University` и `UniversityCommander` из папки `classes`, а также все объектов из файла `constants/constants.ts`.

+ Здесь же создайте экземпляр класса `University`. Вызовите для него методы `getStudentsList()` и `getYoungestStudentAge()`. Вызовите метод `assignStudents()`, которому в качестве аргументов передайте всех импортированных студентов. Вызовите методы `getStudentsList()` и `getYoungestStudentAge()` ещё раз.

+ В этом же файле `index.ts` создайте экземпляр класса `UniversityCommander`, которому передайте в конструктор созданный экземпляр `University`. Выполните метод `graduateStudents()` для одного или более студентов с помощью данного декоратора, затем - с помощью него же - методы `getStudentsList()` и `getYoungestStudentAge()`.

+ ПРИМЕЧАНИЕ:
> ВСЕ свойства и методы классов должны иметь модификаторы доступа (`public`, `private` или `protected`). Выбор - на ваше усмотрение (если иное не оговорено в задании).
> В массиве свойства `studentsAge` класса `University` не должно быть дубликатов (использовать `Set` запрещено!).
> Если в метод `assignStudents()` передан объект студента с возрастом меньше 16, метод должен вывести в консоль сообщение: `We believe that <name> <surname> should finish school at first, as he/she is only <age> years old`, где `<name>`, `<surname>` и `<age>` - одноимённые свойства переданного объекта.
> Параметр `action` метода `execute()` декторатора типизируйте с помощью ключевого слова `keyof`. При этом данный параметр должен быть типизирован таким образом, чтобы иметь значения ТОЛЬКО 4 строк: названий указанных выше методов.
> Добавьте в файл `package.json` скрипт `decorator:test`, который запускает код в файле `index.ts` (в корне папки с заданием).