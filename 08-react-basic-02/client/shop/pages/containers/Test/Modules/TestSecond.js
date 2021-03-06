import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '@shop/actions/test';
import * as types from '@shop/constants/actions/test';
import  Content from '@shop/components/Test/Second/Content';
/*ant*/
import { Toast } from 'antd-mobile';
class TestSecond extends Component {
	constructor(props){
		super(props);
	}
	componentWillMount() {
		if (this.props.testSecond.isFetching === 0) {
			let url = types.TEST_SECOND_GET;
			let param = {};

			let params = {
				param: param,
				ajaxType: 'GET',
				onSuccess: (res)=> {
				},
				onError: (res)=> {
					Toast.info(res.msg,1.5);
				}
			};
			this.props.actions.request(url, params, {});
		}
	}
	render() {
		return (
			<div>
				<Content />
			</div>
		);
	}
}

TestSecond.propTypes = {};
function mapStateToProps(state) {
	return {
		testMain: state.testMain,
		testSecond: state.testSecond,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(creators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSecond);
