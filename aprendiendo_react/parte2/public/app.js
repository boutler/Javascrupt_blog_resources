'use strict';

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
var countObject = {
    actual: 0,
    addOne: function addOne() {
        this.actual++;
        render();
    },
    removeOne: function removeOne() {
        this.actual--;
        render();
    },
    reset: function reset() {
        this.actual = 0;
        render();
    }
};

function render() {
    var miniComponent = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Count: ',
            countObject.actual
        ),
        React.createElement(
            'button',
            { onClick: countObject.addOne.bind(countObject) },
            'Add +1'
        ),
        React.createElement(
            'button',
            { onClick: countObject.removeOne.bind(countObject) },
            'Remove -1'
        ),
        React.createElement(
            'button',
            { onClick: countObject.reset.bind(countObject) },
            'Reset'
        )
    );

    ReactDOM.render(miniComponent, document.getElementById('root'));
}

render();
