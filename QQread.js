
/*ziye

����github��ַ     https://github.com/ziye12/JavaScript 
ת���뱸ע�����֣�лл

11.25 ���� �Ķ�ʱ���ϴ����Ķ���ң��Ķ�������
11.25 �޸��������䲻ͬʱ��ȡ������.�����Ķ�����ж�
11.25 �޸��Ķ�ʱ�����⣬�Ķ�������⣬�����»�ȡʱ��cookie
11.26 ������ֻ��һ�Σ���ȥ���������޸��Ķ�������⣬����ʱ���ϴ�����
11.26 ������ȡ��ʱ������
11.26 ���ӽ�������
11.27 ����֪ͨΪ���ɹ�����������֪ͨ
11.28 �޸�����
12.1 ����֪ͨΪ15�α���֪ͨһ��
12.1 �Ż�֪ͨ
12.2 �޸������´򿨲��˵�����

??cookie��ȡ������

�� https://m.q.qq.com/a/s/d3eacc70120b9a37e46bad408c0c4c2a  ���ҵ�   ��ȡcookie

��һ���� �� 10������ Ȼ���˳�����ȡ�Ķ�ʱ��cookie������һ�����ܳ���10��

����ĳЩҳ��Ῠס�������ܻ�ȡ��cookie����ע��cookie��д�����ˣ�



??���佱��Ϊ20����һ�Σ��Լ�����������ö�ʱ����������11����һ��

hostname=mqqapi.reader.qq.com

############## Ȧx

#�������ȡcookie
https:\/\/mqqapi\.reader\.qq\.com\/mqq\/user\/init url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js

#�������ȡʱ��cookie
https:\/\/mqqapi\.reader\.qq\.com\/mqq\/addReadTimeWithBid? url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js


############## loon

//�������ȡcookie
http-request https:\/\/mqqapi\.reader\.qq\.com\/mqq\/user\/init script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js,requires-header=true, tag=�������ȡcookie 

//�������ȡʱ��cookie
http-request https:\/\/mqqapi\.reader\.qq\.com\/mqq\/addReadTimeWithBid? script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js, requires-header=true, tag=�������ȡʱ��cookie


############## surge

//�������ȡcookie
������ = type=http-request,pattern=https:\/\/mqqapi\.reader\.qq\.com\/mqq\/user\/init,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js, requires-header=true

//�������ȡʱ��cookie
������ = type=http-request,pattern=https:\/\/mqqapi\.reader\.qq\.com\/mqq\/addReadTimeWithBid?,script-path=https://raw.githubusercontent.com/ziye12/JavaScript/master/qqread.js, requires-header=true


*/

const jsname='������'
const $ = Env(jsname)

console.log(`\n========= �ű�ִ��ʱ��(TM)��${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})} =========\n`)

const logs = 0;   //0Ϊ�ر���־��1Ϊ����
const notifyInterval=3
//0Ϊ�ر�֪ͨ��1Ϊ����֪ͨ��2Ϊ������ȡ�ɹ�֪ͨ��3Ϊ����ÿ15��֪ͨһ��

const jbid=1//�������޸����ֵ,Ĭ���˺�1
const dd=1//���������ӳ�,Ĭ��1��
const TIME=30//����ʱ���ϴ����ƣ�Ĭ��5����
const maxtime=20//ÿ���ϴ�ʱ�����ƣ�Ĭ��20Сʱ
const wktimess=1200//�ܽ�����ȡ��׼��Ĭ��1200����
var tz=''

const qqreadurlKey = 'qqreadurl'+jbid
const qqreadurlVal = $.getdata(qqreadurlKey)

const qqreadheaderKey = 'qqreadhd'+jbid
const qqreadheaderVal= $.getdata(qqreadheaderKey)

const qqreadtimeurlKey = 'qqreadtimeurl'+jbid
const qqreadtimeurlVal = $.getdata(qqreadtimeurlKey)

const qqreadtimeheaderKey = 'qqreadtimehd'+jbid
const qqreadtimeheaderVal= $.getdata(qqreadtimeheaderKey)


//CK����
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie()
} else {
   all()
}

