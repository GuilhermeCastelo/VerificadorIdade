function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var txtAno = document.getElementById('txtAno');
    var result = document.querySelector('div#result');

    if (txtAno.value.length == 0 || txtAno.value < 1900 || txtAno.value > ano) {
        result.innerHTML = '<p>O ano informado não é válido</p>';
    } else {
        var rdoSexo = document.getElementsByName('rdoSexo');
        var idade = (ano - txtAno.value);
        var genero = '';

        var foto = document.createElement('img');
        foto.setAttribute('id', 'foto');

        if (rdoSexo[0].checked) {
            genero = 'homem';

            if(idade < 10){
                foto.setAttribute('src', 'img/menino_crianca.jpg');
            }else if(idade < 21){
                foto.setAttribute('src', 'img/menino_jovem.jpg');
            }else if(idade < 50){
                foto.setAttribute('src', 'img/homem_adulto.jpg');
            }else{
                foto.setAttribute('src', 'img/homem_idoso.jpg');
            }

        } else {
            genero = 'mulher';

            if(idade < 10){
                foto.setAttribute('src', 'img/menina_crianca.jpg')
            }else if(idade < 21){
                foto.setAttribute('src', 'img/menina_jovem.jpg');
            }else if(idade < 50){
                foto.setAttribute('src', 'img/mulher_adulta.jpg');
            }else{
                foto.setAttribute('src', 'img/mulher_idosa.jpg');
            }
        }

        result.innerHTML = `<p>Detectado <strong>${genero}</strong> com <strong>${idade}</strong> anos</p>`;
        result.appendChild(foto);
    }
}