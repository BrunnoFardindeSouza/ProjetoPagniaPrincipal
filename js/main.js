/* ABRINDO E FECHANDO MENU FLUTUANTE */
const iconeBurguer = document.getElementById('burguer');
const menuHamburguer = document.getElementById('menuFlutuante');
const voltarmenuhamburguer = document.getElementById('voltar');

iconeBurguer.addEventListener('click',()=>{
    if(menuHamburguer.style.display == 'none'){
        menuHamburguer.style.display = 'flex'
    }else{
        menuHamburguer.style.display = 'none'
    }
})
voltarmenuhamburguer.addEventListener('click',()=>{
    menuHamburguer.style.display = 'none'
})
window.onresize = ()=>{
    if(window.innerWidth >= 637){
        menuHamburguer.style.display = 'none'
    
    }

}

/*CRIANDO TEMPLATES */

function criarTemplate(qtd){
    const conteinerPai = document.getElementById('templates');
    for(c = 0;c<=qtd;c++){
        // Div mãe
            const template = document.createElement('div');
            template.setAttribute('class','produtos');
        // seções
          // seção-01
            const secao01 = document.createElement('section');
            secao01.setAttribute('class','secao-1 secoes');

            const img = document.createElement('img');
            img.setAttribute('src','#')
            img.setAttribute('class','imgs_p')
            secao01.appendChild(img)

         // seção-02
            const secao02 = document.createElement('section');
            secao02.setAttribute('class','secao-2 secoes');
            const h2 = document.createElement('h2')
            secao02.appendChild(h2)
            const p = document.createElement('p');
            secao02.appendChild(p)
        // seção-03
            const secao03 = document.createElement('section');
            secao03.setAttribute('class','secao-3 secoes');
            const btn = document.createElement('button')
            btn.innerHTML='Editar'
            btn.setAttribute('class','editores')
            secao03.appendChild(btn)
        // Implementando seções
            template.appendChild(secao01);
            template.appendChild(secao02);
            template.appendChild(secao03);

        // implementando template
            conteinerPai.appendChild(template)
    }
}
criarTemplate(4)

// Modificnado conteudo

const editores = [...document.getElementsByClassName('editores')];

editores.map((el,i,a)=>{
    el.addEventListener('click',()=>{
        const produtos = el.parentElement.parentElement;
        const secao = prompt('Seção que deseja editar [ 1 imagem, 2 Titulo/Parágrafo]');

        if(secao == 1){
            const link = prompt("Link da imagem");
            const img = produtos.firstElementChild.firstChild.src=link;

        }else if(secao == 2){
            const h2 = prompt("Titulo");
            produtos.firstElementChild.nextElementSibling.firstChild.innerHTML=h2;
            const p = prompt('Parágrafo');
            produtos.firstElementChild.nextElementSibling.lastChild.innerHTML=p


        }else{
            alert('Seção não encontrada');
        }
    })
});