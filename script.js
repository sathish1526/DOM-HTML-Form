document.body.classList.add('container');

let form = createDomElement('form', document.body, [['onsubmit', check]]);

let formRow1 = createDomElement('div', form, [['class', 'form-row']]);
let firstName = createDomElement('div', formRow1, [['class', 'form-group col-md-6']]);
createDomElement('label', firstName, [['for', 'firstname'], ['textContent', 'First Name']]);
createDomElement('input', firstName, [['type', 'text'], ['class', 'form-control'], ['id', 'firstname'], ['required', true]]);
let lastName = createDomElement('div', formRow1, [['class', 'form-group col-md-6']]);
createDomElement('label', lastName, [['for', 'lastname'], ['textContent', 'Last Name']]);
createDomElement('input', lastName, [['type', 'text'], ['class', 'form-control'], ['id', 'lastname'], ['required', true]]);


let formRow2 = createDomElement('div', form, [['class', 'form-row']]);
let address = createDomElement('div', formRow2, [['class', 'form-group col']]);
createDomElement('label', address, [['for', 'address'], ['textContent', 'Address']]);
createDomElement('input', address, [['type', 'text'], ['class', 'form-control'], ['id', 'address'], ['required', true]]);



let formRow3 = createDomElement('div', form, [['class', 'form-row']]);
let pinCode = createDomElement('div', formRow3, [['class', 'form-group col-md-6']]);
createDomElement('label', pinCode, [['for', 'pincode'], ['textContent', 'Pincode']]);
createDomElement('input', pinCode, [['type', 'text'], ['class', 'form-control'], ['id', 'pincode'], ['required', true]]);
let gender = createDomElement('div', formRow3, [['class', 'form-group col-md-6']]);
createDomElement('label', gender, [['for', 'gender'], ['textContent', 'Gender']]);
let genderSelect = createDomElement('select', gender, [['class', 'form-control'], ['id', 'gender'], ['required', true]]);
let choose = createDomElement('option', genderSelect, [['selected', 'selected'], ['disabled', 'disabled'], ['textContent', 'Choose...']]);
createDomElement('option', genderSelect, [['textContent', 'Male']]);
createDomElement('option', genderSelect, [['textContent', 'Female']]);
createDomElement('option', genderSelect, [['textContent', 'Transgender']]);


let formRow4 = createDomElement('div', form, [['class', 'form-row'], ['id', 'foods']]);
let message = createDomElement('p', formRow4, [['class', 'col-12'], ['textContent', 'Select atleast two items to order: ']]);
let apple = createDomElement('div', formRow4, [['class', 'form-group col-md-2']]);
let applecheck = createDomElement('div', apple, [['class', 'form-check']]);
createDomElement('input', applecheck, [['type', 'checkbox'], ['class', 'form-check-input food'], ['id', 'apple']]);
createDomElement('label', applecheck, [['for', 'apple'], ['class', 'form-check-label'], ['textContent', 'Apple']]);
let orange = createDomElement('div', formRow4, [['class', 'form-group col-md-2']]);
let orangecheck = createDomElement('div', orange, [['class', 'form-check']]);
createDomElement('input', orangecheck, [['type', 'checkbox'], ['class', 'form-check-input food'], ['id', 'orange']]);
createDomElement('label', orangecheck, [['for', 'orange'], ['class', 'form-check-label'], ['textContent', 'Orange']]);
let mango = createDomElement('div', formRow4, [['class', 'form-group col-md-2']]);
let mangocheck = createDomElement('div', mango, [['class', 'form-check']]);
createDomElement('input', mangocheck, [['type', 'checkbox'], ['class', 'form-check-input food'], ['id', 'mango']]);
createDomElement('label', mangocheck, [['for', 'mango'], ['class', 'form-check-label'], ['textContent', 'mango']]);
let banana = createDomElement('div', formRow4, [['class', 'form-group col-md-2']]);
let bananacheck = createDomElement('div', banana, [['class', 'form-check']]);
createDomElement('input', bananacheck, [['type', 'checkbox'], ['class', 'form-check-input food'], ['id', 'banana']]);
createDomElement('label', bananacheck, [['for', 'banana'], ['class', 'form-check-label'], ['textContent', 'banana']]);
let avocado = createDomElement('div', formRow4, [['class', 'form-group col-md-2']]);
let avocadocheck = createDomElement('div', avocado, [['class', 'form-check']]);
createDomElement('input', avocadocheck, [['type', 'checkbox'], ['class', 'form-check-input food'], ['id', 'avocado']]);
createDomElement('label', avocadocheck, [['for', 'avocado'], ['class', 'form-check-label'], ['textContent', 'avocado']]);


