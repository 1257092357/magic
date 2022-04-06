/**
 * 打字效果 byaei
 */
 function typewrite()
 {
     let str="<我愿意为一个人，写满整个世界的情诗<因为我喜欢她，因为......我也想给她哪怕一点点的浪漫<因为当代码不止是代码的时候，它就有了新的意义。<";//利用<作为换行符 -作为空格
     let strp="";
     let i=0;
     function print1()
     {
         if(str[i]=='<')
         {
             document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
             strp+="<br><br>";
         }
         else
         if(str[i]=='-')
         {
             document.getElementById("box1").innerHTML=strp+'&nbsp&nbsp&nbsp';
             strp+="&nbsp&nbsp&nbsp";
         }
         else
         {
             strp+=str[i];
             document.getElementById("box1").innerHTML=strp+'|';
         }
         i++;
     }
     function print2()
     {
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'&nbsp';},100);
         setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
     }
     let printid=setInterval(() => {
         print1();
         if(i==str.length)
         clearInterval(printid);
     },90);  
     setTimeout(() => {
         id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
     },(str.length-1)*90);
     //0.53秒闪一次
 }
 



let clickb=false;//判断播放按钮是否已经按过了，如果已经按过了才可以执行键盘事件
 
 function funclick()
 {
     let x = document.createElement("audio");
     x.setAttribute("src", "./video/55.mp3");
     x.setAttribute("autoplay","autoplay");
     let yinyan=document.getElementById("yinyan");
     yinyan.setAttribute("style","opacity:0");
     setTimeout(function(){
         document.getElementById("fronclick").style.zIndex=-300;
         document.getElementById("box").style.opacity=1;
     },1500);//让播放按钮消失了
     //yinyan.style.opacity=0;
     clickb=true;
 }


 
 
 let k={
     a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
     A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
 } 
 let a=[
     {name:"A",yin:8, str:"<br><br><br>人生快意十之八九，岁岁倾慕岁岁与共<br><br>还有....,其他的键<br><br>那些都是关于祝福的声音。以及，找一下声音里的诗意。"},
     {name:"B" ,yin:2, str:`<br><br><br>若逢新雪初霁，满月当空<br>下面平铺着皓影，上面流转着亮银，<br><br>而你面带微笑，<br><br>月色和雪色之间 ，是第三种绝色 ，<br><br> 日月星辉之中，你是第四种难得。`},
     {name:"C" ,yin:3, str:"<br><br><br><br>愿天上人间，占得欢娱，年年今日。<br><br>希望你的枕头柔软，也希望你的美梦圆满。<br><br>我会在每年这个时刻，送上美好的祝福。"},
     {name:"D" ,yin:4, str:"<br><br><br><br>生聚同相庆<br><br>日盼共言欢<br><br>快意颜永驻，乐与枝理连。"},
     {name:"E" ,yin:5, str:"<br><br><br><br>愿你是能披荆斩棘的大人物<br><br>也能是被人疼爱的小朋友。<br><br>愿你每一岁都能奔走在自己的热爱里。"},
     {name:"F" ,yin:6, str:"<br><br><br><br>祝福千言万语<br><br>再来一句<br><br>笔给你"},
     {name:"G" ,yin:7, str:"<br><br>今晚的星星只有十九颗<br><br>当你数到第十九颗<br><br>你就闭上眼睛<br></br>就当是我给你吹灭的蜡烛。"},
     {name:"H" ,yin:5, str:"<br><br>你的双眸有遥远的冬雪，你的微笑有绚烂的夏阳，<br></br>你一转身便有花开为你，你一低头便有星辰黯然，<br></br>因此不用奔赴大海也能春暖花开"},
     {name:"I" ,yin:3, str:"<br><br>我见过沧海的云，巫峡的雨。 <br>我见过一月的雪覆于白山，又渐变于葱茏。 <br>我在峨眉的林里云兴霞蔚， 一径之后，雾水成露，沾于衣襟。<br>我听过柔橹漂浮，声声入水，又归于沉寂。 <br>我看到春风八里十里，衣袖带花。 无论何时忆起， 它们实在是人生可喜， <br><br>一切一切今日都想分享给你。"},
     {name:"J" ,yin:10, str:"<br><br><br><br>花盛开就是一句，夜漫过就是一篇。<br><br>黄昏开始书写，黎明是无数的扉页。<br><br>今日全世界拼成首诗。生日快乐当作最后一行。"},
     {name:"K" ,yin:11, str:"<br><br>愿时光能缓<br><br>愿故人不散<br><br>愿你惦念的人能和你道晚安<br></br>愿你长大后的日子里不觉得孤单。"},
     {name:"L" ,yin:8, str:"<br><br><br><br>世界上美好的东西不太多,<br><br>立秋傍晚从河对岸吹来的风,<br><br>和十九岁笑起来要人命的你。"},
     {name:"M" ,yin:13, str:"<br><br><br><br>“一岁一礼 ，一寸欢喜。 <br></br>旦逢良辰，顺颂时宜。<br><br>从今把定春风笑，且作人间长寿仙。”"},
     {name:"N" ,yin:3, str:"<br><br><br><br>月亮照回湖心<br><br>野鹤奔向闲云<br><br>美好未来步向你"},
     {name:"O" ,yin:7, str:"<br><br><br><br>让阳光普照你所有的日子，<br><br>让花朵开满你人生的旅途<br><br>愿您以后的人生，<br><br>充满着欢愉和成功。"},
     {name:"P" ,yin:16, str:"<br><br><br><br>草在结它的种子，<br><br>风在摇它的叶子，<br><br>、他们仿佛在说你好：十九岁女孩。"},
     {name:"Q" ,yin:17, str:"<br><br><br><br>送你一碗长寿面<br><br>愿你幸福如面条长长久久<br><br>生活如面汤香甜美味"},
     {name:"R" ,yin:18, str:"<br><br><br><br>你的善良使这个世界变得更加完美<br><br>愿这完全属于你的一天带给你欢快<br><br>愿未来的日子锦上添花!"},
     {name:"S" ,yin:19, str:"<br><br>今日阳光明媚，今日鲜花灿烂<br><br>还有小鸟欢叫，更有绿荫葱茏<br></>要问有何喜事，原来你的生日。"},
     {name:"T" ,yin:20, str:"<br><br>今日每一朵幸福的花都为你而开<br><br>每一张快乐的脸都为你而笑<br><br>每一封祝福的信都为你而发。"},
     {name:"U" ,yin:5, str:"<br><br>祈祷你天天有今日快乐<br><br>岁岁有今朝幸福<br><br>哼唱一首简单的歌：小慕，生日快乐!"},
     {name:"V" ,yin:22, str:"<br><br><br><br>用彩虹编织你的梦，用甜蜜围绕你的笑<br><br>用舒坦揭开你的心，用顺利装修你的路<br><br>用快乐祝福你的生日，祝你永远平安如意，美丽无比。"},
     {name:"W" ,yin:3, str:"<br><br><br><br>大自然的美术师在这一天为你涂上重重的色彩。<br><br>在这天中最温馨的一天带给你五颜六色的梦<br><br>生日快乐。"},
     {name:"X" ,yin:2, str:"<br><br><br><br>花朝月夕，如诗如画<br><br>在这个真正属于你的日子里<br><br>愿你拥抱未来，愿你的容颜像春天般绚烂。"},
     {name:"Y" ,yin:25, str:"<br><br><br><br>月遇从云，花遇和风，<br><br>今晚上的夜空很美，<br><br>星星组成了生日蛋糕。"},
     {name:"Z" ,yin:26, str:"<br><br><br><br>太阳是金色的，月亮是银色的<br><br>我的祝福是彩色的，愿你被幸福追逐<br><br>被好运降伏，被快乐逮捕，被笑容粘住。"}
 ];
 let b=["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
 "linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
 "linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
 "linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
 "linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
 "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
 "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
 "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
 "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
 "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
 "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
 "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
 "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
 "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
 "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
 "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
 "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
 "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
 "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
 "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
 "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
 "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
 "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
 "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
 "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
 "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 
 
 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
     if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
     {
         let p=a[k[key]];
         s=s+p.name;
         let x = document.createElement("audio");
         x.setAttribute("src", `./video/${p.yin}.mp3`);
         x.setAttribute("autoplay","autoplay");
         let box=document.getElementById("box");
         let boxl=document.getElementById("boxl");
         let boxr=document.getElementById("boxr");
         let boxup=document.getElementById("boxup");
         let bac=document.getElementById("bac");
         bac.style.opacity=0;
         box.style.transition="0.5s";
         box.style.opacity=0;
         boxup.style.opacity=0;
         setTimeout(function()
         {
         boxl.innerHTML=`${p.name}`;
         boxr.innerHTML=`${p.str}`;
         console.log(b[k[key]]);
         bac.style.background=`${b[k[key]]}`;
         box.style.opacity=1;
         boxup.style.opacity=1;  
         bac.style.opacity=1;
         },500);
         if(s.indexOf("XIAOLUXIAOLUWXHN")!=-1&&records==0)
         {
             setTimeout(function()
             {
                 records=1;
                 bac.style.opacity=0;
                 box.style.opacity=0;
                 boxup.style.opacity=0;  
                 bac.style.opacity=0;
                 let box1=document.getElementById("box1");
                 box1.style.zIndex=7;
                 box1.style.opacity=1;
                 let music=document.createElement("audio");
                 x.setAttribute("src", `./video/snjxh.mp3`);
                 x.setAttribute("autoplay","autoplay");
                 x.setAttribute("loop","loop");
             },750);
             setTimeout(typewrite,3000);//进行打字
         }
     }
     }  
 }
 
 
 window.onkeyup=fl;