import { DEV_WITH_PHP } from '@constants/constants';
import { ajaxFn } from '@common/js/utils/net';
const ajax = ajaxFn(DEV_WITH_PHP);
let net = {
	ajax
};
export default net;