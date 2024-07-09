function Enviar(){
    let nomeCompleto = document.getElementById('nomeUsuario').value 
    let seuEmail = document.getElementById('seuEmail').value 
    let suaIdade =  document.getElementById('suaIdade').value 

    let generoUsuario = document.querySelector("input[name='Genero']:checked").value 

    alert('Seu Nome é: ' + nomeCompleto + 
        '\nSeu Email é: ' + seuEmail + 
        '\nSua Idade é: ' + suaIdade + 
        '\nSeu gênero é: ' + generoUsuario
        )

 window.location.href = 'NovaTela/biblioteca1.html' // pra voltar pra tela inicial é ../ e o nome da pasta e arquivo 

}

function Voltar(){
window.location.href = '../biblioteca.html'
    
}


