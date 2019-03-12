import React, {Component} from 'react';
import Modal from "./Modal";

class App extends Component {
    constructor() {
        super();
        this.state = {
            visible:false
        }
    }
    handleClick(){
        this.setState({
            visible:!this.state.visible
        })
    }
    onConfirm(msg){
        this.setState({visible:false});
        console.log(msg);
    }
    onCancel(msg){
        this.setState({visible:false});
        console.log(msg);
    }
    render() {
        let {visible} = this.state;
        return (
            <div className="App">
                <button onClick={()=>{this.handleClick()}}>hello</button>
                <Modal
                    visible={visible}
                    onConfirm={(msg)=>{this.onConfirm(msg)}}
                    onCancel={(msg)=>{this.onCancel(msg)}} title="定制标题">定制内容</Modal>
            </div>
        );
    }
}

export default App;
