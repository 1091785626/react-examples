import * as types from '@constants/agent/actions/_common';
/**
 * 退出的时候可以触发路由变化，清理数据
 */
export function navigator() {
	return {
		type: types.ROUTER_CHANGE
	};
}