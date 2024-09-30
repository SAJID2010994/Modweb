import {DataBase} from '../resources/custom-modules.js'
var modsinfo;

    DataBase.get('info.json').then((data)=>{

      modsinfo=data
      
      var mod=document.getElementsByClassName('mod')
    for (let a = 0; a < modsinfo.length; a++) {
      document.getElementsByClassName('mods-container')[0].innerHTML+=`
      <div class="mod" onclick="var epass=prompt('Enter password','');if (epass  == '${modsinfo[a].pass}'){document.getElementById('download${a}').click()}else if(epass  == null){return}else{Swal.fire({icon: 'error',title: 'Wrong password',text: 'You entered wrong password !Password can be found in my video !',footer: 'Video link:<a href=${modsinfo[a].vid}>${modsinfo[a].vid}</a>'})}">
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
  
  
    })