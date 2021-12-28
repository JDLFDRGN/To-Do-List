let form=document.querySelector('form');
let input=document.querySelector(`input[type='text']`);
let list=document.querySelector('.list>ul');
let create=[], createText=[], createExit=[], num=0;
form.addEventListener('submit',e=>{
    e.preventDefault();
    create[num]=document.createElement('li');
    createExit[num]=document.createElement('img');
    createText[num]=document.createTextNode(input.value);
    list.appendChild(create[num]);
    create[num].appendChild(createText[num]);
    create[num].appendChild(createExit[num]);
    createExit[num].setAttribute('src','exit.svg');
    createExit.forEach((e,index)=>{e.addEventListener('click',()=>{
        create[index].remove();
    })});
    create.forEach((e,index)=>{e.addEventListener('click',()=>{
        create[index].style.textDecoration='line-through';
    })})
    num++;
    reset();
});

function reset(){
    input.value='';
}
