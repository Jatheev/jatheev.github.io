function transformUpperCase(_val){
    return _val.toUpperCase();
}


let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUpperCase(elNamaPengguna.value)
})

function checkPassword(){
    let elkataLaluan = document.getElementById("kataLaluan")
    let pass_val = elkataLaluan.value
    if (pass_val.length >5){
        alert("Password check...OK!")
    }
    else {
        alert("Password too short!")
    }
}

let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword