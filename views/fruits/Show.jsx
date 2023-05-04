const React = require("react")
const Nav = require("../components/Nav")
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit
    return (
      <DefaultLayout title="Fruits Show Page" children= "Details of fruit"  link="/fruits" text="Home">
  
        <h1> Show Page </h1>
          The {fruit.name} is {fruit.color} <br />
          {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
          </DefaultLayout>
    )
  }
}

module.exports = Show