function GetCookie() {

   if($request &&$request.url.indexOf("init")>=0) {

  const qqreadurlVal = $request.url
if (qqreadurlVal)        $.setdata(qqreadurlVal,qqreadurlKey)
    $.log(`[${jsname}] ��ȡurl����: �ɹ�,qqreadurlVal: ${qqreadurlVal}`)

  const qqreadbodyVal = $request.body
    if (qqreadbodyVal)   $.setdata(qqreadbodyVal,qqreadbodyKey)
    $.log(`[${jsname}] ��ȡ�Ķ�: �ɹ�,qqreadbodyVal: ${qqreadbodyVal}`)

    
 const qqreadheaderVal = JSON.stringify($request.headers)
    if (qqreadheaderVal)  $.setdata(qqreadheaderVal,qqreadheaderKey)
    $.log(`[${jsname}] ��ȡCookie: �ɹ�,qqreadheaderVal: ${qqreadheaderVal}`)
    $.msg(qqreadheaderKey, `��ȡcookie: �ɹ�??`, ``)
  
}

else if($request &&$request.url.indexOf("addReadTimeWithBid?")>=0) {
 const qqreadtimeurlVal = $request.url
if (qqreadtimeurlVal)   $.setdata(qqreadtimeurlVal,qqreadtimeurlKey)
    $.log(`[${jsname}] ��ȡ�Ķ�ʱ��url: �ɹ�,qqreadtimeurlVal: ${qqreadtimeurlVal}`)

const qqreadtimeheaderVal = JSON.stringify($request.headers)
    if (qqreadtimeheaderVal)        $.setdata(qqreadtimeheaderVal,qqreadtimeheaderKey)
    $.log(`[${jsname}] ��ȡʱ��header: �ɹ�,qqreadtimeheaderVal: ${qqreadtimeheaderVal}`)
    $.msg(qqreadtimeheaderKey, `��ȡ�Ķ�ʱ��cookie: �ɹ�??`, ``)

 }

}




function all()

 {
   for(var i=0;i<18;i++)
 { (function(i) {
            setTimeout(function() {
     if (i==0)
qqreadinfo();//�û���

else if (i==1)
qqreadconfig();//ʱ����ѯ

else if (i==2)
qqreadtask();//�����б�

else if (i==3&&task.data.taskList[2].doneFlag==0)
qqreadsign();//���ǩ��

else if (i==4&&task.data.treasureBox.doneFlag==0)
qqreadbox();//����

else if (i==5&&task.data.taskList[1].doneFlag==0)
qqreadssr1();//�Ķ����1

else if (i==6&&config.data.pageParams.todayReadSeconds/3600<=maxtime)
qqreadtime();//�ϴ�ʱ��

else if (i==7&&task.data.taskList[2].doneFlag==0)
qqreadtake();//�Ķ�ǩ��

else if (i==8&&task.data.taskList[0].doneFlag==0)
qqreaddayread();//�Ķ�����

else if (i==9&&task.data.taskList[1].doneFlag==0)
qqreadssr2();//�Ķ����2

else if (i==10&&task.data.taskList[3].doneFlag==0)
qqreadvideo();//��Ƶ����

else if(i==11&&task.data.taskList[2].doneFlag==0)
qqreadsign2();//ǩ������

else if (i==12&&task.data.treasureBox.videoDoneFlag==0)
qqreadbox2();//���䷭��

else if (i==13&&task.data.taskList[1].doneFlag==0)
qqreadssr3();//�Ķ����3

else if (i==14)
qqreadwktime();//��ʱ����ѯ

else if (i==15)
qqreadpick();//����ʱ������

else if (i==16)
showmsg();//֪ͨ

else if (i==17)
$.done();//����

    }
, (i + 1) *dd*1000);
                })(i)
  }
}


//�����б�
function qqreadtask() {
return new Promise((resolve, reject) => {
  const toqqreadtaskurl ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/page?fromGuid=',
   headers: JSON.parse(qqreadheaderVal),    
 timeout:60000};
   $.get(toqqreadtaskurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �����б�: ${data}`)
     task =JSON.parse(data)
tz+=
'���ֽ���:'+
    (task.data.user.amount/10000).toFixed(2)+
	'Ԫ\n'+
    '����'+
	task.data.invite.issue+
	'�ڡ�:ʱ��'+
    task.data.invite.dayRange+
	'\n'+
    ' ������'+
	task.data.invite.inviteCount+
    '�ˣ�������'+
	task.data.invite.nextInviteConfig.count+
    '�˻��'+
	task.data.invite.nextInviteConfig.amount+
	'���\n'+
    '��'+
	task.data.taskList[0].title+
	'��:'+
    task.data.taskList[0].amount+
	'���,'+
    task.data.taskList[0].actionText+
	'\n'+
    '��'+
	task.data.taskList[1].title+
	'��:'+
    task.data.taskList[1].amount+
	'���,'+
    task.data.taskList[1].actionText+
	'\n'+
    '��'+
	task.data.taskList[2].title+
	'��:'+
    task.data.taskList[2].amount+
    '���,'+
    task.data.taskList[2].actionText+
    '\n'+
    '��'+
	task.data.taskList[3].title+
    '��:'+
    task.data.taskList[3].amount+
    '���,'+
    task.data.taskList[3].actionText+
    '\n'+
    '����������'+
    (task.data.treasureBox.count+1)+
    '��:'+
    task.data.treasureBox.tipText+
    '\n'+
    '��'+task.data.fans.title+
	'��:'+
    task.data.fans.fansCount+
    '������,'+
    task.data.fans.todayAmount+
    '���\n'

resolve()

    })

   })
  }  


//�û���
function qqreadinfo() {
return new Promise((resolve, reject) => {
  const toqqreadinfourl = {
    url: qqreadurlVal,
    headers: JSON.parse(qqreadheaderVal),    
 timeout:60000};
   $.get(toqqreadinfourl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �û���: ${data}`)
     info =JSON.parse(data)
tz+=
'���û���Ϣ��:'+info.data.user.nickName+'\n'

resolve()
    })
   })
  }  