let formRow5 = createDomElement('div', form, [['class', 'form-row']]);
let state = createDomElement('div', formRow5, [['class', 'form-group col-md-6']]);
createDomElement('label', state, [['for', 'state'], ['textContent', 'State']]);
createDomElement('input', state, [['type', 'text'], ['class', 'form-control'], ['id', 'state'], ['required', true]]);
let country = createDomElement('div', formRow5, [['class', 'form-group col-md-6']]);
createDomElement('label', country, [['for', 'country'], ['textContent', 'Country']]);
createDomElement('input', country, [['type', 'text'], ['class', 'form-control'], ['id', 'country'], ['required', true]]);

let formRow6 = createDomElement('div', form, [['class', 'form-row']]);
let submit = createDomElement('button', formRow6, [['type', 'submit'], ['class', 'btn btn-primary'], ['textContent', 'Submit']]);

createDomElement('br', document.body);
createDomElement('br', document.body);
createDomElement('br', document.body);

let tableDiv = createDomElement('div', document.body, [['class', 'row']]);

let table = createDomElement('table', tableDiv, [['style', 'visibility:hidden;'], ['class', 'table table-bordered col-12']]);
let thead = createDomElement('thead', table, [['class', 'thead-dark']]);
let tr = createDomElement('tr', thead);
let heads = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];
heads.forEach((val) => {
    createDomElement('th', tr, [['scope', 'col'], ['textContent', val]]);
});
let tbody = createDomElement('tbody', table);


function check(event) {
    let selected = 0;
    let foods = document.getElementsByClassName('food');
    let checked = []
    for (let j = 0; j < foods.length; j++) {
        if (foods[j].checked) {
            checked.push(foods[j].id);
            selected++;
        }
    }
    if (selected < 2) {
        message.style.color = 'red';
        event.preventDefault();
        return;
    }
    message.style.color = 'black';
    addToTable(checked);
    event.preventDefault();
    form.reset();
}



function addToTable(foods) {
    table.style.visibility = 'visible';
    let elems = form.elements;
    let tr = createDomElement('tr', tbody);
    createDomElement('td', tr, [['textContent', elems.firstname.value]]);
    createDomElement('td', tr, [['textContent', elems.lastname.value]]);
    createDomElement('td', tr, [['textContent', elems.address.value]]);
    createDomElement('td', tr, [['textContent', elems.pincode.value]]);
    createDomElement('td', tr, [['textContent', elems.gender.value]]);
    createDomElement('td', tr, [['textContent', foods.join(', ')]]);
    createDomElement('td', tr, [['textContent', elems.state.value]]);
    createDomElement('td', tr, [['textContent', elems.country.value]]);   
}


function createDomElement(elemtype,parent,attributes=[]){
    let elem = document.createElement(elemtype);
    attributes.forEach((value)=>{
        if(value[0]==='class'){
            let classes = value[1].split(' ');
            classes.forEach((className)=>{
                elem.classList.add(className);
            })
        }
        else{
            elem[value[0]]= value[1];
        }
    })
    parent.append(elem);
    return elem;
}