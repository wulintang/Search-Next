/*
 * @Author: Vir
 * @Date: 2021-03-27 15:29:03
 * @Last Modified by: Vir
 * @Last Modified time: 2021-03-27 16:35:59
 */

export interface CopyrightType {
  startTime: string; // 开始时间
  endTime?: string; // 结束时间
  href: string; // 网址
  author: string; // 作者
  custom?: string; // 自定义信息
}

export interface mainDataTypes {
  id: string;
  author: string; // 作者
  version: string; // 信息版本，用于判断是否更新
  copyright: CopyrightType; // 版权信息
}

export default {
  id: 'e9ca43ccf6214f61a7b1bcb2f0dd4858',
  author: '南通伍林堂文化传播有限公司',
  href: 'https://www.wulintang.cn',
  version: '0.1',
  copyright: {
    startTime: '2007',
    href: 'https://www.wulintang.cn',
    author: '南通伍林堂文化传播有限公司',
  },
};
