"use strict";

var todoList = {
    title: "Javascrupt TODO-LIST",
    subtitle: "Aprendiendo React desde cero",
    list: [],
    done: [],
    displayList: function displayList() {
        return this.list.map(function (item, index) {
            return React.createElement(
                "li",
                { key: "item" + index },
                item
            );
        });
    },
    displayDoneList: function displayDoneList() {
        return this.done.map(function (item, index) {
            return React.createElement(
                "li",
                { key: "item" + index },
                item
            );
        });
    }
};

var addItem = function addItem(event) {
    event.preventDefault();
    var item = event.target.elements.listItem.value;

    if (item.trim()) {
        todoList.list.push(item);
        event.target.elements.listItem.value = "";
        render();
    } else {
        return alert('No puedes enviar un campo vacío');
    }
};

var randomItem = function randomItem() {

    var index = Math.floor(Math.random() * todoList.list.length);
    return alert(todoList.list[index]);
};

var deleteItem = function deleteItem(event) {
    event.preventDefault();
    var index = event.target.elements.index.value - 1;
    todoList.done.push(todoList.list.splice(index, 1));
    render();
};

function render() {
    var miniComponent = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            todoList.title
        ),
        React.createElement(
            "h2",
            null,
            todoList.subtitle
        ),
        React.createElement(
            "h4",
            null,
            " ",
            todoList.list.length === 0 ? "No tienes items en la lista" : "Tienes " + todoList.list.length + " items en la lista sin hacer"
        ),
        React.createElement(
            "button",
            {
                onClick: randomItem,
                disabled: todoList.list.length === 0 },
            "Item aleatorio"
        ),
        React.createElement(
            "ol",
            null,
            todoList.displayList()
        ),
        React.createElement(
            "form",
            { onSubmit: addItem },
            React.createElement("input", { type: "text", name: "listItem", placeholder: "Nuevo item aqu\xED" }),
            React.createElement(
                "button",
                { type: "submit" },
                "A\xF1adir nuevo item"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: deleteItem },
            React.createElement("input", { name: "index", type: "number", min: "0", max: todoList.list.length }),
            React.createElement(
                "button",
                { type: "submit" },
                "Hecho"
            )
        ),
        React.createElement(
            "h2",
            null,
            "Tareas terminadas:"
        ),
        React.createElement(
            "ul",
            null,
            todoList.displayDoneList()
        )
    );
    ReactDOM.render(miniComponent, document.getElementById('root'));
}

render();
