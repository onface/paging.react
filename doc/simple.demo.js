var React = require('react')
var ReactDOM = require('react-dom')
var Pagi = require('paging.react')
class Simple extends React.Component {
    render () {
        return (
            <div>
                <Pagi>default</Pagi>
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

