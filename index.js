
var curr = "";
function open_page(event, a, b) {
    let ele = event.currentTarget;
    if (curr == "") {
        curr = ele;
        curr.style.borderBottom = "2px solid white";
    }
    else {
        curr.style.borderBottom = "none";
        curr = ele;
        curr.style.borderBottom = "2px solid white";
    }
    let page1 = document.getElementById(a);
    let page2 = document.getElementById(b);
    page1.style.display = "block";
    page2.style.display = "none";
}
document.getElementById("prod_link").click();

function open_filter(event) {
    let ele = event.currentTarget;
    if (ele.nextElementSibling.style.display == "block") {
        ele.nextElementSibling.style.display = "none";
    }
    else {
        ele.nextElementSibling.style.display = "block";
    }
}

function create_ele(el) {
    return document.createElement(el);
}

var list_of_items = {
    1: { name: "Black T-Shirt", url: "black.webp", price: 150, gender: ["men"], colors: ["black"], type: ["T-Shirt"], range: "[0,250]" },
    2: { name: "Blue T-Shirt", url: "blue tshirt.webp", price: 400, gender: ["men"], colors: ["blue"], type: ["T-Shirt"], range: "[250,500]" },
    3: { name: "White T-Shirt", url: "white tshirt.webp", price: 200, gender: ["men"], colors: ["white"], type: ["T-Shirt"], range: "[0,250]" },
    4: { name: "Green T-shirt", url: "green tshirt.webp", price: 450, gender: ["women"], colors: ["green"], type: ["T-Shirt"], range: "[250,500]" },
    5: { name: "Red hoodie", url: "red hoodie m.jpeg", price: 600, gender: ["men"], colors: ["red","black"], type: ["hoodie"], range: "[500,1000]" },
    6: { name: "Blue hoodie", url: "blue hoodie w.webp", price: 450, gender: ["women"], colors: ["blue"], type: ["hoodie"], range: "[250,500]" },
    7: { name: "Green Polo T-Shirt", url: "green polom.webp", price: 350, gender: ["men"], colors: ["green"], type: ["polo","T-shirt"], range: "[250,500]" },
    8: { name: "Red Polo T-Shirt", url: "red polo.jpeg", price: 300, gender: ["men"], colors: ["red"], type: ["T-Shirt","polo"], range: "[250,500]" },
    9: { name: "Blue T-Shirt", url: "blue top.webp", price: 470, gender: ["women"], colors: ["blue"], type: ["t-shirt"], range: "[250,500]" },
    10: { name: "Black-Violet hoodie", url: "black violet hoodie f.jpeg", price: 400, gender: ["women"], colors: ["black", "violet"], type: ["hoodie"], range: "[250,500]" },
    11: { name: "Black Blue polo", url: "black blue polo m.jpeg", price: 200, gender: ["men"], colors: ["black", "blue"], type: ["polo","patterns"], range: "[0,250]" },
    12: { name: "Red T-Shirt", url: "brown tshirt.webp", price: 450, gender: ["men"], colors: ["red"], type: ["T-Shirt"], range: "[250,500]" },
    13: { name: "Green hoodie", url: "green hood.webp", price: 350, gender: ["men"], colors: ["green"], type: ["hoodie","patterns"], range: "[250,500]" },
    14: { name: "Green T-Shirt", url: "green woman.webp", price: 270, gender: ["women"], colors: [ "green"], type: ["T-Shirt"], range: "[250,500]" },
    15: { name: "Grey hoodie", url: "grey hood.webp", price: 300, gender: ["men"], colors: ["grey"], type: ["hoodie"], range: "[250,500]" },
    16: { name: "Yellow Black T-Shirt", url: "yellow black tshirt.webp", price: 150, gender: ["men"], colors: ["yellow","black"], type: ["T-Shirt","patterns"], range: "[0,250]" },
    17: { name: "Grey T-Shirt", url: "grey women.webp", price: 200, gender: ["women"], colors: ["grey"], type: ["T-Shirt"], range: "[0,250]" },
    18: { name: "Pink hoodie", url: "pink hood.webp", price: 800, gender: ["women"], colors: ["pink"], type: ["hoodie"], range: "[500,1000]" },
    19: { name: "Red White T-Shirt", url: "red white strip.webp", price: 500, gender: ["men"], colors: ["red","white"], type: ["T-Shirt"], range: "[250,500]" },
    20: { name: "Red T-Shirt", url: "red tshirt wo.webp", price: 450, gender: ["women"], colors: ["red"], type: ["T-Shirt","patterns"], range: "[250,500]" },
    21: { name: "White T-Shirt", url: "white tshirt w.webp", price: 450, gender: ["women"], colors: ["white"], type: ["T-Shirt","patterns"], range: "[250,500]" },
    22: { name: "Black hoodie", url: "black hoodie m.jpeg", price: 600, gender: ["men"], colors: ["black"], type: ["hoodie"], range: "[500,1000]" },
    23: { name: "Blue White T-Shirt", url: "blue white multi woamn.webp", price: 650, gender: ["women"], colors: ["blue","white"], type: ["T-Shirt","patterns"], range: "[500,1000]" },
    24: { name: "Pink Black ", url: "pink black top.webp", price: 400, gender: ["women"], colors: ["black","pink"], type: ["T-Shirt"], range: "[250,500]" },
    25: { name: "White hoodie", url: "white hood.webp", price: 650, gender: ["men"], colors: ["white"], type: ["hoodie"], range: "[500,1000]" }
};


