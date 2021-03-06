import jsonp from '@/common/js/jsonp'
import {commonParams, options} from "./config"
import axios from 'axios'

export function search(query, page, zhida,perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    format: "jsonp",
    platform: "h5",
    needNewCode: 1,
    w: query,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: "utf-8",
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: perpage,
    p: page,
    remoteplace: "txt.mqq.all",
    _: 1515998710167
  });
  return jsonp(url, data, options);
}
