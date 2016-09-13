import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import './Btn.scss';
@pureRender
class Btn extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleCommon = this.handleCommon.bind(this);
    }
    handleCommon(event){
    	let $this = event.target;
    	let action = $this.getAttribute('data-action');
    	console.log(action);
    }
	render() {
		const {
			id,
			btnType
		} = this.props; 
		switch(item){
			/*�ض���*/
			//#/order?pages=comment&order_id=111
			case 'additional':
				return(<div>׷������</div>);
			case 'ratedinfo':
				return(<div>�鿴����</div>);
			case 'rated':
				return(<div>��Ҫ����</div>);
			/*�¼�*/
			case 'confirm':
				return(<div data-action="receipt" onClick={this.handleCommon}>ȷ���ջ�</div>);
			case 'paynow':
				return(<div data-action="pay" onClick={this.handleCommon}>����֧��</div>);
			case 'reminder':
				return(<div data-action="remind" onClick={this.handleCommon}>���ѷ���</div>);
			case 'extended':
				return(<div data-action="extend" onClick={this.handleCommon}>�ӳ��ջ�</div>);
			case 'logistics':
				return(<div data-action="logis" onClick={this.handleCommon}>�鿴����</div>);
			case 'delete':
				return(<div data-action="delete" onClick={this.handleCommon}>ɾ������</div>);
			case 'cancel':
				return(<div data-action="cancel" onClick={this.handleCommon}>ȡ������</div>);
			default:
				return null;
		}
	}
}
export default Btn;