var temp_list_of_items = {};

var list_of_carts = {

}

function create_card(index) {
    let obj = list_of_items[index];
    let parent = document.getElementById("cards");
    let main_div = create_ele("div");
    main_div.setAttribute("title", obj["name"])

    let li1 = create_ele("li");
    li1.innerHTML = index;

    let div2 = create_ele("div")
    let img1 = create_ele("img")
    img1.setAttribute("src", "images/resources/" + obj["url"])
    img1.setAttribute("alt", obj["name"])
    div2.appendChild(img1)

    let div3 = create_ele("div");
    let li2 = create_ele("li")
    let li3 = create_ele("li")
    li2.innerHTML = obj["name"];
    li3.innerHTML = "Rs." + obj["price"];
    let div4 = create_ele("div");
    div4_text = "<div><button onclick='dec_count(event)'>-</button><li>1</li><button onclick='inc_count(event)'>+</button></div><button onclick='add_cart(event)'>Add to cart</button>";
    let span1 = create_ele("span");
    span1.addEventListener("click", close_alert);
    span1.setAttribute("title", "close the alert")
    div4.innerHTML = div4_text;
    div3.appendChild(li2);
    div3.appendChild(li3);
    div3.appendChild(div4);
    div3.appendChild(span1);

    main_div.appendChild(li1);
    main_div.appendChild(div2);
    main_div.appendChild(div3);

    parent.appendChild(main_div);
}

function close_alert(event) {
    event.currentTarget.innerHTML = "";
}

function load_cards(items) {
    (Object.keys(items)).forEach((k) => {
        create_card(k);
    })
}

load_cards(list_of_items);

function create_cart(index, num) {
    let cart_det = list_of_items[index]
    let parent = document.getElementById("carts");
    let main_div = create_ele("div");

    let id_li = create_ele("li");
    id_li.setAttribute("style", "display:none");
    id_li.innerHTML = index;

    let div1 = create_ele("div");
    let img1 = create_ele("img");
    img1.setAttribute("src", "images/resources/" + cart_det["url"])
    img1.setAttribute("alt", cart_det["name"]);
    div1.appendChild(img1);

    let div2 = create_ele("div");
    let li1 = create_ele("li");
    let li2 = create_ele("li");
    let li3 = create_ele("li");
    li1.innerHTML = cart_det["name"]
    li2.innerHTML = "Rs." + cart_det["price"];
    li3.innerHTML = num;
    div2.appendChild(li1);
    div2.appendChild(li2);
    div2.appendChild(li3);

    let button = create_ele("button");
    button.innerHTML = "Remove";
    button.addEventListener("click", delete_cart);

    main_div.appendChild(div1);
    main_div.appendChild(div2);
    main_div.appendChild(button);
    main_div.appendChild(id_li);

    parent.prepend(main_div);

}

function load_carts(items) {
    (Object.keys(items)).forEach((v) => {
        create_cart(v, items[v]);
    })
    load_amount(list_of_carts);
}

function load_amount(items) {
    let total_count = 0;
    let total_pri = 0;
    (Object.keys(items)).forEach((v) => {
        total_count += parseInt(items[v]);
        total_pri += items[v] * list_of_items[v]["price"];
    })
    document.getElementById("cart_nos").innerHTML = total_count;
    document.getElementById("total_prod").innerHTML = total_count;
    document.getElementById("total_price").innerHTML = total_pri.toFixed(1);
}

load_carts(list_of_carts);

function inc_count(event) {
    let ele = event.currentTarget;
    let value_ele = ele.previousElementSibling
    let alert_ele = ele.parentElement.parentElement.nextElementSibling;
    alert_ele.style.color = "red";
    if (parseInt(value_ele.innerHTML) < 10) {
        value_ele.innerHTML = parseInt(value_ele.innerHTML) + 1;
        alert_ele.innerHTML = "";
    }
    else {
        alert_ele.innerHTML = "Max Item limit is 10"
    }
}

function dec_count(event) {
    let ele = event.currentTarget;
    let value_ele = ele.nextElementSibling;
    let alert_ele = ele.parentElement.parentElement.nextElementSibling;
    alert_ele.style.color = "red";
    if (parseInt(value_ele.innerHTML) > 1) {
        value_ele.innerHTML = parseInt(value_ele.innerHTML) - 1;
        alert_ele.innerHTML = "";
    }
    else {
        alert_ele.innerHTML = "Minimum item to buy should be 1";
    }
}

