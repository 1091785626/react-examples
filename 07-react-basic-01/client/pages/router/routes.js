import { redirectUserToLogin,redirectUserToHome } from './auth';
import { testConfig } from '../containers/Test/App';

export const routeConfig = [
	//test
	...testConfig,
	{ 
		path: '/',
		onEnter:(nextState, replace) => { replace('/test');}
	},
	//error
	{ 
		path: '*',
		getComponent: (nextState, cb) => {
			require.ensure([], (require) => {
				console.error('请输入正确URL!');
				cb(null, require('../containers/ErrorPage/App').default);
			});
		}
	}
];