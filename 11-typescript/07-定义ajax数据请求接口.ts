/*
 * @Author: your name
 * @Date: 2020-08-12 12:23:43
 * @LastEditTime: 2020-08-12 12:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hhzdtk.com/home/hui/Document/study/11-typescript/07-定义ajax数据请求接口.ts
 */
interface Config {
  type: string;
  url: string;
  data?: string;
  datatype: string;
}

function axjx(config: Config) {
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("sucess");
    }
  };
}
