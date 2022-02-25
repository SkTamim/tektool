let data = [
	{
		id: "01",
		text: "Shadow",
		styles:
			"color: #CFC547; \n text-shadow: 16px 22px 11px rgba(168,158,32,0.8);",
	},
	{
		id: "02",
		text: "Glow",
		styles:
			" color: #CFC547;\n text-shadow: 10px 10px 25px rgb(81,67,21), -10px 10px 25px rgb(81,67,21), -10px -10px 25px rgb(81,67,21),10px -10px 25px rgb(81,67,21);",
	},
	{
		id: "03",
		text: "Blurred",
		styles: "color: transparent;\n text-shadow: 0 0 8px #316472;",
	},
	{
		id: "04",
		text: "Outlined",
		bgStyle: "backgroundColor:#000;",
		styles:
			"color: #121212;\n text-shadow: -1px 1px 0 #41ba45, 1px 1px 0 #c63d2b, 1px -1px 0 #42afac, -1px -1px 0 #c6c23f; background-color:#000;",
	},
	{
		id: "05",
		text: "Dropping",
		bgStyle: "backgroundColor: #efefef;",
		styles:
			"color: #121212; \n text-shadow: 0 2px 1px #747474, -1px 3px 1px #767676, -2px 5px 1px #787878, -3px 7px 1px #7a7a7a,-4px 9px 1px #7f7f7f,-5px 11px 1px #838383,-6px 13px 1px #878787,-7px 15px 1px #8a8a8a, -8px 17px 1px #8e8e8e,-9px 19px 1px #949494,-10px 21px 1px #989898,-11px 23px 1px #9f9f9f,-12px 25px 1px #a2a2a2, -13px 27px 1px #a7a7a7,-14px 29px 1px #adadad,-15px 31px 1px #b3b3b3,-16px 33px 1px #b6b6b6,-17px 35px 1px #bcbcbc, -18px 37px 1px #c2c2c2,-19px 39px 1px #c8c8c8,-20px 41px 1px #cbcbcb,-21px 43px 1px #d2d2d2,-22px 45px 1px #d5d5d5, -23px 47px 1px #e2e2e2,-24px 49px 1px #e6e6e6,-25px 51px 1px #eaeaea,-26px 53px 1px #efefef;",
	},
	{
		id: "06",
		text: "Emerging Out",
		bgStyle: "backgroundColor: #000;",
		styles:
			"color: #dfdfdf; \n text-shadow: 0 2px 2px #dfdfdf, -2px 5px 1px #b8b8b8, -4px 8px 0px #979797, -6px 11px 0px #747474, -8px 14px 0px #565656,-10px 17px 0px #343434, -12px 20px 0px #171717,-14px 23px 0px #000;",
	},
	{
		id: "07",
		text: "Letterpressed",
		bgStyle: "backgroundColor: #222;",
		styles:
			" color: rgba(0,0,0,0.6); \n text-shadow: 2px 2px 3px rgba(255,255,255,0.1);",
	},
	{
		id: "08",
		text: "Smoky Shadow",
		bgStyle: "backgroundColor: #121212;",
		styles: " text-shadow: 3px 3px 20px #ff99cc,-2px 1px 30px #ff99cc;",
	},
	{
		id: "09",
		text: "RAINBOW",
		bgStyle: "backgroundColor: #000;",
		styles:
			"color: #FF0000;\n text-shadow: 0 2px 2px #FF0000, -2px 5px 0 #FF7F00, -4px 10px 0 #FFFF00,-8px 15px 0 #00FF00,-12px 20px 0 #0000FF,-16px 25px 0 #4B0082,-20px 30px 0 #9400D3;",
	},
	{
		id: "10",
		text: "Shadow",
		bgStyle: "backgroundColor: #fff;border:1px solid #222;",
		styles:
			"color:#000; \n text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);",
	},
	{
		id: "11",
		text: "Shadow",
		bgStyle: "backgroundColor:hsl(200 50% 50%);",
		styles: " text-shadow: .1em .1em 0 hsl(200 50% 30%);",
	},
	{
		id: "12",
		text: "Shadow",
		bgStyle: "backgroundColor:#fff; border:1px solid #000;",
		styles:
			" color: tomato; \n --x-offset: -0.0625em; \n --y-offset: 0.0625em; \n --stroke: 0.025em;\n --background-color: white; \n --stroke-color: lightblue; \n text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color), calc( var(--x-offset) - var(--stroke) ) calc( var(--y-offset) + var(--stroke) )0px var(--stroke-color);",
	},
	{
		id: "13",
		text: "Shadow",
		bgStyle: "backgroundColor:#ece5da; ",
		styles:
			" color: #f1ebe5; \n text-shadow: 0 13.36px 8.896px #c4b59d,0 -2px 1px #fff;",
	},
	{
		id: "14",
		text: "Shadow",
		bgStyle: "backgroundColor:#fff; border:1px solid #000;",
		styles:
			" color: #000; \n text-shadow:  0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b, 0 -0.25em 0 #fefc4b;",
	},
	{
		id: "15",
		text: "Shadow",
		bgStyle: "backgroundColor:#fff; border:1px solid #000;",
		styles: " color: #fff; \n text-shadow: -15px 5px 20px #ced0d3;",
	},
	{
		id: "16",
		text: "Shadow",
		bgStyle: "backgroundColor:#000; ",
		styles: " color: #fff; \n text-shadow: -15px 5px 20px #ced0d3;",
	},
	{
		id: "17",
		text: "Shadow",
		bgStyle: "backgroundColor:#2196f3; ",
		styles:
			" color: #fff; \n text-shadow: -1px -1px 0px #2196f3, 3px 3px 0px #2196f3, 6px 6px 0px #0d47a1;",
	},
	{
		id: "18",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: yellow; \n --color1: goldenrod; \n--color2: orangered;\n --color3: mediumblue;\n --color4:purple; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "19",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: lightpink; \n --color1: pink; \n--color2: orangered;\n --color3: red;\n --color4:magenta; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "20",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: lightyellow; \n --color1: yellow; \n--color2: lime;\n --color3: green;\n --color4:mediumblue; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "21",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: lightyellow; \n --color1: gold; \n--color2: firebrick;\n --color3: pink;\n --color4:red; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "22",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: azure; \n --color1: azure; \n--color2: aqua;\n --color3: dodgerblue;\n --color4:blue; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "23",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: tomato; \n --color1: orangered; \n--color2: firebrick;\n --color3: maroon;\n --color4:darkred; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "24",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: lightyellow; \n --color1: yellow; \n--color2: orange;\n --color3: brown;\n --color4:purple; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "25",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: yellow; \n --color1: yellow; \n--color2: lime;\n --color3: green;\n --color4:darkgreen; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "26",
		text: "Shadow",
		bgStyle: "backgroundColor:#090000; ",
		styles:
			" color: lightyellow; \n --color1: yellow; \n--color2: gold;\n --color3: orange;\n --color4:darkred; \n  text-shadow: 0 0 10px var(--color1),0 0 20px var(--color2),0 0 40px var(--color3),0 0 80px var(--color4); ",
	},
	{
		id: "27",
		text: "relief",
		bgStyle: "backgroundColor:#3a50d9; ",
		styles:
			" color: #e0eff2; \n  text-shadow: -4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27;",
	},
	{
		id: "28",
		text: "close",
		bgStyle: "backgroundColor:#fff; border:1px solid #000;",
		styles:
			" color: #202c2d; \n  text-shadow:0 1px #808d93,-1px 0 #cdd2d5,-1px 2px #808d93,-2px 1px #cdd2d5,-2px 3px #808d93,-3px 2px #cdd2d5,-3px 4px #808d93,-4px 3px #cdd2d5,-4px 5px #808d93,-5px 4px #cdd2d5,-5px 6px #808d93,-6px 5px #cdd2d5,-6px 7px #808d93,-7px 6px #cdd2d5,-7px 8px #808d93,-8px 7px #cdd2d5;",
	},
	{
		id: "29",
		text: "shadow",
		bgStyle: "backgroundColor:#fff; border:1px solid #000;",
		styles:
			" color: #444; \n text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee,3px 2px 1px #ccc, 2px 3px 1px #eee,4px 3px 1px #ccc, 3px 4px 1px #eee,5px 4px 1px #ccc, 4px 5px 1px #eee,6px 5px 1px #ccc, 5px 6px 1px #eee,7px 6px 1px #ccc;",
	},
	{
		id: "30",
		text: "shadow",
		bgStyle: "backgroundColor:#000;",
		styles:
			" color: #fff; \n text-shadow: 0px 0px 5px #FFF, 0px 0px 10px #FFF, 0px 0px 15px #FFF, 0px 0px 20px #FF2D95, 0px 0px 30px #FF2D95, 0px 0px 40px #FF2D95, 0px 0px 50px #FF2D95, 0px 0px 75px #FF2D95;",
	},
	{
		id: "31",
		text: "shadow",
		bgStyle: "backgroundColor:#000;",
		styles:
			" color: #fff; \n text-shadow: 0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red;",
	},
	{
		id: "32",
		text: "shadow",
		bgStyle: "backgroundColor:#2C2E38;",
		styles:
			" color: #D7CEB2; \n text-shadow: 3px 3px 0px #2C2E38, 5px 5px 0px #5C5F72;",
	},
	{
		id: "33",
		text: "shadow",
		bgStyle: "backgroundColor:#7CA0B6;",
		styles:
			" color: #fff; \n text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;",
	},
	{
		id: "34",
		text: "shadow",
		bgStyle: "backgroundColor:#000;",
		styles: " color: #FB4264; \n text-shadow: 0 0 3vw #F40A35;",
	},
	{
		id: "35",
		text: "shadow",
		bgStyle: "backgroundColor:#000;",
		styles: " color: #426DFB; \n  text-shadow: 0 0 3vw #2356FF;",
	},
	{
		id: "36",
		text: "shadow",
		bgStyle: "backgroundColor:#222;",
		styles:
			" color: #fff; \n  text-shadow:-3px -3px 0 #222,3px -3px 0 #222,-3px 3px 0 #222,3px 3px 0 #222,4px 4px 0 #fff,5px 5px 0 #fff,6px 6px 0 #fff,7px 7px 0 #fff;",
	},
	{
		id: "37",
		text: "Mystic",
		bgStyle: "backgroundColor:#5e5555;",
		styles:
			" color: rgba(255, 255, 255, 0.596); \n  text-shadow: 20px 0px 10px rgb(0, 0, 0);",
	},
	{
		id: "38",
		text: "Mystic",
		bgStyle: "backgroundColor:#fff; border:1px solid #000; ",
		styles:
			" color:rgb(255, 0, 0); \n  text-shadow: 0px -3px rgb(255, 196, 0);",
	},
	{
		id: "39",
		text: "Bungee",
		bgStyle: "backgroundColor:#222; ",
		styles:
			" color:rgb(160, 12, 12); \n   text-shadow: rgb(66 45 45) -2px 5px 0px;",
	},
	{
		id: "40",
		text: "Radioactive",
		bgStyle: "backgroundColor:#27292d; ",
		styles:
			" color: rgb(97, 214, 43); \n text-shadow: rgb(87 255 9) -10px -10px 20px;",
	},
	{
		id: "41",
		text: "Prickly",
		bgStyle: "backgroundColor:#fff; border:1px solid #000; ",
		styles: " color: #000; \n  text-shadow: rgb(119 119 119) -10px -10px 2px;",
	},
	{
		id: "42",
		text: "Codystar",
		bgStyle: "backgroundColor:#fff; border:1px solid #000; ",
		styles:
			" color: rgb(55, 58, 255); \n text-shadow: 1px 1px 10px rgb(16, 72, 255), 1px 1px 10px rgb(0, 195, 255);",
	},
	{
		id: "43",
		text: "shadow",
		bgStyle: "backgroundColor:#000; ",
		styles:
			" color: #fff; \n text-shadow:#888 -2px -2px 0px, #888 3px 3px 0px, #888 5px 5px 0px;",
	},
	{
		id: "44",
		text: "Shadow",
		bgStyle: "backgroundColor:#000; ",
		styles:
			" color:  rgb(94, 94, 94); \n  text-shadow: 3px 3px #ffff00; \n filter: drop-shadow(-5px 5px 20px #fff000);",
	},
];

export default data;
