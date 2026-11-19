const sizes=["XS","S","M","L","XL"];
const imageGroups=[
  {folder:"image 3",files:[
    "3dfc2b41556a40c88d8a0f976b5a380f.jpg","66f4bdf54321425688a25b48666505e2.jpg","09165429235d4ec2ae2882792d7dd991.jpg",
    "IMG-20260802-WA0007.jpg","IMG-20260802-WA0008.jpg","IMG-20260802-WA0009.jpg","IMG-20260802-WA0010.jpg","IMG-20260802-WA0011.jpg","IMG-20260802-WA0012.jpg","IMG-20260802-WA0013.jpg","IMG-20260802-WA0014.jpg","IMG-20260802-WA0015.jpg","IMG-20260802-WA0016.jpg","IMG-20260802-WA0017.jpg","IMG-20260802-WA0018.jpg",
    "_1355289499.jpg","_1355289515.jpg","_1355289539.jpg","_1355289556.jpg","_1355289569.jpg",
    "_1468852776.jpg","_1468852873.jpg","_1468852930.jpg","_1468852991.jpg","_1468853040.jpg",
    "_1469220548.jpg","_1469220632.jpg","_1469220682.jpg","_1469220729.jpg","_1469220776.jpg","_1469220815.jpg","_1469220858.jpg","_1469220907.jpg","_1469220946.jpg",
    "_1469947307.jpg","_1469947407.jpg","_1469947454.jpg","_1469947499.jpg","_1469947553.jpg","_1469947601.jpg","_1469947646.jpg","_1469947691.jpg","_1469947742.jpg","_1469947785.jpg","_1469947828.jpg","_1469947873.jpg","_1469947924.jpg","_1469947973.jpg","_1469948013.jpg","_1469948049.jpg",
    "_1526944940.jpg","_1526945108.jpg","_1526945170.jpg","_1526945251.jpg","_1526945304.jpg","_1526945361.jpg","_1526945405.jpg","_1526945449.jpg","_1526945496.jpg","_1526945535.jpg",
    "f285477bb9a7499b92511d8bef1628dd.jpg","file_00000000a264821188bdc8339594888c.png","file_000000007c1882119b4eeca293d78c2e.png","file_0000000077d88208964a1ac1aca09336.png","file_00000000991c8210966a4e99e417b666.png","file_00000000453881f4b1aa02b640e57c2c.png",
    "kuhesha soni_13158081.jpg","kuhesha soni_13158114.jpg","kuhesha soni_13158126.jpg","kuhesha soni_13158137.jpg","kuhesha soni_13158149.jpg","kuhesha soni_13158157.jpg"
  ]},
  {folder:"image",files:[
    "_2214653.jpg","_2214679.jpg","_2214692.jpg","_2214709.jpg","_2214725.jpg","_2214741.jpg","_2214754.jpg","_2214764.jpg","_2214774.jpg","_2214785.jpg",
    "_13536933.jpg","_13536945.jpg","_13536956.jpg","_13536967.jpg","_13536981.jpg","_13536992.jpg","_13537005.jpg","_13537017.jpg","_13537030.jpg","_13537046.jpg","_13537068.jpg",
    "_903684023.jpg","_903914761.jpg","_903914786.jpg","_903914800.jpg","_903914811.jpg","_903914824.jpg",
    "_1005103190.jpg","_1005103215.jpg","_1005103226.jpg",
    "_1156760966.jpg","_1156760987.jpg",
    "_1179920479.jpg","_1179920524.jpg",
    "_1180230857.jpg","_1180230877.jpg",
    "_1353958862.jpg","_1353958878.jpg",
    "_1355289408.jpg","_1355289423.jpg","_1355289442.jpg","_1355289458.jpg","_1355289481.jpg"
  ]},
  {folder:"image 2",files:[
    "_13536905.jpg","_13537057.jpg","_1005103235.jpg","_1005103245.jpg","_1005103257.jpg","_1005103272.jpg","_1005103284.jpg","_1005103296.jpg",
    "_1156760852.jpg","_1156760904.jpg","_1156760918.jpg","_1156760937.jpg","_1156760952.jpg","_1156760999.jpg","_1156761012.jpg",
    "_1156919670.jpg","_1156919681.jpg","_1156919692.jpg","_1156919702.jpg","_1156919715.jpg","_1156919725.jpg",
    "_1179920119.jpg","_1179920243.jpg","_1179920315.jpg","_1179920385.jpg","_1179920431.jpg","_1179920565.jpg",
    "_1180230649.jpg","_1180230689.jpg","_1180230710.jpg","_1180230734.jpg","_1180230749.jpg","_1180230763.jpg","_1180230777.jpg","_1180230791.jpg","_1180230803.jpg","_1180230819.jpg","_1180230834.jpg","_1180230847.jpg","_1180230890.jpg","_1180230902.jpg",
    "_1353404430.jpg","_1353404496.jpg","_1353404516.jpg","_1353404535.jpg","_1353404557.jpg","_1353404584.jpg","_1353404604.jpg","_1353404619.jpg","_1353404633.jpg","_1353404645.jpg",
    "_1353958799.jpg",
    "_1355178273.jpg","_1355178326.jpg","_1355178346.jpg","_1355178373.jpg",
    "_1355289258.jpg","_1355289292.jpg","_1355289312.jpg","_1355289326.jpg","_1355289339.jpg","_1355289354.jpg","_1355289368.jpg","_1355289382.jpg","_1355289395.jpg"
  ]}
];
const imageFiles=imageGroups.flatMap(({folder,files})=>files.map(file=>({file,path:`${encodeURIComponent(folder)}/${encodeURIComponent(file)}`})));
const categories=["Tops","Dresses","Streetwear","Co-ord Sets"];
const colors=["Midnight","Rose","Ivory","Sage","Sapphire","Blush","Espresso","Sky"];
const whatsappNumber="918536821474";
const legacyProducts=[
  {id:"after-hours-top",name:"After Hours Sculpted Top",price:1890,originalPrice:2490,category:"Tops",color:"Midnight black",isNew:true,bestSeller:true},
  {id:"sunday-midi",name:"The Sunday Midi Dress",price:3290,originalPrice:null,category:"Dresses",color:"Soft ivory",isNew:true,bestSeller:true},
  {id:"off-duty-hoodie",name:"Off-Duty Oversized Hoodie",price:2790,originalPrice:3290,category:"Streetwear",color:"Oat milk",isNew:false,bestSeller:true},
  {id:"soft-power-set",name:"Soft Power Co-ord Set",price:4290,originalPrice:null,category:"Co-ord Sets",color:"Rosewood",isNew:true,bestSeller:true},
  {id:"city-lights-dress",name:"City Lights Slip Dress",price:3590,originalPrice:4190,category:"Dresses",color:"Champagne",isNew:false,bestSeller:false},
  {id:"main-character-shirt",name:"Main Character Shirt",price:2190,originalPrice:null,category:"Tops",color:"Cloud white",isNew:true,bestSeller:false},
  {id:"weekend-cargo",name:"Weekend Cargo Trousers",price:2990,originalPrice:3490,category:"Streetwear",color:"Stone",isNew:false,bestSeller:true},
  {id:"afterglow-set",name:"Afterglow Lounge Set",price:3890,originalPrice:null,category:"Co-ord Sets",color:"Dusty rose",isNew:true,bestSeller:false}
];
const products=imageFiles.map((asset,index)=>{
  const {file,path}=asset;
  const number=String(index+1).padStart(3,"0");
  const legacy=legacyProducts[index]||{};
  const category=legacy.category||categories[index%categories.length];
  const isNew=index<24;
  const bestSeller=index%9===0;
  return{...legacy,id:legacy.id||`queen-look-${number}`,name:legacy.name||`Queen's ${category} Edit ${number}`,price:569,originalPrice:null,category,color:legacy.color||`${colors[index%colors.length]} edit`,image:path,isNew:legacy.isNew===undefined?isNew:legacy.isNew,bestSeller:legacy.bestSeller===undefined?bestSeller:legacy.bestSeller,sizes};
});
const formatPrice=value=>`₹${value.toLocaleString("en-IN")}/-`;
const getProduct=id=>products.find(product=>product.id===id);
function whatsappOrderUrl(product){const imageUrl=new URL(product.image,document.baseURI).href;const message=`Hello, I would like to order ${product.name}.\nOffer price: ${formatPrice(product.price)}\nProduct image: ${imageUrl}`;return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
function readStorage(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch(error){console.warn(`Unable to read ${key} from local storage.`,error);return fallback}}
let cart=readStorage("buttyQueenCart",[]);
let wishlist=readStorage("buttyQueenWishlist",[]);
let activeFilter="All";
let query="";
let visibleProductLimit=12;
let quickProduct=null;
let selectedSize="M";
let toastTimer;

const productGrid=document.querySelector("#product-grid");
const resultsCount=document.querySelector(".results-count");
const sortSelect=document.querySelector("#sort-select");
const cartDrawer=document.querySelector("#cart-drawer");
const drawerBackdrop=document.querySelector("#drawer-backdrop");
const modalBackdrop=document.querySelector("#modal-backdrop");
const toast=document.querySelector(".toast");

function saveStorage(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch(error){console.warn(`Unable to save ${key} to local storage.`,error);showToast("Your changes couldn't be saved for next time.")}}
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600)}
function productCard(product){const badge=product.isNew?`<span class="product-badge">NEW IN</span>`:"";return `<article class="product-card" data-product-id="${product.id}"><div class="product-image-wrap">${badge}<button class="heart-button ${wishlist.includes(product.id)?"is-wish":""}" data-wish="${product.id}" aria-label="${wishlist.includes(product.id)?"Remove from":"Add to"} wishlist" aria-pressed="${wishlist.includes(product.id)}">♡</button><img src="${product.image}" alt="${product.name} in ${product.color}" loading="lazy" data-alternate="${product.alternate}"><button class="product-quick" data-quick="${product.id}">QUICK VIEW</button></div><div class="product-info"><div class="product-topline"><div><h3 class="product-name">${product.name}</h3><p class="product-color">${product.color}</p></div><button class="card-add" data-add="${product.id}" aria-label="Add ${product.name} to bag">ADD +</button></div><p class="product-price"><span class="offer-label">OFFER</span>${formatPrice(product.price)}</p><a class="card-order button button-dark" href="${whatsappOrderUrl(product)}" target="_blank" rel="noopener noreferrer">ORDER ON WHATSAPP <span>↗</span></a></div></article>`}
function renderProducts(){let visible=products.filter(product=>{const categoryMatch=activeFilter==="All"||(activeFilter==="New Arrivals"?product.isNew:product.category===activeFilter);const searchText=`${product.name} ${product.category} ${product.color}`.toLowerCase();return categoryMatch&&searchText.includes(query.toLowerCase())});if(sortSelect.value==="low")visible.sort((a,b)=>a.price-b.price);if(sortSelect.value==="high")visible.sort((a,b)=>b.price-a.price);productGrid.innerHTML=visible.slice(0,visibleProductLimit).map(productCard).join("");resultsCount.textContent=`${visible.length} ${visible.length===1?"piece":"pieces"} to love`;document.querySelector(".empty-search").hidden=visible.length>0;productGrid.hidden=visible.length===0;document.querySelector(".load-more").hidden=visible.length<=visibleProductLimit;attachImageHover()}
function renderBestSellers(){document.querySelector("#bestseller-grid").innerHTML=products.filter(product=>product.bestSeller).slice(0,3).map(product=>`<a href="#shop" class="mini-product" data-best-product="${product.id}"><img src="${product.image}" loading="lazy" alt="${product.name}"><span class="mini-label">BEST SELLER</span><h3>${product.name}</h3><p>OFFER ${formatPrice(product.price)}</p></a>`).join("")}
function attachImageHover(){document.querySelectorAll(".product-card .product-image-wrap img").forEach(image=>{const original=image.src;const alternate=image.dataset.alternate;if(!alternate||alternate==="undefined"||original===alternate)return;const card=image.closest(".product-card");card.addEventListener("mouseenter",()=>{image.src=alternate});card.addEventListener("mouseleave",()=>{image.src=original})})}
function renderWishlistCount(){const count=document.querySelector(".wishlist-count");count.textContent=wishlist.length||""}
function renderCart(){const itemCount=cart.reduce((sum,item)=>sum+item.quantity,0);document.querySelector(".cart-count").textContent=itemCount||"";document.querySelector(".drawer-item-count").textContent=`(${itemCount})`;const cartItems=document.querySelector(".cart-items");cartItems.innerHTML=cart.map(item=>{const product=getProduct(item.id);if(!product)return"";return `<article class="cart-line"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>Size: ${item.size}</p><div class="quantity-control"><button data-quantity="${item.key}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-quantity="${item.key}" data-change="1" aria-label="Increase quantity">+</button></div></div><div class="cart-line-end"><strong>${formatPrice(product.price*item.quantity)}</strong><button class="remove-item" data-remove="${item.key}">Remove</button></div></article>`}).join("");const subtotal=cart.reduce((sum,item)=>{const product=getProduct(item.id);return sum+(product?product.price*item.quantity:0)},0);document.querySelector(".cart-subtotal").textContent=formatPrice(subtotal);cartDrawer.classList.toggle("empty",itemCount===0)}
function addToCart(productId,size="M"){const product=getProduct(productId);if(!product)return;const key=`${productId}-${size}`;const existing=cart.find(item=>item.key===key);if(existing)existing.quantity+=1;else cart.push({id:productId,size,quantity:1,key});saveStorage("buttyQueenCart",cart);renderCart();showToast(`${product.name} added to your bag.`)}
function toggleWishlist(productId){wishlist=wishlist.includes(productId)?wishlist.filter(id=>id!==productId):[...wishlist,productId];saveStorage("buttyQueenWishlist",wishlist);renderWishlistCount();renderProducts();showToast(wishlist.includes(productId)?"Added to your wishlist.":"Removed from your wishlist.")}
function openCart(){cartDrawer.classList.add("open");cartDrawer.setAttribute("aria-hidden","false");drawerBackdrop.classList.add("open");document.body.classList.add("no-scroll")}
function closeCart(){cartDrawer.classList.remove("open");cartDrawer.setAttribute("aria-hidden","true");drawerBackdrop.classList.remove("open");if(!modalBackdrop.classList.contains("open"))document.body.classList.remove("no-scroll")}
function openQuickView(productId){quickProduct=getProduct(productId);if(!quickProduct)return;selectedSize="M";document.querySelector(".quick-image img").src=quickProduct.image;document.querySelector(".quick-image img").alt=quickProduct.name;document.querySelector("#quick-title").textContent=quickProduct.name;document.querySelector(".quick-price").textContent=`OFFER ${formatPrice(quickProduct.price)}`;document.querySelector(".size-options").innerHTML=sizes.map(size=>`<button class="size-option ${size===selectedSize?"selected":""}" data-size="${size}" aria-pressed="${size===selectedSize}">${size}</button>`).join("");modalBackdrop.classList.add("open");document.body.classList.add("no-scroll");document.querySelector(".modal-close").focus()}
function closeQuickView(){modalBackdrop.classList.remove("open");if(!cartDrawer.classList.contains("open"))document.body.classList.remove("no-scroll")}
document.addEventListener("click",event=>{const filter=event.target.closest("[data-filter]");if(filter){activeFilter=filter.dataset.filter;visibleProductLimit=12;document.querySelectorAll(".filter-button").forEach(button=>button.classList.toggle("active",button===filter));renderProducts()}const categoryLink=event.target.closest("[data-category-link]");if(categoryLink){activeFilter=categoryLink.dataset.categoryLink;visibleProductLimit=12;document.querySelectorAll(".filter-button").forEach(button=>button.classList.toggle("active",button.dataset.filter===activeFilter));renderProducts()}const add=event.target.closest("[data-add]");if(add)addToCart(add.dataset.add);const wish=event.target.closest("[data-wish]");if(wish)toggleWishlist(wish.dataset.wish);const quick=event.target.closest("[data-quick]");if(quick)openQuickView(quick.dataset.quick);const quantity=event.target.closest("[data-quantity]");if(quantity){const item=cart.find(entry=>entry.key===quantity.dataset.quantity);if(item){item.quantity+=Number(quantity.dataset.change);if(item.quantity<=0)cart=cart.filter(entry=>entry!==item);saveStorage("buttyQueenCart",cart);renderCart()}}const remove=event.target.closest("[data-remove]");if(remove){cart=cart.filter(item=>item.key!==remove.dataset.remove);saveStorage("buttyQueenCart",cart);renderCart();showToast("Item removed from your bag.")}const size=event.target.closest("[data-size]");if(size){selectedSize=size.dataset.size;document.querySelectorAll(".size-option").forEach(button=>{button.classList.toggle("selected",button===size);button.setAttribute("aria-pressed",button===size)})}if(event.target.closest(".cart-open"))openCart();if(event.target.closest(".cart-close")||event.target===drawerBackdrop)closeCart();if(event.target.closest(".modal-close")||event.target===modalBackdrop)closeQuickView();if(event.target.closest(".continue-shopping"))closeCart();if(event.target.closest(".quick-add")&&quickProduct){addToCart(quickProduct.id,selectedSize);closeQuickView();openCart()}if(event.target.closest(".quick-wish")&&quickProduct)toggleWishlist(quickProduct.id);if(event.target.closest(".wishlist-open")){const favorite=products.filter(product=>wishlist.includes(product.id));if(!favorite.length){showToast("Your wishlist is waiting for its first favourite.");return}activeFilter="All";query="";visibleProductLimit=Math.max(12,favorite.length);document.querySelector("#search-input").value="";productGrid.innerHTML=favorite.map(productCard).join("");resultsCount.textContent=`${favorite.length} saved ${favorite.length===1?"piece":"pieces"}`;document.querySelector(".empty-search").hidden=true;document.querySelector(".load-more").hidden=true;productGrid.hidden=false;document.querySelector("#shop").scrollIntoView({behavior:"smooth"});showToast("Showing your saved favourites.")}if(event.target.closest(".clear-search")){query="";document.querySelector("#search-input").value="";visibleProductLimit=12;renderProducts()}if(event.target.closest(".load-more")){visibleProductLimit+=12;renderProducts()}if(event.target.closest("[data-best-sellers]")||event.target.closest("[data-best-product]")){activeFilter="All";query="";visibleProductLimit=12;renderProducts()}});
sortSelect.addEventListener("change",()=>{visibleProductLimit=12;renderProducts()});
document.querySelector("#search-input").addEventListener("input",event=>{query=event.target.value.trim();activeFilter="All";visibleProductLimit=12;document.querySelectorAll(".filter-button").forEach(button=>button.classList.toggle("active",button.dataset.filter==="All"));renderProducts();if(query)document.querySelector("#shop").scrollIntoView({behavior:"smooth",block:"start"})});
document.querySelector(".header-search").addEventListener("submit",event=>{event.preventDefault();document.querySelector("#shop").scrollIntoView({behavior:"smooth"})});
document.querySelector(".search-toggle").addEventListener("click",()=>{const form=document.querySelector(".header-search");form.classList.toggle("open");if(form.classList.contains("open"))document.querySelector("#search-input").focus()});
document.querySelector(".menu-toggle").addEventListener("click",event=>{const nav=document.querySelector(".main-nav");const open=nav.classList.toggle("open");event.currentTarget.setAttribute("aria-expanded",String(open));event.currentTarget.setAttribute("aria-label",open?"Close navigation":"Open navigation")});
document.querySelector(".main-nav").addEventListener("click",event=>{if(event.target.closest("a")){document.querySelector(".main-nav").classList.remove("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded","false")}});
document.querySelector(".newsletter-form").addEventListener("submit",event=>{event.preventDefault();const input=document.querySelector("#newsletter-email");const message=document.querySelector(".newsletter-message");if(!input.value.trim()||!input.validity.valid){message.textContent="Please enter a valid email address.";message.classList.add("error");input.focus();return}message.textContent="You're on the list. Keep an eye on your inbox!";message.classList.remove("error");event.currentTarget.reset()});
document.querySelector(".checkout-button").addEventListener("click",()=>{if(cart.length)showToast("Checkout is coming soon. Your bag is saved right here.")});
document.querySelectorAll(".review-arrow").forEach(button=>button.addEventListener("click",()=>{const track=document.querySelector("#reviews-track");const direction=button.classList.contains("review-next")?1:-1;track.scrollBy({left:direction*(track.querySelector(".review-card").getBoundingClientRect().width+12),behavior:"smooth"})}));
document.querySelectorAll(".review-dot").forEach((dot,index)=>dot.addEventListener("click",()=>{const track=document.querySelector("#reviews-track");const card=track.querySelectorAll(".review-card")[index];track.scrollTo({left:card.offsetLeft-track.offsetLeft,behavior:"smooth"})}));
document.querySelector("#reviews-track").addEventListener("scroll",()=>{const track=document.querySelector("#reviews-track");if(window.innerWidth>760)return;const index=Math.round(track.scrollLeft/(track.querySelector(".review-card").getBoundingClientRect().width+12));document.querySelectorAll(".review-dot").forEach((dot,i)=>dot.classList.toggle("active",i===index))},{passive:true});
window.addEventListener("scroll",()=>document.querySelector(".site-header").classList.toggle("scrolled",window.scrollY>5),{passive:true});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeCart();closeQuickView();document.querySelector(".header-search").classList.remove("open");document.querySelector(".main-nav").classList.remove("open");document.querySelector(".menu-toggle").setAttribute("aria-expanded","false")}if(event.key==="Tab"&&modalBackdrop.classList.contains("open")){const focusable=modalBackdrop.querySelectorAll("button:not([disabled]),[href],input,select");const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});
if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll(".section-heading,.category-card,.product-card,.story-image-wrap,.story-copy,.review-card,.newsletter-section").forEach(element=>{element.classList.add("reveal");observer.observe(element)})}
renderProducts();renderBestSellers();renderCart();renderWishlistCount();
