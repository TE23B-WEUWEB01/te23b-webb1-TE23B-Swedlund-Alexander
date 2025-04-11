function plus() {
    let tal1 = document.querySelector("#tal1");
    let tal2 = document.querySelector("#tal2");
    let svar = document.querySelector("#svar");

    svar.value = Number(tal1.value) + Number(tal2.value);
}