import React ,{Component} from 'react';
import ReactDOM from 'react-dom';


const Demo = ({name}) => {
    return  <div className="shayanstyle">
    <h1>{name}</h1>
    </div>

}

// const Demo = (props) => {
//     return  <div className="shayanstyle">
//     <h1>Hellow World {props.name}</h1>
//     </div>

// }
// class Demo extends Component{
// render()
// {
//    return  <div className="shayanstyle">
//    <h1>Hellow World {this.props.name}</h1>
//    </div>
// }

// }
export default Demo;