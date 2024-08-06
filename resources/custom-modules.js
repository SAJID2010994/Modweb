class fa{
  Create(color,image){
    var btn=document.createElement('button')
    btn.setAttribute('id','fav')
    btn.setAttribute('style',`position:fixed;top:34em;left:9.7em;border-radius: 30px;width: 60px;height: 60px;background-color: ${color};border: none;`)
    var img=document.createElement('img')
    img.setAttribute('src',image)
    /*document.querySelector('body').innerHTML+=`
   <button id="fav" style="  position:fixed;top:34em;left:9.7em;border-radius: 30px;width: 60px;height: 60px;background-color: ${color};border: none;">➕</button>*/
   img.setAttribute('style','width: 30px;padding-top: 2px;')
   btn.appendChild(img)
   document.getElementsByTagName('body')[0].appendChild(btn)
  }
  AddFunction(funcction){
    document.getElementById('fav').setAttribute('onclick',`${funcction}`)
  }
}
class tool {
  Create(Text, Color) {
    const a = xxxxxdocument.querySelector('body');
    var dialog=document.createElement('dialog');
    a.appendChild(dialog)
    dialog.setAttribute('open','true')
    dialog.setAttribute('id',"toolbar")
    dialog.setAttribute('style',`width: auto;position:fixed;top:-1.5px;background-color:${Color};color:white;left:-5px;height:25px;box-shadow: 2px 2px 6px 0px black;font-size:20px;border:none;`)
    var text=document.createTextNode(`${Text}`);
    dialog.appendChild(text)
    
    
  }
  CreateOption(quantity,image) {
var style=document.createElement('style');
var stylecode=document.createTextNode(`.js{
  padding-top: 25px;position: relative;left: -20px;top: -6.8px;
}
.active{
   background:#FFF;text-decoration:none;position:relative;box-shadow: 2px 2px 6px;border-radius:2px;width:10em;list-style:none;position:fixed;right:5px;top:-14px; animation-name: jk;
   animation-duration: 0.2s;
}
.hidden{
  visibility:hidden;
}
#optionbtn{
  position: relative;
  float:right;
  background:none;
  border:none;
  
}
@keyframes jk{
  0%{
  width:0%;
  height:0%;
  scale:0%;
  }
  100%{
  width:none;
  height:none;
  scale:none;
}
@keyframes je{
  0%{
    opacity:100%
  }
  92%{
    opacity:0%;
  }
  100%{
    visibility:hidden;
  }
}
`)
style.appendChild(stylecode)



document.getElementsByTagName('body')[0].appendChild(style)
  /*  document.getElementsByTagName('style')[0].innerHTML += `#js{
  background:#FFF;text-decoration:none;position:relative;box-shadow: 2px 2px 6px;border-radius:2px;width:10em;list-style:none;position:fixed;right:5px;top:-14px;
 animation-name: js;
 animation-duration: 0.4s;
 
}
.js{
  padding-top: 25px;position: relative;left: -20px;top: -6.8px;
}
#optionbtn{
  position: relative;
  left: 10em;
}

`*/
var button=document.createElement('button')
button.setAttribute('id','optionbtn')
document.getElementById('toolbar').appendChild(button)
    var img = document.createElement('img')
    img.setAttribute('src', image)
    img.setAttribute('style', 'width: 30px;')
    button.appendChild(img)
    /*document.getElementById('toolbar').innerHTML += `
    <button id="optionbtn">Test</button>
    `*/
var ol=document.createElement('ol')
ol.setAttribute('id','js')
ol.setAttribute('class','hidden')
document.getElementsByTagName('body')[0].appendChild(ol)
    /*document.getElementsByTagName('body')[0].innerHTML += `
    <ol id="js" >

    </ol>
    `*/
    var i = 1;
    while (i <= quantity + 1) {
      i++
      var li=document.createElement('li')
      li.setAttribute('class','js')
      document.getElementById('js').appendChild(li)
     /* document.getElementById('js').innerHTML += `
       <li class="js"></li>

`*/
      console.log(1)
    }
    var a = 0;
    document.getElementById('optionbtn').addEventListener('click', () => {

     /* document.getElementsByTagName('style')[0].innerHTML += `@keyframes js{
  0%{
    scale: 0%;
    width: 0%;
    height:0%;
}
  100%{
    scale:100%;
    width:none;
    height:none;
  }
}


`*/
      document.getElementById('js').setAttribute('class','active')
      setTimeout(() => {
        a = 1

      }, 50)

    })
    window.addEventListener('click', () => {
      if (a == 1) {
        /*document.getElementsByTagName('style')[0].innerHTML += `
        @keyframes ja{
          0 % {
            opacity: 20 % ;
          }
          100 % {
            opacity: 80 % ;
          }
        }
        `*/
        document.getElementById('js').setAttribute('class','hidden')
        a = 0
        console.log('@')
      }

    })
  }
  NameOptions(optionnumber, name) {
    var text=document.createTextNode(name)
    document.getElementsByClassName('js')[optionnumber].appendChild(text)
  }
  AddFunctiontoOptions(optionnumber, functionn) {
    document.getElementsByClassName('js')[optionnumber].addEventListener('click',functionn)
  }
}
class atabase {
  save(url, form,nextfunction) {
    return form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(url, { method: 'POST', body: new FormData(form) }).then(nextfunction)
    })
  }
  get(url) {
    return fetch(url).then(res => res.json())
  }
}
var Fav=new fa();
var ToolBar=new tool();
var DataBase=new atabase();
export{Fav,ToolBar,DataBase}