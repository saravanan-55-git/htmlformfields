// form = document.querySelector("#form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
// console.log("form submitted..");
// container = document.createElement('div');


//     parent = document.querySelector(".user-data");

    
    
//     fN = document.createElement('p')
//     fN_data = document.querySelector('[placeholder = "First Name"]')
//     fN.innerText = fN_data.value
//     container.append(fN)

//     lN = document.createElement('p')
//     lN_data = document.querySelector('[placeholder = "Last Name"]')
//     lN.innerText = lN_data.value
//     container.append(lN)

//     aN = document.createElement('p')
//     aN_data = document.querySelector('[placeholder = "address"]')
//     aN.innerText = aN_data.value
//     container.append(aN)

//     pN = document.createElement('p')
//     pN_data = document.querySelector('[placeholder = "pincode"]')
//     pN.innerText = pN_data.value
//     container.append(pN)

//     gN = document.createElement('p')
//     gN_data = document.querySelector('[id = "male"]')
//     if(gN_data.checked==true){
//     gN.innerText = gN_data.value}
//     container.append(gN)

//     gNf = document.createElement('p')
//     gNf_data = document.querySelector('[id = "female"]')
//     if(gNf_data.checked==true){
//     gNf.innerText = gNf_data.value}
//     container.append(gNf)

//     foN = document.createElement('p')
//     foN_data = document.querySelector('[id = "idly"]')
//     if(foN_data.checked==true){
//     foN.innerText = foN_data.value}
//     container.append(foN)

//     fo1N = document.createElement('p')
//     fo1N_data = document.querySelector('[id = "dosa"]')
//     if(fo1N_data.checked==true){
//     fo1N.innerText = fo1N_data.value}
//     container.append(fo1N)

//     fo2N = document.createElement('p')
//     fo2N_data = document.querySelector('[id = "pizza"]')
//     if(fo2N_data.checked==true){
//     fo2N.innerText = fo2N_data.value}
//     container.append(fo2N)   

//     fo3N = document.createElement('p')
//     fo3N_data = document.querySelector('[id = "sandwich"]')
//     if(fo3N_data.checked==true){
//     fo3N.innerText = fo3N_data.value}
//     container.append(fo3N)

//     fo4N = document.createElement('p')
//     fo4N_data = document.querySelector('[id = "burger"]')
//     if(fo4N_data.checked==true){
//     fo4N.innerText = fo4N_data.value}
//     container.append(fo4N)

//     sN = document.createElement('p')
//     sN_data = document.querySelector('[placeholder = "State"]')
//     sN.innerText = sN_data.value
//     container.append(sN)

//     cN = document.createElement('p')
//     cN_data = document.querySelector('[placeholder = "Country"]')
//     cN.innerText = cN_data.value
//     container.append(cN)

//     var cel1 = NewRow.insertCell(0);
//     var cel2 = NewRow.insertCell(1);
//     var cel3 = NewRow.insertCell(2);
//     var cel4 = NewRow.insertCell(3);
//     var cel5 = NewRow.insertCell(4);
//     var cel6 = NewRow.insertCell(5);
//     var cel7 = NewRow.insertCell(6);
//     var cel8 = NewRow.insertCell(7);

//     cel1.innerHTML = fN;
//     cel2.innerHTML = lN;
//     cel3.innerHTML = aN;
//     // cel4.innerHTML = fN;
//     // cel5.innerHTML = fN;
//     // cel6.innerHTML = fN;
//     // cel7.innerHTML = fN;
//     // cel8.innerHTML = fN;



//      //table = document.createElement('table');
     
//     // //table.setattribute("border") = 1;
//     // tr = document.createElement("tr");
//     // th1 = document.createElement("th");
//     // th2 = document.createElement("th");
//     // th3 = document.createElement("th");
//     // th4 = document.createElement("th");
//     // th5 = document.createElement("th");
//     // th6 = document.createElement("th");
//     // th7 = document.createElement("th");
//     // th8 = document.createElement("th");

//     parent.append(container);
// })



// form = document.querySelector("#form");
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     parent = document.querySelector('.userdata table')

//     row_table = document.createElement('tr')

//     arrData = ["First","Last","address","pincode","State","Country"]

//      console.log(document.querySelector(`[placeholder *= "First Name"]`).value);
//      console.log(document.querySelector(`[placeholder *= "Last Name"]`).value);
//      console.log(document.querySelector(`[placeholder *= "address"]`).value);
//      console.log(document.querySelector(`[placeholder *= "pincode"]`).value);
//      console.log(document.querySelector(`[placeholder *= "State"]`).value);
//      console.log(document.querySelector(`[placeholder *= "Country"]`).value);

//     for(let i of arrData){
//         fN = document.createElement('td')
//         fN_data = document.querySelector(`[placeholder*=${i}]`)
//         fN.innerText = fN_data.value
//         row_table.append(fN)
//         fN_data.value = ''
//     }
//     parent.append(row_table)


form = document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    parent = document.querySelector('.user-data table')

    row_table = document.createElement('tr')

    arrData = ["First","Last","address","pincode","State","Country"]

    for(let i of arrData){
        fN = document.createElement('td')
        fN_data = document.querySelector(`[placeholder*=${i}]`)
        fN.innerText = fN_data.value
        row_table.append(fN)
        fN_data.value = ''
    }
    parent.append(row_table)




// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     parent = document.querySelector('.userdata table');
//     row_table = document.createElement('tr');

//     arrData = ["First","Last","address","pincode","State","Country"];
//     console.log(document.querySelector(`[placeholder *= "First Name"]`).value);
//     console.log(document.querySelector(`[placeholder *= "Last Name"]`).value);
//     console.log(document.querySelector(`[placeholder *= "address"]`).value);
//     console.log(document.querySelector(`[placeholder *= "pincode"]`).value);
//     console.log(document.querySelector(`[placeholder *= "State"]`).value);
//     console.log(document.querySelector(`[placeholder *= "Country"]`).value);

//     for(let i of arrData){
//         fN = document.createElement('td')
//             fN_data = document.querySelector(`[placeholder *=${i}]`)
//             fN.innerText = fN_data.value
//             row_table.append(fN)
            
// //     gN = document.createElement('td')
// //     gN_data = document.querySelector(`[placeholder*=${i}]`)
// //    // if(gN_data.checked==true){
// //     row_table = gN_data.value//}
// //     row_table.append(gN)
// //     gN_data.value = ""    
//     fN_data.value = ''
//     }
    
    // parent.append(row_table);
})