function add_cart(event) {
    let ele = event.currentTarget;
    let qty = ele.previousElementSibling.children[1].innerHTML;
    let id = ele.parentElement.parentElement.parentElement.children[0].innerHTML;
    let alert_ele = ele.parentElement.nextElementSibling;
    if ((Object.keys(list_of_carts)).includes(id)) {
        alert_ele.style.color = "red";
        alert_ele.innerHTML = "Item is already added to the cart.";
    }
    else if (qty > 0 && qty < 11) {
        list_of_carts[id] = qty;
        load_amount(list_of_carts);
        create_cart(id, qty);
        alert_ele.style.color = "green";
        alert_ele.innerHTML = "Item added to cart successfully";
    }
    else {
        alert_ele.style.color = "red";
        alert_ele.innerHTML = "Minimum item to buy should be 1.<br>Maximum carts is 10."
    }

}

function delete_cart(event) {
    let ele = event.currentTarget;
    let id = ele.nextElementSibling.innerHTML;
    delete list_of_carts[id];
    load_amount(list_of_carts);
    ele.parentElement.remove();
}

function search_cards(event) {
    document.getElementById("reset_button").click();
    temp_list_of_items = {}
    let search_keyword = event.currentTarget.value;
    let search_key_list = [];
    if (search_keyword.length == 0) {
        document.getElementById("cards").innerHTML = "";
        load_cards(list_of_items);
        return;
    }
    else {
        for (v of search_keyword.toLowerCase().split(" ")) {
            if (v.length > 0) {
                search_key_list.push(v);
            }
        }
        (Object.keys(list_of_items)).forEach((v) => {
            let item_data = list_of_items[v];
            let data_list = Object.values(item_data).flat();
            let present_flag = search_key_list.every((v) => {
                return data_list.includes(v);
            })
            if (present_flag) {
                temp_list_of_items[v] = JSON.parse(JSON.stringify(list_of_items[v]));
            }
        })
        if (Object.keys(temp_list_of_items).length == 0) {
            document.getElementById("cards").innerHTML = "<h1>No Results</h1>";
            return;
        }
        document.getElementById("cards").innerHTML = "";
        load_cards(temp_list_of_items);
    }

}

document.querySelectorAll("#filter_form>div>input[type='checkbox']").forEach((v) => {
    v.addEventListener("change", filter_cards);
})

function filter_cards() {
    let already_searched_items;
    if (Object.keys(temp_list_of_items).length != 0) {
        already_searched_items = JSON.parse(JSON.stringify(temp_list_of_items));
    }
    else {
        already_searched_items = JSON.parse(JSON.stringify(list_of_items));
    }

    let temp_filter_items = {};
    let parent_form = document.getElementById("filter_form");
    let data1 = new FormData(parent_form)
    let data = {};
    data1.forEach((v, k) => {
        data[k] = v;
    });

    let temp_already_searched_item = {};
    let price_array = ["price1", "price2", "price3", "price4"].filter((v) => {
        return Object.keys(data).includes(v);
    });
    if (price_array.length != 0) {
        Object.keys(already_searched_items).forEach((key) => {
            let flg = price_array.some((v) => {
                return Object.values(already_searched_items[key]).includes(data[v]);
            })
            if (flg) {
                temp_already_searched_item[key] = JSON.parse(JSON.stringify(already_searched_items[key]))
            }
        })
        price_array.forEach((v) => {
            delete data[v];
        })
        already_searched_items = JSON.parse(JSON.stringify(temp_already_searched_item));
    }

    if (Object.keys(data).length == 0) {
        if (Object.keys(already_searched_items).length != 0) {
            document.getElementById("cards").innerHTML = "";
            load_cards(already_searched_items);
        }
        else {
            document.getElementById("cards").innerHTML = "<h1>No Items with given filters</h1>";
        }
        return;
    }
    else {
        Object.keys(already_searched_items).forEach((k) => {
            let item = already_searched_items[k];
            let item_data = Object.values(item).flat();
            let flag = Object.values(data).every((val) => {
                return item_data.includes(val);
            })
            if (flag) {
                temp_filter_items[k] = JSON.parse(JSON.stringify(already_searched_items[k]));
            }
        })
        if (Object.keys(temp_filter_items).length != 0) {
            document.getElementById("cards").innerHTML = "";
            load_cards(temp_filter_items);
        }
        else {
            document.getElementById("cards").innerHTML = "<h1>No Items with given filters</h1>";
        }

    }

}

function clear_all_filters(event) {
    let ele = event.currentTarget;
    ele.previousElementSibling.click();
    document.getElementById("filter").children[0].click();
    filter_cards();
}

function cancel_submit(event) {
    event.preventDefault();
}

