let lgpdHtml = `

<link rel="stylesheet" href="style.css">

<div class="lgpd">
<div class="lgpd--left">
    Nós utilizamos cookie para melhorar sua experiência do usuário. 
    Para conferir detalhamente todos os cookies utilizados, leia nossa <a href="#">Política de privacidade.</a>
</div>
<div class="lgpd--right">
    <button>OK</button>
</div>
</div>
`

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');
    
    lgpdButton.addEventListener('click', ()=>{
        lgpdArea.remove();
        localStorage.setItem('lgpd');
    });
}