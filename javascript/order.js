let ctrlz = [];
window.onload = function () {
    document.getElementById("ticketLabel").style.background = "white";
    document.getElementById("diningLabel").style.background = "rgb(201, 1, 1)";
    document.getElementById("hotelLabel").style.background = "rgb(201, 1, 1)";
    document.getElementById("menu_ticket").style.display = "block";
}
document.getElementById("ticketLabel").addEventListener("click", function() {
    change("menu_ticket", "menu_dinings", "menu_hotel", "ticketLabel", "diningLabel", "hotelLabel")
});
document.getElementById("diningLabel").addEventListener("click", function() {
    change("menu_dinings", "menu_ticket", "menu_hotel", "diningLabel", "ticketLabel", "hotelLabel")
});
document.getElementById("hotelLabel").addEventListener("click", function() {
    change("menu_hotel", "menu_dinings", "menu_ticket", "hotelLabel", "diningLabel", "ticketLabel")
});
function change(ticket1, ticket2, ticket3, labwh, labred1, labred2) {
    document.getElementById(ticket1).style.display = "block";
    document.getElementById(ticket2).style.display = "none";
    document.getElementById(ticket3).style.display = "none";
    document.getElementById(labwh).style.background = "white";
    document.getElementById(labred1).style.background = "rgb(201, 1, 1)";
    document.getElementById(labred2).style.background = "rgb(201, 1, 1)";
}

function recal() {
    let ans = 0;
    let tb = document.querySelector("tbody");
    for (let i = 0; i < tb.children.length; i++) {
        ans = eval(ans + '+' + tb.children[i].children[1].textContent);
    }
    document.getElementById("totalqty").innerHTML = ans;
}

let frms = document.querySelectorAll("form");
for (let i = 0; i < frms.length; i++) {
    frms[i].children[3].addEventListener("click", function() {
        additem(frms[i].children[1].textContent);
    });
    frms[i].onsubmit = function() {
        return false;
    }
    function additem(str) {
        let tb = document.querySelector("tbody");
        let ok = false;
        let val = frms[i].children[2].value
        for (let i = 0; i < tb.children.length; i++) {
            if (tb.children[i].children[0].textContent == str) {
                ok = true;
                if (+val) {
                    tb.children[i].children[1].innerHTML = eval(tb.children[i].children[1].textContent + '+' + val.toString());
                    ctrlz.push(+val);
                }
                else {
                    tb.children[i].children[1].innerHTML = eval(tb.children[i].children[1].textContent + '+ 1');
                    ctrlz.push(1);
                }
                break;
            }
        }
        if (!ok) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            tb.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            td1.setAttribute("class", "description");
            td2.setAttribute("class", "quantity");
            td1.innerHTML = str;;
            if (val > 0) {
                td2.innerHTML = val;
                ctrlz.push(val);
            }
            else {
                td2.innerHTML = 1;
                ctrlz.push(1);
            }
        }
        recal();
    }
}

function undo() {
    let check = document.querySelector("tbody").lastChild;
    if (check != null) {
        let last = document.querySelector("tbody").lastChild.children;
        // if (eval(last[1].textContent) > ctrlz[ctrlz.length - 1]) {
        //     last[1].innerHTML = eval(last[1].textContent + '-' + ctrlz[ctrlz.length - 1]);
        //     ctrlz.pop();
        // } else {
        //     document.querySelector("tbody").lastChild.remove();
        //     ctrlz.pop();
        // }
        document.querySelector("tbody").lastChild.remove();
        recal();
    }
    return false;
}