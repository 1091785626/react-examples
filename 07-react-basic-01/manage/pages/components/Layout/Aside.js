import React, { Component, createElement } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';

class Aside extends Component {
	constructor(props){
		super(props);
		this.state = {
			collapsed: false, // 是否折叠
			mode: 'inline',
			openKey: '',
			selectedKey: ''
		};
		this.handleCollapse = ::this.handleCollapse;
		this.handleClick = ::this.handleClick;
		this.handleOpenMenu = ::this.handleOpenMenu;
	}
	componentWillMount() {
		const _path = this.props.path;
		this.setState({
			openKey: _path.substr(0, _path.lastIndexOf('/')),
			selectedKey: _path
		});
	}
	componentWillReceiveProps(nextProps) {
		this.handleCollapse(nextProps.collapsed);
	}
	handleCollapse(collapsed){
		this.setState({
			collapsed,
			mode: collapsed ? 'vertical' : 'inline',
		});
	}
	handleClick(e){// 点击路由
		this.setState({
			selectedKey: e.key
		});
	}
	handleOpenMenu(v){// 导航收缩
		this.setState({
			openKey: v[v.length - 1]
		});
	}
	render() {
		const { collapsed } = this.props;
		const { mode,selectedKey,openKey } = this.state;
		return (
			<Layout.Sider
				trigger={null}
				breakpoint="lg"
				collapsible
				collapsed={collapsed} // 是否折叠
				// onCollapse={this.handleCollapse}
				style={{overflowY: 'auto'}}
			>
				<div className="_logo" />
				{
					createElement(
						this.props.component,
						{
							menuProps:{
								onClick: this.handleClick,
								theme: "dark",
								mode: mode,
								selectedKeys: [selectedKey],
								openKeys: [openKey],
								onOpenChange: this.handleOpenMenu
							}
						}
					)
				}
			</Layout.Sider>
		);
	}
}
Aside.defaultProps = {
	// path
};

export default Aside;