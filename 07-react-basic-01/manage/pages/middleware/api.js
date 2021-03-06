// ajax 
import net from '@utils/net';
import API_ROOT from '@constants/apiRoot';
import {DEV_WITH_PHP} from '@constants/constants';

import { apiFn } from '@common/js/middleware/api';
export const api = apiFn(net, API_ROOT, DEV_WITH_PHP);

