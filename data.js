// ========== iPHONES (X → 17 avec tous les modèles) ==========
const iphones = [
  // iPhone X / XS / XR
  {id:"ipX", brand:"Apple", name:"iPhone X", gen:"x", price:299, badge:"promo", stars:4, specs:"A11 · 64Go · 5.8\" OLED", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphonex__f3yrj7qhcpam_large.jpg", desc:"Premier iPhone OLED bord à bord."},
  {id:"ipXS", brand:"Apple", name:"iPhone XS", gen:"x", price:349, badge:"promo", stars:4, specs:"A12 · 64Go · 5.8\" OLED", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphonexs__y9b0s5vwllq2_large.jpg", desc:"A12 Bionic, double caméra."},
  {id:"ipXSM", brand:"Apple", name:"iPhone XS Max", gen:"x", price:399, badge:"promo", stars:4, specs:"A12 · 64Go · 6.5\" OLED", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphonexsmax__c89jh5fpfwk2_large.jpg", desc:"Grand écran 6.5\"."},
  {id:"ipXR", brand:"Apple", name:"iPhone XR", gen:"x", price:279, badge:"promo", stars:4, specs:"A12 · 64Go · 6.1\" LCD", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphonexr__frep74w97d42_large.jpg", desc:"6 coloris vifs."},
  
  // iPhone 11 (standard, Pro, Pro Max)
  {id:"ip11", brand:"Apple", name:"iPhone 11", gen:"11", price:329, badge:"promo", stars:4, specs:"A13 · 64Go · 6.1\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone11__bvd63ddjwom2_large.jpg", desc:"Double caméra, mode Nuit."},
  {id:"ip11P", brand:"Apple", name:"iPhone 11 Pro", gen:"11", price:449, badge:null, stars:5, specs:"A13 · 64Go · 5.8\" OLED", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone11pro__b5fmv6l9iu02_large.jpg", desc:"Triple caméra Pro."},
  {id:"ip11PM", brand:"Apple", name:"iPhone 11 Pro Max", gen:"11", price:499, badge:null, stars:5, specs:"A13 · 64Go · 6.5\" OLED", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone11promax__bm5n6w5n3r62_large.jpg", desc:"Le plus grand Pro 2019."},
  
  // iPhone 12 (mini, standard, Pro, Pro Max)
  {id:"ip12m", brand:"Apple", name:"iPhone 12 mini", gen:"12", price:349, badge:null, stars:4, specs:"A14 · 64Go · 5.4\" OLED · 5G", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone12mini__f51bchpba5a2_large.jpg", desc:"Compact 5G."},
  {id:"ip12", brand:"Apple", name:"iPhone 12", gen:"12", price:429, badge:null, stars:4, specs:"A14 · 64Go · 6.1\" OLED · 5G", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone12__dxqrfmkq2yqy_large.jpg", desc:"Premier iPhone 5G."},
  {id:"ip12P", brand:"Apple", name:"iPhone 12 Pro", gen:"12", price:549, badge:null, stars:5, specs:"A14 · 128Go · 6.1\" · LiDAR", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone12pro__c0mf2m8pvdim_large.jpg", desc:"Acier inox, LiDAR."},
  {id:"ip12PM", brand:"Apple", name:"iPhone 12 Pro Max", gen:"12", price:649, badge:null, stars:5, specs:"A14 · 128Go · 6.7\" · LiDAR", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone12promax__f3yrj7qhcpam_large.jpg", desc:"Le plus grand 12."},
  
  // iPhone 13 (mini, standard, Pro, Pro Max)
  {id:"ip13m", brand:"Apple", name:"iPhone 13 mini", gen:"13", price:399, badge:null, stars:4, specs:"A15 · 128Go · 5.4\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone13mini__f3n5dtdh0csy_large.jpg", desc:"Dernier mini."},
  {id:"ip13", brand:"Apple", name:"iPhone 13", gen:"13", price:499, badge:null, stars:5, specs:"A15 · 128Go · 6.1\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone13__kqvjvdqt0f02_large.jpg", desc:"Mode Cinématique."},
  {id:"ip13P", brand:"Apple", name:"iPhone 13 Pro", gen:"13", price:649, badge:null, stars:5, specs:"A15 · 128Go · 6.1\" · 120Hz", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone13pro__bqh7gq2vk1sy_large.jpg", desc:"ProMotion 120Hz."},
  {id:"ip13PM", brand:"Apple", name:"iPhone 13 Pro Max", gen:"13", price:749, badge:null, stars:5, specs:"A15 · 128Go · 6.7\" · 120Hz", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone13promax__bvjpknf9g8wy_large.jpg", desc:"Batterie record."},
  
  // iPhone 14 (standard, Plus, Pro, Pro Max)
  {id:"ip14", brand:"Apple", name:"iPhone 14", gen:"14", price:599, badge:null, stars:4, specs:"A15 · 128Go · 6.1\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone14__dnza8gchvbua_large.jpg", desc:"Crash Detection."},
  {id:"ip14P", brand:"Apple", name:"iPhone 14 Plus", gen:"14", price:699, badge:null, stars:4, specs:"A15 · 128Go · 6.7\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone14plus__gvvhxeaqikey_large.jpg", desc:"Grand écran abordable."},
  {id:"ip14P2", brand:"Apple", name:"iPhone 14 Pro", gen:"14", price:799, badge:"hot", stars:5, specs:"A16 · 128Go · Dynamic Island", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone14pro__etqcvkq7t2ay_large.jpg", desc:"Dynamic Island."},
  {id:"ip14PM", brand:"Apple", name:"iPhone 14 Pro Max", gen:"14", price:899, badge:"hot", stars:5, specs:"A16 · 128Go · 6.7\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone14promax__emgdh4fldx2y_large.jpg", desc:"Le summum 2022."},
  
  // iPhone 15 (standard, Plus, Pro, Pro Max)
  {id:"ip15", brand:"Apple", name:"iPhone 15", gen:"15", price:699, badge:null, stars:5, specs:"A16 · 128Go · USB-C", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone15__c3v8i5qqvzwy_large.jpg", desc:"USB-C enfin !"},
  {id:"ip15P", brand:"Apple", name:"iPhone 15 Plus", gen:"15", price:799, badge:null, stars:5, specs:"A16 · 128Go · 6.7\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone15plus__c3v8i5qqvzwy_large.jpg", desc:"Grand écran USB-C."},
  {id:"ip15P2", brand:"Apple", name:"iPhone 15 Pro", gen:"15", price:899, badge:"new", stars:5, specs:"A17 Pro · 128Go · Titane", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone15pro__c3v8i5qqvzwy_large.jpg", desc:"Premier iPhone en titane."},
  {id:"ip15PM", brand:"Apple", name:"iPhone 15 Pro Max", gen:"15", price:999, badge:"new", stars:5, specs:"A17 Pro · 256Go · Zoom 5x", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone15promax__c3v8i5qqvzwy_large.jpg", desc:"Zoom 5x exclusif."},
  
  // iPhone 16 (16e, standard, Plus, Pro, Pro Max)
  {id:"ip16e", brand:"Apple", name:"iPhone 16e", gen:"16", price:499, badge:"promo", stars:4, specs:"A18 · 128Go · 6.1\"", img:"https://www.apple.com/newsroom/images/2025/02/apple-introduces-iphone-16e/article/Apple-iPhone-16e-hero-250219_big.jpg.large.jpg", desc:"Budget 2025."},
  {id:"ip16", brand:"Apple", name:"iPhone 16", gen:"16", price:649, badge:"new", stars:5, specs:"A18 · 128Go · Apple Intelligence", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone16__c3v8i5qqvzwy_large.jpg", desc:"IA intégrée."},
  {id:"ip16P", brand:"Apple", name:"iPhone 16 Plus", gen:"16", price:749, badge:"new", stars:5, specs:"A18 · 128Go · 6.7\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone16plus__c3v8i5qqvzwy_large.jpg", desc:"Grand écran."},
  {id:"ip16P2", brand:"Apple", name:"iPhone 16 Pro", gen:"16", price:899, badge:"new", stars:5, specs:"A18 Pro · 128Go · 6.3\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone16pro__c3v8i5qqvzwy_large.jpg", desc:"Camera Control."},
  {id:"ip16PM", brand:"Apple", name:"iPhone 16 Pro Max", gen:"16", price:999, badge:"new", stars:5, specs:"A18 Pro · 256Go · 6.9\"", img:"https://www.apple.com/v/iphone/home/cb/images/overview/compare/compare_iphone16promax__c3v8i5qqvzwy_large.jpg", desc:"Le plus grand 2024."},
  
  // iPhone 17 (standard, Air, Pro, Pro Max)
  {id:"ip17", brand:"Apple", name:"iPhone 17", gen:"17", price:799, badge:"new", stars:5, specs:"A19 · 256Go · 120Hz", img:"https://images.macrumors.com/t/QmB3BF4oG7rWBIMvFxZsMq7-L3M=/1600x0/article-new/2025/09/iphone-17-black.jpg", desc:"120Hz standard."},
  {id:"ip17air", brand:"Apple", name:"iPhone 17 Air", gen:"17", price:999, badge:"new", stars:5, specs:"A19 Pro · 256Go · 5.6mm", img:"https://images.macrumors.com/t/n4K2cNAqJt1OTqMBL3Bly_KYdXk=/1600x0/article-new/2025/09/iphone-17-air.jpg", desc:"Le plus fin jamais."},
  {id:"ip17P", brand:"Apple", name:"iPhone 17 Pro", gen:"17", price:1099, badge:"new", stars:5, specs:"A19 Pro · 256Go · 6.3\"", img:"https://images.macrumors.com/t/1gUq9NRNV_YKFtF_kB3VNFDrxwU=/1600x0/article-new/2025/09/iphone-17-pro-natural-titanium.jpg", desc:"Pro 2025."},
  {id:"ip17PM", brand:"Apple", name:"iPhone 17 Pro Max", gen:"17", price:1199, badge:"new", stars:5, specs:"A19 Pro · 256Go · 6.9\"", img:"https://images.macrumors.com/t/1gUq9NRNV_YKFtF_kB3VNFDrxwU=/1600x0/article-new/2025/09/iphone-17-pro-natural-titanium.jpg", desc:"Le meilleur iPhone."}
];

// ========== HP PRODUCTS (amélioré) ==========
const hpProducts = [
  // OmniBook
  {id:"hp1", brand:"HP", name:"OmniBook Ultra Flip 14", price:1399, badge:"new", stars:5, cat:"omnibook", specs:"Intel Ultra 7 · 32Go · OLED 2.8K", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c09325553.png", desc:"2-en-1 premium."},
  {id:"hp2", brand:"HP", name:"OmniBook X 14", price:1099, badge:"new", stars:5, cat:"omnibook", specs:"Snapdragon X · 16Go · 26h", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08662994.png", desc:"Autonomie record."},
  {id:"hp3", brand:"HP", name:"OmniBook 7 14\"", price:799, badge:null, stars:4, cat:"omnibook", specs:"Intel Ultra 5 · 16Go · OLED", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08580745.png", desc:"Successeur Envy."},
  
  // EliteBook
  {id:"hp4", brand:"HP", name:"EliteBook X G1a 14", price:1299, badge:"new", stars:5, cat:"elitebook", specs:"AMD Ryzen AI · 32Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c09068375.png", desc:"Pro 2025."},
  {id:"hp5", brand:"HP", name:"EliteBook 840 G11", price:999, badge:null, stars:4, cat:"elitebook", specs:"Intel Ultra 5 · 16Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08556536.png", desc:"Polyvalent pro."},
  
  // Dragonfly
  {id:"hp6", brand:"HP", name:"Elite Dragonfly G4", price:1599, badge:"hot", stars:5, cat:"dragonfly", specs:"Intel Ultra 7 · 32Go · 990g", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08311060.png", desc:"Ultra-léger 990g."},
  
  // Spectre
  {id:"hp_spectre1", brand:"HP", name:"Spectre x360 14", price:1499, badge:"new", stars:5, cat:"spectre", specs:"Intel Ultra 7 · 32Go · OLED", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c09325553.png", desc:"Premium convertible."},
  {id:"hp_spectre2", brand:"HP", name:"Spectre 16", price:1799, badge:null, stars:5, cat:"spectre", specs:"Intel Ultra 9 · 32Go · 16\"", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c09325553.png", desc:"Grand écran créatif."},
  
  // OMEN Gaming
  {id:"hp7", brand:"HP", name:"OMEN 16 RTX 4060", price:1399, badge:"hot", stars:5, cat:"omen", specs:"i7-13700H · RTX 4060 · 165Hz", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Gaming performant."},
  {id:"hp8", brand:"HP", name:"OMEN 16 RTX 4070", price:1799, badge:"new", stars:5, cat:"omen", specs:"i9-13900HX · RTX 4070 · 240Hz", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Pour joueurs exigeants."},
  {id:"hp_omen_transcend", brand:"HP", name:"OMEN Transcend 14", price:1999, badge:"new", stars:5, cat:"omen", specs:"Intel Ultra 9 · RTX 4070 · OLED", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Gaming ultra-portable."},
  
  // Victus
  {id:"hp9", brand:"HP", name:"Victus 15 RTX 3050", price:699, badge:"promo", stars:4, cat:"victus", specs:"Ryzen 5 · RTX 3050 · 144Hz", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c07941451.png", desc:"Gaming accessible."},
  {id:"hp10", brand:"HP", name:"Victus 16 RTX 4050", price:899, badge:null, stars:4, cat:"victus", specs:"i5 · RTX 4050 · 16Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c07941451.png", desc:"Sweet-spot gaming."},
  
  // ZBook Workstation
  {id:"hp11", brand:"HP", name:"ZBook Studio G10", price:2199, badge:null, stars:5, cat:"zbook", specs:"Xeon W · RTX 4000 Ada · 64Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Station mobile."},
  {id:"hp12", brand:"HP", name:"ZBook Firefly 14", price:1799, badge:null, stars:4, cat:"zbook", specs:"Ultra 7 · RTX A500 · 32Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Workstation légère."},
  {id:"hp_zbook_power", brand:"HP", name:"ZBook Power G11", price:2499, badge:"new", stars:5, cat:"zbook", specs:"Intel Core Ultra 9 · RTX 5000 Ada · 64Go", img:"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/unlocked/c08261001.png", desc:"Puissance maximale."}
];

// ========== MACBOOKS (2020-2026 avec prix de base personnalisables) ==========
const macbooks = [
  // M1 (2020-2021)
  {id:"mac-m1air13", brand:"Apple", name:"MacBook Air 13\" M1", chip:"m1", type:"air", basePrice:649, badge:"promo", stars:5, specs:"M1 · 8Go · 256Go · 18h", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg", desc:"Sans ventilateur."},
  {id:"mac-m1pro13", brand:"Apple", name:"MacBook Pro 13\" M1", chip:"m1", type:"pro", basePrice:699, badge:"promo", stars:5, specs:"M1 · 8Go · 256Go · Touch Bar", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_macbookpro-13in-m1-chip-screen_11102020_big.jpg.large.jpg", desc:"20h autonomie."},
  {id:"mac-m1pro14", brand:"Apple", name:"MacBook Pro 14\" M1 Pro", chip:"m1", type:"pro", basePrice:999, badge:null, stars:5, specs:"M1 Pro · 16Go · 512Go · XDR", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg", desc:"Refonte 2021."},
  {id:"mac-m1pro16", brand:"Apple", name:"MacBook Pro 16\" M1 Pro", chip:"m1", type:"pro", basePrice:1299, badge:null, stars:5, specs:"M1 Pro · 16Go · 512Go", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg", desc:"Grand écran XDR."},
  {id:"mac-m1max16", brand:"Apple", name:"MacBook Pro 16\" M1 Max", chip:"m1", type:"pro", basePrice:1799, badge:"hot", stars:5, specs:"M1 Max · 32Go · 1To · GPU 32-core", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large.jpg", desc:"Puissance maximale M1."},
  
  // M2 (2022-2023)
  {id:"mac-m2air13", brand:"Apple", name:"MacBook Air 13\" M2", chip:"m2", type:"air", basePrice:749, badge:null, stars:5, specs:"M2 · 8Go · 256Go · 13.6\"", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Air-M2-hero-220606_big.jpg.large.jpg", desc:"Nouveau design."},
  {id:"mac-m2air15", brand:"Apple", name:"MacBook Air 15\" M2", chip:"m2", type:"air", basePrice:899, badge:null, stars:5, specs:"M2 · 8Go · 256Go · 15.3\"", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Air-15-in-M2-hero-230605_big.jpg.large.jpg", desc:"Premier Air 15\"."},
  {id:"mac-m2pro14", brand:"Apple", name:"MacBook Pro 14\" M2 Pro", chip:"m2", type:"pro", basePrice:1299, badge:null, stars:5, specs:"M2 Pro · 16Go · 512Go", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-hero-230117_big.jpg.large.jpg", desc:"M2 Pro 2023."},
  {id:"mac-m2max16", brand:"Apple", name:"MacBook Pro 16\" M2 Max", chip:"m2", type:"pro", basePrice:1999, badge:null, stars:5, specs:"M2 Max · 32Go · 1To", img:"https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-hero-230117_big.jpg.large.jpg", desc:"GPU 38-core."},
  
  // M3 (2023-2024)
  {id:"mac-m3air13", brand:"Apple", name:"MacBook Air 13\" M3", chip:"m3", type:"air", basePrice:899, badge:null, stars:5, specs:"M3 · 8Go · 256Go · Ray Tracing", img:"https://www.apple.com/newsroom/images/2024/03/apple-introduces-macbook-air-with-m3/article/Apple-MacBook-Air-M3-hero-240304_big.jpg.large.jpg", desc:"Ray tracing."},
  {id:"mac-m3pro14", brand:"Apple", name:"MacBook Pro 14\" M3 Pro", chip:"m3", type:"pro", basePrice:1499, badge:null, stars:5, specs:"M3 Pro · 18Go · 512Go · Noir sidéral", img:"https://www.apple.com/newsroom/images/2023/10/apple-unveils-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-M3-hero-231030_big.jpg.large.jpg", desc:"Noir sidéral."},
  {id:"mac-m3max16", brand:"Apple", name:"MacBook Pro 16\" M3 Max", chip:"m3", type:"pro", basePrice:2299, badge:"hot", stars:5, specs:"M3 Max · 36Go · 1To · GPU 40-core", img:"https://www.apple.com/newsroom/images/2023/10/apple-unveils-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-M3-hero-231030_big.jpg.large.jpg", desc:"Le plus puissant 2023."},
  
  // M4 (2024-2025)
  {id:"mac-m4air13", brand:"Apple", name:"MacBook Air 13\" M4", chip:"m4", type:"air", basePrice:1099, badge:"new", stars:5, specs:"M4 · 16Go · 256Go · 24h", img:"https://www.apple.com/newsroom/images/2025/03/apple-introduces-macbook-air-with-m4/article/Apple-MacBook-Air-M4-hero-250225_big.jpg.large.jpg", desc:"16Go RAM de série."},
  {id:"mac-m4air15", brand:"Apple", name:"MacBook Air 15\" M4", chip:"m4", type:"air", basePrice:1299, badge:"new", stars:5, specs:"M4 · 16Go · 256Go · 15.3\"", img:"https://www.apple.com/newsroom/images/2025/03/apple-introduces-macbook-air-with-m4/article/Apple-MacBook-Air-M4-hero-250225_big.jpg.large.jpg", desc:"Grand Air M4."},
  {id:"mac-m4pro14", brand:"Apple", name:"MacBook Pro 14\" M4", chip:"m4", type:"pro", basePrice:1599, badge:"new", stars:5, specs:"M4 · 16Go · 512Go · XDR", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"Pro M4 2024."},
  {id:"mac-m4pro14p", brand:"Apple", name:"MacBook Pro 14\" M4 Pro", chip:"m4", type:"pro", basePrice:1999, badge:"new", stars:5, specs:"M4 Pro · 24Go · 512Go · TB5", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"Thunderbolt 5."},
  {id:"mac-m4pro16", brand:"Apple", name:"MacBook Pro 16\" M4 Pro", chip:"m4", type:"pro", basePrice:2499, badge:"new", stars:5, specs:"M4 Pro · 24Go · 512Go", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"Grand Pro M4."},
  
  // M5 (2025-2026)
  {id:"mac-m5pro14", brand:"Apple", name:"MacBook Pro 14\" M5", chip:"m5", type:"pro", basePrice:1599, badge:"new", stars:5, specs:"M5 · 16Go · 512Go", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"M5 2025."},
  {id:"mac-m5pro14p", brand:"Apple", name:"MacBook Pro 14\" M5 Pro", chip:"m5", type:"pro", basePrice:2199, badge:"new", stars:5, specs:"M5 Pro · 24Go · 512Go", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"M5 Pro."},
  {id:"mac-m5pro16", brand:"Apple", name:"MacBook Pro 16\" M5 Pro", chip:"m5", type:"pro", basePrice:2699, badge:"new", stars:5, specs:"M5 Pro · 24Go · 512Go", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"Grand M5 Pro."},
  {id:"mac-m5max16", brand:"Apple", name:"MacBook Pro 16\" M5 Max", chip:"m5", type:"pro", basePrice:3899, badge:"hot", stars:5, specs:"M5 Max · 48Go · 1To · GPU 40-core", img:"https://www.apple.com/newsroom/images/2024/11/apple-introduces-new-macbook-pro-featuring-m4-family-chips/article/Apple-MacBook-Pro-M4-hero-241028_big.jpg.large.jpg", desc:"Le sommet absolu."}
];

const allProducts = [...iphones, ...hpProducts, ...macbooks];
let cartItems = [];