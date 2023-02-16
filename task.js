let foodlist=[
    {
    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wg5xs68b0flvanudqlxm",
    Name:"Saharsh Udupi Grand",
    cusin:"Chinese, North Indian",
    rating:4.5,
    time:"30 MINS",
    amount:"₹ 150 Cost for two",
    offer:" 50% off | Use WELCOME50",
    view:"QUICK VIEW",
    },
    {
        imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/8523266de1213e8ea57e5df4eedf747e",
        Name:"Varalakshmi Tiffins",
        cusin:"south Indian",
        rating:4.6,
        time:"20 MINS",
        amount:"₹ 100 Cost for two",
        offer:" 50% off | Use WELCOME50",
        view:"QUICK VIEW",
        },
        {
            imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/stnwpjuu5fhehsx1dw4z",
            Name:"Mehfil",
            cusin:"Biryani, Chinese",
            rating:3.9,
            time:"36 MINS",
            amount:"₹ 300 Cost for two",
            offer:" 50% off | Use WELCOME50",
            view:"QUICK VIEW",
            },
            {
                imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gtce9hd08expukh3js4y",
                Name:"Millet Express",
                cusin:"Healthy Food, South Indian",
                rating:4.4,
                time:"27 MINS",
                amount:"₹ 150 Cost for two",
                offer:" 50% off | Use WELCOME50",
                view:"QUICK VIEW",
                },
                {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wwrxzur0cmchp9vvp1k8",
                    Name:"Sri Raghavendra Veg",
                    cusin:"Chinese, North Indian",
                    rating:4.3,
                    time:"30 MINS",
                    amount:"₹ 150 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n2kt3noplim3agty9ox8",
                    Name:" Multicuisine Restaurant",
                    cusin:"Biryani, North Indian",
                    rating:4.7,
                    time:"36 MINS",
                    amount:"₹ 400 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x9xjymfjmmupziz6whzj",
                    Name:"Vasista's Sri Lakshmi",
                    cusin:"Briyani, North Indian",
                    rating:4.0,
                    time:"34 MINS",
                    amount:"₹ 450 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cdmzv99zcatsejcqtbgb",
                    Name:"Spicy Restaurant",
                    cusin:"Biryani, Tandoor",
                    rating:4.7,
                    time:"30 MINS",
                    amount:"₹ 800 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l4ppu8o6nhdospxcnrkh",
                    Name:"Kakatiya Mess",
                    cusin:"Andhra, Biryani ",
                    rating:4.4,
                    time:"20 MINS",
                    amount:"₹ 80 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
                    Name:"McDonald's",
                    cusin:"Burgers, Beverages",
                    rating:4.3,
                    time:"40 MINS",
                    amount:"₹ 200 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                    imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rgjfx1v2hapqnutnxazg",
                    Name:"La Pino'z Pizza",
                    cusin:"Pizzas, Italian",
                    rating:3.8,
                    time:"27 MINS",
                    amount:"₹ 280 Cost for two",
                    offer:" 50% off | Use WELCOME50",
                    view:"QUICK VIEW",
                    },
                    {
                        imgUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czmy4lkcv5vbpjwpv0bh",
                        Name:"Palamuru Pakodi",
                        cusin:"Burgers, Beverages",
                        rating:4.8,
                        time:"38 MINS",
                        amount:"₹ 460 Cost for two",
                        offer:" 50% off | Use WELCOME50",
                        view:"QUICK VIEW",
                        }

                ]
    let cont=document.querySelector(".container");
    let card=document.createElement("div");
    card.classList.add("row");
    cont.appendChild(card);

foodlist.forEach(function(e){   

    let div=document.createElement("div");
    div.classList.add("col");
    card.appendChild(div);

    let div2=document.createElement("div");
    div2.classList.add("col-card");
    div.appendChild(div2);
    
    let img=document.createElement("img");
    img.src=e.imgUrl;
    div2.appendChild(img);

    let head=document.createElement("h2");
    head.innerHTML=e.Name;
    div2.appendChild(head);

    let para=document.createElement("p");
    para.innerHTML=e.cusin;
    para.style.padding="10px 0";
    div2.appendChild(para);
    
    let div3=document.createElement("div");
    div3.classList.add("arjun");
    para.appendChild(div3);

    let para2=document.createElement("p");
    para2.innerHTML=`<iconify-icon icon="material-symbols:star"></iconify-icon>${e.rating}`;
    para2.style.padding="6px";
    para2.style.backgroundColor="lightgreen";
    para2.style.borderRadius="5px";
    para2.style.color="white";
    div3.appendChild(para2);
     
    let dot=document.createElement("p");
    dot.innerHTML=".";
    div3.appendChild(dot);

    let para3=document.createElement("p");
    para3.innerHTML=e.time;
    div3.appendChild(para3);

    let dot1=document.createElement("p");
    dot1.innerHTML=".";
    div3.appendChild(dot1);

    let para4=document.createElement("p");
    para4.innerHTML=e.amount;
    div3.appendChild(para4);

    let para5=document.createElement("p");
    para5.innerHTML=`<iconify-icon icon="bxs:offer"></iconify-icon>${e.offer}`;
    para5.style.padding="10px 0";
    para5.style.color="#8a584b";
    para5.style.borderTop="solid 1px gray";
    div2.appendChild(para5);

    let para6=document.createElement("p");
    para6.classList.add("quick");
    para6.innerHTML=e.view;
    para6.style.padding="10px 0";
    para6.style.color="blue";
    para6.style.borderTop="solid 1px gray";
    para6.style.textAlign="center";
    para6.style.cursor="pointer";
    div2.appendChild(para6);
    

});






    console.log(cont);

