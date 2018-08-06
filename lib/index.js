import { Component } from "react"
import extend from "extend"
import util from "util.react"
import spreadProps from "react-spread-props"
require('./index.css')
class Paging extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        const ref = util.ref(self)
        let rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
        ].join(' ')
        let domProps = spreadProps(
           self.props,
           {
               className: rootClassName,
               /*
               onClick: function (e) {
                   console.log('proxy click')
                   // this.stopTrigger()
               },
               */
           }
       )
        return (
            <span
                ref={ref`root`}
               {...domProps}
            >

            </span>
        )
    }
}
require('./props').default(Paging)
export default Paging
module.exports = Paging
