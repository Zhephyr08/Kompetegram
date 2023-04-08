function cek_jawaban(){
    const HongKong = document.querySelector('#Hongkong')
    const satu_response = document.querySelector('#satu_response')

    const dua = document.querySelector('#dua_response')
    const rome = document.querySelector('#Rome')

    const tiga = document.querySelector('#tiga_response')
    const Spnaish = document.querySelector('#Spnaish')

    const empat = document.querySelector('#empat_response')
    const Smith = document.querySelector('#Smith')

    const lima = document.querySelector('#lima_response')
    const Apollo = document.querySelector('#Apollo')

    if(HongKong.value == 'Hongkong'){
        satu_response.innerHTML = (' jawaban anda benar ')
        satu_response.style = " color: green;"
    }else{
        satu_response.innerHTML = (' jawaban anda salah ')
        satu_response.style = " color: red;"
    }

    if(Rome.value == 'Rome'){
        dua_response.innerHTML = (' jawaban anda benar <br>')
        dua_response.style = " color: green;"
    }else{
        dua_response.innerHTML = (' jawaban anda salah <br>')
        dua_response.style = " color: red;"
    }

    if(Spnaish.value == 'Spnaish'){
        tiga_response.innerHTML = (' jawaban anda benar ')
        tiga_response.style = " color: green;"
    }else{
        tiga_response.innerHTML = (' jawaban anda salah ')
        tiga_response.style = " color: red;"
    }

    if(Smith.value == 'Smith'){
        empat_response.innerHTML = (' jawaban anda benar ')
        empat_response.style = " color: green;"
    }else{
        empat_response.innerHTML = (' jawaban anda salah ')
        empat_response.style = " color: red;"
    }

    if(Apollo.value == 'Apollo'){
        lima_response.innerHTML = (' jawaban anda benar ')
        lima_response.style = " color: green;"
    }else{
        lima_response.innerHTML = (' jawaban anda salah ')
        lima_response.style = " color: red;"
    }
}