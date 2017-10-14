/*
let user = {
    name: "Daniel",
    age: 26,
    website: "javascrupt.com",
    hobbies: ["Programming", "Sudoku", "Books", "Walk"],
    displayHobbies() {
        return this.hobbies.map((hobbie, index) => {
            return <li key={`hobbie${index}`} > {hobbie}</li >
        })
    }
}

const template = (
    <div>
        <h3>{`My name is: ${user.name}`}</h3>
        <p>Age: {user.age}</p>
        <p>Personal website: {user.website}</p>
        <ul>{user.displayHobbies()}</ul>
    </div>
)

ReactDOM.render(template, document.getElementById('root'));
*/
let countObject = {
    actual: 0,
    addOne() {
        this.actual++;
        render();
    },
    removeOne() {
        this.actual--;
        render();
    },
    reset() {
        this.actual = 0;
        render();
    }
}

function render() {
    const miniComponent = (
        <div>
            <h2>Count: {countObject.actual}</h2>
            <button onClick={countObject.addOne.bind(countObject)}>Add +1</button>
            <button onClick={countObject.removeOne.bind(countObject)}>Remove -1</button>
            <button onClick={countObject.reset.bind(countObject)}>Reset</button>
        </div>
    )

    ReactDOM.render(miniComponent, document.getElementById('root'));
}

render()
