
var modsinfo=[{title:'Block buster addon mcpe',link:'../resources/stick.png',thmb:'thmb.png',pass:'abcd'},{title:'Minecraft but I became the KING !',link:'../index.html',thmb:'thmb2.png'},{title:'Minecraft sky mod',link:'../index.html',thmb:'thmb3.png'},{title:'Block buster addon mcpe',link:'../index.html',thmb:'thmb.png'}]
    var mod=document.getElementsByClassName('mod')
    
    for (let a = 0; a < modsinfo.length; a++) {
    document.getElementsByClassName('mods-container')[0].innerHTML+=`
    <div class="mod" onclick="var epass=prompt('Enter password','');if (epass  == '${modsinfo[a].pass}'){document.getElementById('download${a}').click()}">
        <img src="${modsinfo[a].thmb}" alt="">
    <label>${modsinfo[a].title}</label>
  
    </div>
    <a href="${modsinfo[a].link}" download="${modsinfo[a].link}" id="download${a}" style='display:none;'>Start</a>`
        
    }
    
    console.log(mod.length);
    document.getElementById('srch').onclick=()=>{
      var searchtxt=document.getElementById('search').value
    //   console.log(document.getElementsByClassName('mods-container').childs);
      var a=searchtxt.toUpperCase()
      for(var i=0;i<mod.length;i++){
        var labeltxt=mod[i].getElementsByTagName('label')[0].innerText
        var lut=labeltxt.toUpperCase()
        console.log(searchtxt);
          if (lut.match(a)) {
              console.log('nmwf4nkfwenklfwnljkeq');
              mod[i].style.display=''
          }else{
            mod[i].style.display='none'
          }
      }
    }
    var searchtxt=document.getElementById('search').value