//�Ķ�ǩ��
function qqreadtake() {
return new Promise((resolve, reject) => {
  const toqqreadtakeurl ={url: 'https://mqqapi.reader.qq.com/mqq/sign_in/user',
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.post(toqqreadtakeurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �Ķ�ǩ��: ${data}`)
     take =JSON.parse(data)
if (take.data.takeTicket>0)
 {
tz+=
'���Ķ�ǩ����:���'+take.data.takeTicket+'��\n'
}

resolve()
    })
   })
  }  


//�Ķ�ʱ������
function qqreadconfig() {
return new Promise((resolve, reject) => {
  const toqqreadconfigurl = {
    url: 'https://mqqapi.reader.qq.com/mqq/page/config?router=%2Fpages%2Fbook-read%2Findex&options=',
    headers: JSON.parse(qqreadheaderVal),
    };
   $.get(toqqreadconfigurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �Ķ�ʱ����ѯ: ${data}`)
     config =JSON.parse(data)
   if (config.code==0)
tz+='��ʱ����ѯ��:�����Ķ�'+(config.data.pageParams.todayReadSeconds/60).toFixed(0)+'����\n'


resolve()
    })
   })
  } 


//�Ķ�ʱ��
function qqreadtime() {
return new Promise((resolve, reject) => {
  const toqqreadtimeurl = {
    url: qqreadtimeurlVal.replace(/readTime=/g, `readTime=${TIME}`),
    headers: JSON.parse(qqreadtimeheaderVal),
     
    };
	
   $.get(toqqreadtimeurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �Ķ�ʱ��: ${data}`)
     time =JSON.parse(data)
     if (time.code==0)
tz+='���Ķ�ʱ����:�ϴ�'+TIME/6+'����\n'


resolve()
    })
   })
  }  


//�Ķ����1
function qqreadssr1() {
return new Promise((resolve, reject) => {
  const toqqreadssr1url = {url: `https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=30`,
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
if (config.data.pageParams.todayReadSeconds/60>=1){

   $.get(toqqreadssr1url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ��ҽ���1: ${data}`)
     ssr1 =JSON.parse(data)
	if (ssr1.data.amount>0)   
tz+='���Ķ����1�����'+ssr1.data.amount+'���\n'


resolve()
    })
}
   })
  }  


//�Ķ����2
function qqreadssr2() {
return new Promise((resolve, reject) => {
  const toqqreadssr2url = {url: `https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=300`,
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
if (config.data.pageParams.todayReadSeconds/60>=5){

   $.get(toqqreadssr2url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ��ҽ���2: ${data}`)
     ssr2 =JSON.parse(data)
	if (ssr2.data.amount>0)   
tz+='���Ķ����2�����'+ssr2.data.amount+'���\n'

resolve()
    })
}
   })
  }  


//�Ķ����3
function qqreadssr3() {
return new Promise((resolve, reject) => {
  const toqqreadssr3url = {url: `https://mqqapi.reader.qq.com/mqq/red_packet/user/read_time?seconds=1800`,
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};

if (config.data.pageParams.todayReadSeconds/60>=30){

   $.get(toqqreadssr3url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ��ҽ���3: ${data}`)
     ssr3 =JSON.parse(data)
	if (ssr3.data.amount>0)   
tz+='���Ķ����3�����'+ssr3.data.amount+'���\n'


resolve()
    })
}
   })
  }  


//���ǩ��
function qqreadsign() {
return new Promise((resolve, reject) => {
  const toqqreadsignurl ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in/page',
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreadsignurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ���ǩ��: ${data}`)
     sign =JSON.parse(data)

if (sign.data.videoDoneFlag)
 {
tz+=
'�����ǩ����:���'+sign.data.todayAmount+'���\n'
    }


resolve()
    })
   })
  }  


//���ǩ������
function qqreadsign2() {
return new Promise((resolve, reject) => {
  const toqqreadsign2url ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/clock_in_video',
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreadsign2url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ���ǩ������: ${data}`)
     sign2 =JSON.parse(data)

if (sign2.code==0)
 {
tz+=
'��ǩ��������:���'+sign2.data.amount+'���\n'
}

resolve()
    })
   })
  }  


//ÿ���Ķ�
function qqreaddayread() {
return new Promise((resolve, reject) => {
  const toqqreaddayreadurl ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/read_book',
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreaddayreadurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ÿ���Ķ�: ${data}`)
     dayread =JSON.parse(data)
if (dayread.code==0)
 {
tz+=
'��ÿ���Ķ���:���'+dayread.data.amount+'���\n'

}

resolve()
    })
   })
  }  


