/* jslint browser: true*/
/*global $*/

// https://github.com/jasonmoo/t.js
(function(){function c(a){this.t=a}function l(a,b){for(var e=b.split(".");e.length;){if(!(e[0]in a))return!1;a=a[e.shift()]}return a}function d(a,b){return a.replace(h,function(e,a,i,f,c,h,k,m){var f=l(b,f),j="",g;if(!f)return"!"==i?d(c,b):k?d(m,b):"";if(!i)return d(h,b);if("@"==i){e=b._key;a=b._val;for(g in f)f.hasOwnProperty(g)&&(b._key=g,b._val=f[g],j+=d(c,b));b._key=e;b._val=a;return j}}).replace(k,function(a,c,d){return(a=l(b,d))||0===a?"%"==c?(new Option(a)).innerHTML.replace(/"/g,"&quot;"):
a:""})}var h=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,k=/\{\{([=%])(.+?)\}\}/g;c.prototype.render=function(a){return d(this.t,a)};window.t=c})();
// end of 't';

Number.prototype.to_$ = function () {
  return "$" + parseFloat( this ).toFixed(2);
};
String.prototype.strip$ = function () {
  return this.split("$")[1];
};

var app = {

  shipping : 5.00,
  products : [
    {
      "name" : "Homemade Tuna or Chicken Salad",
      "price" : "10.00",
      "img" : "https://lh3.googleusercontent.com/AmZk4i2UPJcyuW5RiffTPDVO2OwsDoKd0SILfKoW7RqsULtpwkjju_8SKy4SQTifIIJ9rx0TTpknAHbPHyQ86xG2p_Fg1lLbNEwhYA=w523-h411-p",
      "desc" : "served w/ Lettuce & Tomato"
    },
    {
      "name" : "Classic Turkey",
      "price" : "10.00",
      "img" : "https://www.valyastasteofhome.com/wp-content/uploads/2022/01/Turkey-Sandwich-Recipe.jpg",
      "desc" : "Turkey, American, Lettuce, Tomato & Mayo or Mustard"
    },
    {
      "name" : "Pastrami Special",
      "price" : "12.00",
      "img" : "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/09/02/DV3411_House-Pastrami-on-Rye_s4x3.jpg.rend.hgtvcom.616.462.suffix/1630595833205.jpeg",
      "desc" : "Pastrami, Swiss & Deli Mustard on Rye"
    },
    {
      "name" : "Reuben",
      "img" : "https://www.simplejoy.com/wp-content/uploads/2022/03/reuben-sandwiches.jpg",
      "price" : "12.00",
      "desc" : "Hot Pastrami or Turkey, Melted Swiss, Sauerkraut & Russian Dressing"
    },
    {
      "name" : "Turkey Ranch",
      "img" : "https://i.pinimg.com/736x/3c/4e/41/3c4e4179ae5b9f638648440c408296c7--cold-sandwiches-gourmet-sandwiches.jpg",
      "price" : "12.00",
      "desc" : "Grilled Turkey, Melted Swiss, Lettuce, Tomato & Ranch Dressing"
    }
    ,
    {
      "name" : "Turkey Club",
      "price" : "12.00",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxC21QRyWX44kWyjq8xkHnen_gUUeyNS0dA&usqp=CAU",
      "desc" : "Turkey, American, Bacon, Lettuce, Tomato & Mayo"
    },
    {
      "name" : "Classic Roast Beef",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMGbNrKId5QFh3SHCBoFPX7T2hphHqmssOA&usqp=CAU",
      "price" : "12.00",
      "desc" : "Roast Beef, American, Lettuce, Tomato & Mayo"
    },
    {
      "name" : "Roast Beef & Cheddar",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFuTVE9bNejK5AQqAceUWF7tD0iKows4hKw&usqp=CAU",
      "price" : "12.00",
      "desc" : "Roast Beef, Cheddar, Bacon, Lettuce, Tomato & Horseradish Sauce"
    },
    {
      "name" : "Guacamole Divorciado",
      "img" : "https://www.mylatinatable.com/wp-content/uploads/2016/02/guacamole-foto-heroe-1024x723.jpg",
      "price" : "15.00",
      "desc" : "avocado, tomato, white onions, cilantro, serrano,tortilla chips"
    }
    ,
    {
      "name" : "Tortilla Soup",
      "price" : "18.00",
      "img" : "https://cookieandkate.com/images/2013/11/tortilla-soup-recipe-768x1154.jpg",
      "desc" : "roasted pulled chicken, avocado, cilantro, limón, tortilla strips  "
    },
    {
      "name" : "The Mexican Chopped Salad",
      "img" : "https://www.healthygffamily.com/wp-content/uploads/2018/07/02621987-1AB4-4395-9A38-3A790B39132A-720x720.jpg",
      "price" : "17.00",
      "desc" : "gem, kale, corn, avocado, sweet peppers, heirloom tomatoes,tajín cashews, cotija, manchego, cilantro-limón vinaigrette "
    },
    {
      "name" : "Cowboy Ribeye",
      "img" : "https://i2.wp.com/completelydelicious.com/wp-content/uploads/2018/08/ribeye-steaks-cowboy-butter-3.jpg",
      "price" : "12.00",
      "desc" : "22 oz american wagyu bone-in, chamuco sauce "
    }
    ,
    {
      "name" : "Filet and Bone Marrow",
      "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanXn0TnYrfYRb5aEJbwFCVUb0RI4PkaWcPQ&usqp=CAU",
      "price" : "26.00",
      "desc" : "beef tenderloin, bone marrow, piquín limón, chives, onions, cilantro "
    },
    {
      "name" : "Black Angus",
      "img" : "https://cdn.sunbasket.com/5ea72480-25d1-4aff-a3ab-6e5bef7e7b1b.jpg",
      "price" : "24.00",
      "desc" : "beef tenderloin, crisped oaxaca cheese, avocado salsa "
    }
    ,
    {
      "name" : "Swiss Enchiladas",
      "img" : "https://www.saveur.com/uploads/2019/03/04/W2YKBIIXADGGE3DK6DVJKDVFPU.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1920",
      "price" : "30.00",
      "desc" : "roasted free range chicken, queso cotija, salsa verde cremosa "
    },
    {
      "name" : "Lobster",
      "img" : "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/lobster.webp",
      "price" : "29.00",
      "desc" : "maine lobster, toasted garlic, grilled onions, bacon, oaxaca cheese, queso fresco, tequila, salsa chiapanaca "
    },

    {
      "name" : "Parmesan Crusted Chicken",
      "img" : "https://www.cookingclassy.com/wp-content/uploads/2020/01/parmesan-crusted-chicken-08-600x900.jpg",
      "price" : "15.50",
      "desc" : "Parmesan-crusted chicken, fresh greens, crispy prosciutto, roma tomatoes, buttermilk ranch, balsamic glaze"
    },
    {
      "name" : "Rosa's Signature Caesar",
      "img" : "https://media-cdn.tripadvisor.com/media/photo-s/05/b8/f4/e7/luna-rosa-gelato-cafe.jpg",
      "price" : "12.00",
      "desc" : "romaine, romano, creamy caesar dressing, rustic croutons"
    }
    ,
    {
      "name" : "Chicken Parmesan",
      "price" : "20.50",
      "img" : "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Chicken-Parmesan-14.jpg?w=667&auto=compress%2Cformat&fit=crop&dm=1618755606&s=ecf8a228d1680978189ad65ef443750a",
      "desc" : "hand-breaded milanese-style chicken breast, imported pomodorina, mozzarella, capellini  "
    },
    {
      "name" : "Chicken Marsala",
      "img" : "https://www.cookingclassy.com/wp-content/uploads/2020/02/chicken-marsala-02-600x900.jpg",
      "price" : "23.00",
      "desc" : "chicken breast, mushrooms, marsala wine sauce, roasted garlic, capellini "
    },
    {
      "name" : "Grilled Salmon",
      "img" : "https://www.wholesomeyum.com/wp-content/uploads/2021/06/wholesomeyum-how-to-grill-salmon-perfect-grilled-salmon-recipe-4.jpg",
      "price" : "25.50",
      "desc" : "grilled salmon filet, calabrian honey pepper glaze, spinach + sun-dried tomato pasta "
    }
    ,
    {
      "name" : "Shrimp Portofino",
      "img" : "https://www.chicken.ca/wp-content/uploads/2020/09/Pasta-Portrofino.jpg",
      "price" : "22.00",
      "desc" : "sautéed jumbo shrimp, capellini, spinach, mushrooms, garlic, pine nuts, lemon butter "
    },
    {
      "name" : "Steak + Potatoes",
      "img" : "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/14/1491419866-recipes-steak-potato-salad-0517.jpg",
      "price" : "30.00",
      "desc" : "10 oz. sirloin, buttermilk mashed potatoes, sautéed broccolini "
    }
    ,
    {
      "name" : "Pasta Milano",
      "img" : "https://www.garnishandglaze.com/wp-content/uploads/2020/09/chicken-pasta-milano-2.jpg",
      "price" : "20.00",
      "desc" : "roasted chicken, sun-dried tomatoes, mushrooms, rigatoni, roasted-garlic cream sauce "
    },
    {
      "name" : "Seafood Ravioli",
      "img" : "https://www.willcookforsmiles.com/wp-content/uploads/2015/02/Ravioli-with-Seafood-Spinach-Mushrooms-in-Garlic-Cream-Sauce-1-from-willcookforsmiles.com_.jpg",
      "price" : "24.00",
      "desc" : "seafood-filled fresh pasta, roma tomatoes, asparagus, lemon butter, shrimp "
    }

    ],

  removeProduct: function () {
    "use strict";

    var item = $(this).closest(".shopping-cart--list-item");

    item.addClass("closing");
    window.setTimeout( function () {
      item.remove();
      app.updateTotals();
    }, 500); // Timeout for css animation
  },

  addProduct: function () {
    "use strict";

    var qtyCtr = $(this).prev(".product-qty"),
        quantity = parseInt(qtyCtr.html(), 10) + 1;

    app.updateProductSubtotal(this, quantity);
  },

  subtractProduct: function () {
    "use strict";

    var qtyCtr = $(this).next(".product-qty"),
        num = parseInt(qtyCtr.html(), 10) - 1,
        quantity = num <= 0 ? 0 : num;

    app.updateProductSubtotal(this, quantity);
  },

  updateProductSubtotal: function (context, quantity) {
    "use strict";

    var ctr = $(context).closest(".product-modifiers"),
        productQtyCtr = ctr.find(".product-qty"),
        productPrice = parseFloat(ctr.data("product-price")),
        subtotalCtr = ctr.find(".product-total-price"),
        subtotalPrice = quantity * productPrice;

    productQtyCtr.html(quantity);
    subtotalCtr.html( subtotalPrice.to_$() );

    app.updateTotals();
  },

  updateTotals: function () {
    "use strict";

    var products = $(".shopping-cart--list-item"),
        subtotal = 0,
        shipping;

    for (var i = 0; i < products.length; i += 1) {
      subtotal += parseFloat( $(products[i]).find(".product-total-price").html().strip$() );
    }

    shipping = (subtotal > 0 && subtotal < (100 / 1.06)) ? app.shipping : 0;

    $("#subtotalCtr").find(".cart-totals-value").html( subtotal.to_$() );
    $("#taxesCtr").find(".cart-totals-value").html( (subtotal * 0.06).to_$() );
    $("#totalCtr").find(".cart-totals-value").html( (subtotal * 1.06 + shipping).to_$() );
    $("#shippingCtr").find(".cart-totals-value").html( shipping.to_$() );
  },

  attachEvents: function () {
    "use strict";

    $(".product-remove").on("click", app.removeProduct);
    $(".product-plus").on("click", app.addProduct);
    $(".product-subtract").on("click", app.subtractProduct);
  },

  setProductImages: function () {
    "use strict";

    var images = $(".product-image"),
        ctr,
        img;

    for (var i = 0; i < images.length; i += 1) {
      ctr = $(images[i]),
      img = ctr.find(".product-image--img");

      ctr.css("background-image", "url(" + img.attr("src") + ")");
      img.remove();
    }
  },

  renderTemplates: function () {
    "use strict";

    var products = app.products,
        content = [],
        template = new t( $("#shopping-cart--list-item-template").html() );

    for (var i = 0; i < products.length; i += 1) {
      content[i] = template.render(products[i]);
    }

    $("#shopping-cart--list").html(content.join(""));
  }

};

app.renderTemplates();
app.setProductImages();
app.attachEvents();