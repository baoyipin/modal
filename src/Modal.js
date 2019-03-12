import React from "react";
import "./modal.css";
import Portal from "./Portal";
import Transition from "./transition/Transition";

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:props.visible
        };
        //this.enterAnimate=this.enterAnimate.bind(this);
        //this.leaveAnimate=this.leaveAnimate.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            visible:props.visible
        });
        //this.enterAnimate();
    }
    /*componentDidMount(){
        this.setState({visible:this.props.visible})
    }*/
    /*static getDerivedStateFromProps(nextProps,prevState){
        if (nextProps.visible!==prevState.visible){
            return {
                visible:nextProps.visible
            }
        }else {return null}
    }*/
    confirm=()=>{
        const {onConfirm}= this.props;
        onConfirm("confirm from modal");
        this.setState({
            visible:false
        });
        //this.leaveAnimate();
    };
    cancel=()=>{
        const {onCancel}= this.props;
        onCancel("cancel from modal");
        this.setState({
            visible:false
        });
        //this.leaveAnimate();
    };
    maskClick = ()=> {
        const {onCancel}= this.props;
        onCancel("cancel from mask");
        this.setState({
            visible:false
        });
        //this.leaveAnimate();
    };
   /* enterAnimate = ()=>{
        const enterClasses = 'modal-enter';
        const enterActiveClasses = 'modal-enter-active';
        const enterEndActiveClasses = 'modal-enter-end';
        const enterTimeout = 0;
        const enterActiveTimeout = 200;
        const enterEndTimeout = 100;
        this.setState({ visible: true, classes: enterClasses });
        const enterActiveTimer = setTimeout(_ => {
            this.setState({ classes: enterActiveClasses });
            clearTimeout(enterActiveTimer)
        }, enterTimeout);
        const enterEndTimer = setTimeout(_ => {
            this.setState({ classes: enterEndActiveClasses });
            clearTimeout(enterEndTimer)
        }, enterTimeout + enterActiveTimeout);
        const initTimer = setTimeout(_ => {
            this.setState({ classes: '' });
            clearTimeout(initTimer)
        }, enterTimeout + enterActiveTimeout + enterEndTimeout);

    };*/
    /*leaveAnimate = ()=>{
        const leaveClasses = 'modal-leave';
        const leaveActiveClasses = 'modal-leave-active';
        const leaveEndActiveClasses = 'modal-leave-end';
        const leaveTimeout = 0;
        const leaveActiveTimeout = 100;
        const leaveEndTimeout = 200;
        // 初始元素已经存在,所以不需要改变显隐状态
        this.setState({ classes: leaveClasses });
        const leaveActiveTimer = setTimeout(_ => {
            this.setState({ classes: leaveActiveClasses });
            clearTimeout(leaveActiveTimer)
        }, leaveTimeout);
        const leaveEndTimer = setTimeout(_ => {
            this.setState({ classes: leaveEndActiveClasses });
            clearTimeout(leaveEndTimer)
        }, leaveTimeout + leaveActiveTimeout);
        // 最后将显隐状态改为false，同时将类名还原为初始状态
        const initTimer = setTimeout(_ => {
            this.setState({ visible: false, classes: '' });
            clearTimeout(initTimer)
        }, leaveTimeout + leaveActiveTimeout + leaveEndTimeout);
    };*/
    render(){
        let {visible} = this.state;
        const {title,children} = this.props;
        return (
            <Portal>
                <Transition
                    visible={visible}
                    transitionName="modal"
                    enterActiveTimeout={200}
                    enterEndTimeout={100}
                    leaveActiveTimeout={100}
                    leaveEndTimeout={200}>
                    <div className="modal-wrapper">
                        <div className="modal-header">{title}</div>
                        <div className="modal-content">{children}</div>
                        <div className="modal-footer">
                            <div className="confirm" onClick={this.confirm}>confirm</div>
                            <div className="cancel" onClick={this.cancel}>cancel</div>
                        </div>
                    </div>
                </Transition>
                    {/*<div className="mask" onClick={this.maskClick}></div>*/}
            </Portal>
        )
    }
}