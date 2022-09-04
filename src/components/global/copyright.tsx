/*
 * @Author: Vir
 * @Date: 2021-03-25 14:01:37
 * @Last Modified by: Vir
 * @Last Modified time: 2021-03-27 14:42:52
 */

import { CopyrightType } from '@/data/main';
import { copyright as copyrightApi } from '@/apis/common';
import React from 'react';
import dayjs from 'dayjs';

interface CopyrightTypeWithVersion extends CopyrightType {
  version?: string;
}

const Copyright: React.FC = () => {
  const [copyright, setCopyright] = React.useState(
    {} as CopyrightTypeWithVersion,
  );

  const endTime = dayjs(new Date()).format('YYYY');

  const getCopyright = () => {
    copyrightApi().then((res) => {
      setCopyright(res.data);
    });
  };

  React.useEffect(() => {
    getCopyright();
  }, []);

return (
<div className="copyright banquan inline-block text-sm text-gray-300 rounded">
  <p>
    <img src="/mabai.png"/>
    <img src="/hanzuwang.png"/></p>
<p>
  CDN数据源存储于 <a href="https://cloud.tencent.com/act/cps/redirect?redirect=2182&cps_key=49716edce3a6c8b2f1df7249791dcd72&from=console" target="_blank">腾讯云</a>、
  中继IP由 <a href="https://www.ccwadj.com/" target="_blank">云之道数据</a> 提供区域分配</p>
  <p>
    <a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32061202001219">苏公网安备32061202001219号</a>、
    <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021008246号-19</a></p>
  <p>©{copyright.startTime}-{endTime}
    <a href={copyright.href} target="_blank">{copyright.author}</a>版权所有</p>
    <a target="_blank" rel="nofollow" href="https://www.wulintang.xin/new/202107081.shtml">
      <img src="https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/yun/yun.png" /></a></p>
  <p>
    <a target="_blank" title="51la网站统计" href="https://v6.51.la/land/JfZgAjaA6gGu2lST">
      <img src="https://sdk.51.la/icon/1-4.png" /></a></p>
</div>
  );
};

export default Copyright;