//��Ƶ����
function qqreadvideo() {
return new Promise((resolve, reject) => {
  const toqqreadvideourl ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/watch_video',
    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreadvideourl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ��Ƶ����: ${data}`)
     video =JSON.parse(data)

if (video.code==0)
 {
tz+=
'����Ƶ������:���'+video.data.amount+'���\n'

}

resolve()
    })
   })
  }  


//���佱��
function qqreadbox() {
return new Promise((resolve, reject) => {

  const toqqreadboxurl ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box',

    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreadboxurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ���佱��: ${data}`)
     box =JSON.parse(data)

if (box.data.count>=0)
 {
tz+=
'�����佱��'+box.data.count+'��:���'+box.data.amount+'���\n'

 } 
    
resolve()
    })
   })
  }  

//���佱������
function qqreadbox2() {
return new Promise((resolve, reject) => {

  const toqqreadbox2url ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box_video',

    headers: JSON.parse(qqreadheaderVal),
   timeout:60000};
   $.get(toqqreadbox2url,(error, response, data) =>{
     if(logs) $.log(`${jsname}, ���佱������: ${data}`)
     box2 =JSON.parse(data)

if (box2.code==0)
 {
tz+=
'�����䷭����:���'+box2.data.amount+'���\n'
}

resolve()
    })
   })
  }  

//�����Ķ�ʱ��
function qqreadwktime() {
return new Promise((resolve, reject) => {

  const toqqreadwktimeurl = {

    url: `https://mqqapi.reader.qq.com/mqq/v1/bookShelfInit`,

    headers: JSON.parse(qqreadheaderVal),
     
    };

   $.get(toqqreadwktimeurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �Ķ�ʱ��: ${data}`)
     wktime =JSON.parse(data)
     if (wktime.code==0)
tz+='�������Ķ�ʱ����:'+wktime.data.readTime+'����\n'

resolve()
    })
   })
  }  


//�����Ķ�ʱ����������
function qqreadpick() {
return new Promise((resolve, reject) => {
  const toqqreadpickurl = {
    url:`https://mqqapi.reader.qq.com/mqq/pickPackageInit`,
    headers: JSON.parse(qqreadheaderVal),     
    };

if (wktime.data.readTime>=wktimess){
    $.get(toqqreadpickurl,(error, response, data) =>{
     if(logs) $.log(`${jsname},���Ķ�ʱ����������: ${data}`)
     pick =JSON.parse(data)
     if (pick.data[7].isPick==true)
tz+='����ʱ��������:��ȫ����ȡ\n'
for(let i=0;i<pick.data.length;i++)
 {
	setTimeout(()=>{	 
var pickid=pick.data[i].readTime
var Packageid=['10','10','20','30','50','80','100','120'] 
const toqqreadPackageurl = {
    url:`https://mqqapi.reader.qq.com/mqq/pickPackage?readTime=${pickid}`,
    headers: JSON.parse(qqreadheaderVal),   
 timeout:60000};
    $.get(toqqreadPackageurl,(error, response, data) =>{
     if(logs) $.log(`${jsname}, �����Ķ�ʱ��: ${data}`)
     Package =JSON.parse(data)
     if (Package.code==0)
tz+='����ʱ������'+(i+1)+'��:��ȡ'+Packageid[i]+'�Ķ�\n'    
})			
    
 },i*100)}

})
    resolve()
 }
})
 }



function showmsg() {	
console.log(tz)
	
if (notifyInterval==1)
$.msg(jsname,'',tz)//��ʾ����֪ͨ

else if (notifyInterval==2&&task.data.treasureBox.doneFlag==0)
$.msg(jsname,'',tz)//������ȡ�ɹ�֪ͨ

else if (notifyInterval==3&&task.data.treasureBox.count==0||task.data.treasureBox.count==15||task.data.treasureBox.count==30||task.data.treasureBox.count==45||task.data.treasureBox.count==60)
$.msg(jsname,'',tz)//����ÿ15��֪ͨһ��

}


// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
