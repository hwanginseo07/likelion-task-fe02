let addbtn = document.querySelector('.btn');
let inputBox = document.querySelector('.inputcontent');

addbtn.addEventListener('click', function () {
    
    if(inputBox.value !== '') {
    let div = document.createElement('div');
    let parantDiv = document.querySelector('.todolist');
    div.textContent = inputBox.value;
    parantDiv.appendChild(div);

    let addCHECKbox = document.createElement('input');
    addCHECKbox.setAttribute('type', 'checkbox');
    div.prepend(addCHECKbox);

    addCHECKbox.addEventListener('change', function () {

    if (addCHECKbox.checked) {
        div.style.textDecoration = 'line-through';
    } else {
        div.style.textDecoration = 'none';
    }
    });
    

    let addREMOVEbtn = document.createElement('button');
    addREMOVEbtn.textContent = 'x';
    addREMOVEbtn.setAttribute('class', 'remove-btn');
    div.appendChild(addREMOVEbtn);

    inputBox.value='';
    inputBox.focus();

    addREMOVEbtn.addEventListener('click', function (event) {
        event.target.parentNode.remove();
    
    }); 
    }
});

