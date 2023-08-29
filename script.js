let btn = document.getElementById('btnTabuada')

btn.addEventListener('click', function(){
    tabuada()
})

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor insira um número')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ' '
        tab.style.display = 'block'

        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}