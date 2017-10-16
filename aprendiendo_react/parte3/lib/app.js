
let todoList = {
    title: "Javascrupt TODO-LIST",
    subtitle: "Aprendiendo React desde cero",
    list: [],
    done: [],
    displayList() {
        return this.list.map((item, index) => {
            return <li key={`item${index}`}>{item}</li>
        })
    },
    displayDoneList() {
        return this.done.map((item, index) => {
            return <li key={`item${index}`}>{item}</li>
        })
    }
}

const addItem = event => {
    event.preventDefault();
    let item = event.target.elements.listItem.value;

    if (item.trim()) {
        todoList.list.push(item);
        event.target.elements.listItem.value = "";
        render()
    } else {
        return alert('No puedes enviar un campo vacío')
    }
}

const randomItem = () => {

    let index = Math.floor(Math.random() * todoList.list.length);
    return alert(todoList.list[index]);
}

const deleteItem = (event) => {
    event.preventDefault();
    let index = event.target.elements.index.value - 1;
    todoList.done.push(todoList.list.splice(index, 1));
    render();
}

function render() {
    const miniComponent = (
        <div>
            <h1>{todoList.title}</h1>
            <h2>{todoList.subtitle}</h2>
            <h4> {todoList.list.length === 0 ?
                "No tienes items en la lista"
                : `Tienes ${todoList.list.length} items en la lista sin hacer`}</h4>
            <button
                onClick={randomItem}
                disabled={todoList.list.length === 0}>
                Item aleatorio
            </button>
            <ol>
                {todoList.displayList()}
            </ol>
            <form onSubmit={addItem}>
                <input type="text" name="listItem" placeholder="Nuevo item aquí"></input>
                <button type="submit" >Añadir nuevo item</button>
            </form>
            <form onSubmit={deleteItem}>
                <input name="index" type="number" min="0" max={todoList.list.length}></input>
                <button type="submit">Hecho</button>
            </form>
            <h2>Tareas terminadas:</h2>
            <ul>{todoList.displayDoneList()}</ul>
        </div>
    )
    ReactDOM.render(miniComponent, document.getElementById('root'));
}

render()
