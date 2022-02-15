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
			"color: #121212;\n text-shadow: -1px 1px 0 #41ba45, 1px 1px 0 #c63d2b, 1px -1px 0 #42afac, -1px -1px 0 #c6c23f;",
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
];

export default data;
