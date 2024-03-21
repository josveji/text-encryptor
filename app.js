

const text_to_encrypt = document.querySelector("#text-to-encrypt"); 
const text_to_decrypt = document.querySelector("#encrypted-text");

const matrix_code = 
[
    ["e", "enter"], // index 0
    ["i", "imes"],  // index 1
    ["a", "ai"],    // index 2
    ["o", "ober"],  // index 3
    ["u", "ufat"]   // index 4
];

console.log(text_to_encrypt);
console.log(text_to_decrypt);

function Btn_encrypt(){
    const encrypted_text = Encrypt(text_to_encrypt.value);
    console.log(encrypted_text);
    assign_Element("encrypted-text", encrypted_text);
};


function Encrypt(Encrypted_text){
    for (let i = 0; i < matrix_code.length; i++){
        if (Encrypted_text.includes(matrix_code[i][0])){
            Encrypted_text = Encrypted_text.replaceAll(
                matrix_code[i][0],
                matrix_code[i][1]
            )
        }
    };
    return Encrypted_text;
};

function Btn_decrypt(){
    const decrypted_text = Decrypt(text_to_encrypt.value);
    console.log(decrypted_text);
    assign_Element("encrypted-text", decrypted_text);
};

function Decrypt(Encrypted_text){
    for (let i = 0; i < matrix_code.length; i++){
        if (Encrypted_text.includes(matrix_code[i][1])){
                Encrypted_text = Encrypted_text.replaceAll(
                matrix_code[i][1],
                matrix_code[i][0]
            )
        }
    };
    return Encrypted_text;
};

function assign_Element(element_id, text){
    let elementHTML = document.getElementById(element_id);
    elementHTML.innerHTML = text;
};

function Btn_copy(){
    const to_copy = document.getElementById("encrypted-text")
    to_copy.select();
    navigator.clipboard.writeText(to_copy.value);
    alert("The text was successfully copied");
};