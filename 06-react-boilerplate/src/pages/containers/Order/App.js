import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as OrderActions from '../../actions/order';
import Order from './Modules/Order';
import OrderList from './Modules/OrderList';
import OrderDetail from './Modules/OrderDetail';
import OrderComment from './Modules/OrderComment';
import OrderRefund from './Modules/OrderRefund';
class App extends Component {
	constructor(props,context) {
	    super(props,context);
	}
  	render() {//��·���жϣ����ز�ͬ���
    	const { actions,order,location } = this.props;
        //����΢��֧��ֻ����������������?pages=*��������
    	const {pages,type} = location.query;
    	switch(pages){
            //�б�ҳ
    		case 'list':
    			return (
                    <OrderList
                        actions={actions}
                        list={order.list}
                        type={type||'all'} 
                    />
                );
            //����ҳ
            case 'detail':
                return (
                    <OrderDetail
                        actions={actions}
                        detail={order.detail}
                    />
                );
            //����ҳ
            case 'comment':
                return (
                    <OrderComment
                        actions={actions}
                        comment={order.comment}
                    />
                );
            //�˿�ҳ
            case 'refund':
                return (
                    <OrderRefund
                        actions={actions}
                        refund={order.refund}
                    />
                );
    		default :
    			return (
                    <Order
                        actions={actions}
                        main={order.main}
                    />
                );
    	}
  	}
}

function mapStateToProps(state) {
	return {
		order: state.order
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(OrderActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);