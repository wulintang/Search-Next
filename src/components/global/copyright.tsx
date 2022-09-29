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
        <p><img src="/mabai.png" /><img src="/hanzuwang.png" /></p>
<div className="friendlink">
<h3>友情链接：</h3>
<ul>
<li><a href="https://www.wulintang.cn"title="南通伍林堂文化传播有限公司"target="_blank">南通伍林堂文化传播有限公司</a></li><li><a href="https://www.wulintang.net"title="伍林堂安全应急响应中心"target="_blank">伍林堂安全应急响应中心</a></li><li><a href="https://www.wulintang.xyz"title="伍林堂科技事业发展部"target="_blank">伍林堂科技事业发展部</a></li><li><a href="https://www.wulintang.ltd"title="伍林堂文娱事业发展部"target="_blank">伍林堂文娱事业发展部</a></li><li><a href="https://www.wulintang.net.cn"title="伍林堂百兴图文设计部"target="_blank">伍林堂百兴图文设计部</a></li><li><a href="https://www.wulintang.com.cn"title="伍林堂品牌法律维护部"target="_blank">伍林堂品牌法律维护部</a></li><li><a href="https://www.wulintang.xin"title="伍林堂企业合伙营销部"target="_blank">伍林堂企业合伙营销部</a></li><li><a href="https://www.zhtaoism.com"title="伍林堂道教事业发展部"target="_blank">伍林堂道教事业发展部</a></li><li><a href="https://www.yangtuo.live"title="伍林堂羊驼互动娱乐部"target="_blank">伍林堂羊驼互动娱乐部</a></li><li><a href="https://www.zhimucishan.com"title="伍林堂智募慈善项目部"target="_blank">伍林堂智募慈善项目部</a></li><li><a href="https://www.biaoza.club"title="伍林堂表砸开源项目部"target="_blank">伍林堂表砸开源项目部</a></li><li><a href="https://www.ccwadj.cn"title="伍林堂云之道数据官网"target="_blank">伍林堂云之道数据官网</a></li><li><a href="https://www.shanpao.club"title="伍林堂山炮文学品牌联盟"target="_blank">伍林堂山炮文学品牌联盟</a></li><li><a href="https://www.chntaoism.com"title="伍林堂兴汉同盟企业合伙"target="_blank">伍林堂兴汉同盟企业合伙</a></li><li><a href="https://www.rushidao.org.cn"title="伍林堂儒释道CMS开源项目"target="_blank">伍林堂儒释道CMS开源项目</a></li><li><a href="https://www.taoisms.cn"title="盘龙阁权益保护委员会"target="_blank">盘龙阁权益保护委员会</a></li><li><a href="https://www.snsou.cn"title="云搜道"target="_blank">云搜道</a></li><li><a href="https://www.daoyue.org.cn"title="云道乐"target="_blank">云道乐</a></li><li><a href="https://www.chndao.com"title="云道商"target="_blank">云道商</a></li><li><a href="https://www.han-zu.cn"title="汉族网"target="_blank">汉族网</a></li><li><a href="https://www.dasu.net.cn"title="大苏网"target="_blank">大苏网</a></li><li><a href="https://www.zihan.show"title="李梓菡"target="_blank">李梓菡</a></li><li><a href="https://www.taoisms.org.cn"title="道教之家"target="_blank">道教之家</a></li><li><a href="https://www.zuori.net.cn"title="昨日头条"target="_blank">昨日头条</a></li><li><a href="https://www.lizhichen.cn"title="懋和道人"target="_blank">懋和道人</a></li><li><a href="https://www.yudao.org.cn"title="遇真道院"target="_blank">遇真道院</a></li><li><a href="https://www.dao.js.cn"title="
道言网"target="_blank">道言网</a></li><li><a href="https://www.ccwadj.com"title="云之道数据"target="_blank">云之道数据</a></li><li><a href="https://www.it171.cn"title="IT171中文网"target="_blank">IT171中文网</a></li><li><a href="https://www.ntmetro.com.cn"title="轨道交通大数据应用"target="_blank">轨道交通大数据应用</a></li><li><a href="https://www.xiudaohu.cn"title="漏尽阁修道乎"target="_blank">漏尽阁修道乎</a></li><li><a href="https://www.朱楠.我爱你"title="朱楠，我爱你"target="_blank">朱楠，我爱你</a></li><li><a href="http://www.atcpu.com/"title="灯火互联网"target="_blank">灯火互联网</a></li><li><a href="https://www.taoisms.org" title="罗盘时钟" target="_blank">罗盘时钟</a></li>
</ul>
</div>  
        <p>CDN数据源存储于 <a target="_blank" href="https://cloud.tencent.com/act/cps/redirect?redirect=2182&cps_key=49716edce3a6c8b2f1df7249791dcd72&from=console">腾讯云</a>、中继IP由 <a target="_blank" href="https://www.ccwadj.com/">云之道数据</a> 提供区域分配</p>
        <p><a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32061202001219">苏公网安备32061202001219号</a>、<a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021008246号-19</a></p>
        <p>©{copyright.startTime}-{endTime}<a href={copyright.href} target="_blank">{copyright.author}</a>版权所有、<a target="_blank" title="51la网站统计" href="https://v6.51.la/land/JfZgAjaA6gGu2lST">统计</a></p>
        <p><a target="_blank" rel="nofollow" href="https://www.wulintang.xin/new/202107081.shtml"><img src="https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/yun/yun.png" /></a></p>
</div>
  );
};
export default Copyright;
