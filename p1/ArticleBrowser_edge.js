/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['source-sans-pro, sans-serif']='<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'content',
            type:'rect',
            rect:['20px','120px','66.7%','450px','auto','auto'],
            fill:["rgba(43,50,60,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'article01',
               type:'rect',
               rect:['0px','0px','auto','auto','auto','auto']
            }]
         },
         {
            id:'imageBase',
            type:'rect',
            rect:['70%','370px','22.2%','200px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'placeholderImage2',
            type:'image',
            rect:['70%','370px','22.2%','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"placeholderImage.png",'50%','50%','200.24px','200.01px']
         },
         {
            id:'buttonArticle01',
            type:'rect',
            rect:['70%','120px','22.2%','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(28,52,77,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['11px','19px','auto','auto','auto','auto'],
               text:"ARTICLE 1",
               font:['source-sans-pro, sans-serif',20,"rgba(255,255,255,1.00)","100","none",""]
            }]
         },
         {
            id:'buttonArticle02',
            type:'rect',
            rect:['70%','180px','22.2%','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(40,125,125,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text1',
               type:'text',
               rect:['11px','19px','auto','auto','auto','auto'],
               text:"ARTICLE 2",
               font:['source-sans-pro, sans-serif',20,"rgba(255,255,255,1.00)","100","none",""]
            }]
         },
         {
            id:'buttonArticle03',
            type:'rect',
            rect:['70%','240px','22.2%','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(145,196,108,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'TextCopy2',
               type:'text',
               rect:['11px','19px','auto','auto','auto','auto'],
               text:"ARTICLE 3",
               font:['source-sans-pro, sans-serif',20,"rgba(255,255,255,1.00)","100","none",""]
            }]
         },
         {
            id:'buttonArticle04',
            type:'rect',
            rect:['70%','300px','22.2%','50px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(198,224,112,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text3',
               type:'text',
               rect:['11px','19px','auto','auto','auto','auto'],
               text:"ARTICLE 4",
               font:['source-sans-pro, sans-serif',20,"rgba(255,255,255,1.00)","100","none",""]
            }]
         },
         {
            id:'divider2',
            type:'rect',
            rect:['20px','106px','90%','2px','auto','auto'],
            fill:["rgba(43,50,60,1)",[0,[['rgba(40,125,125,1.00)',0],['rgba(198,224,112,1.00)',13],['rgba(198,224,112,1.00)',19],['rgba(145,196,108,1.00)',31],['rgba(145,196,108,1.00)',55],['rgba(198,224,112,1.00)',69],['rgba(40,125,125,1.00)',100]]]],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'divider1',
            type:'rect',
            rect:['70.1%','358px','22.2%','2px','auto','auto'],
            fill:["rgba(145,196,108,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'title',
            type:'text',
            rect:['20','48px','auto','auto','auto','auto'],
            text:"YOUR TITLE GOES HERE",
            align:"left",
            font:['source-sans-pro, sans-serif',42,"rgba(40,125,125,1.00)","100","none","normal"]
         },
         {
            id:'title2',
            type:'text',
            rect:['20','575px','auto','auto','auto','auto'],
            text:"© 2013 BY YOU",
            align:"left",
            font:['source-sans-pro, sans-serif',14,"rgba(40,125,125,1.00)","100","none","normal"]
         }],
         symbolInstances: [
         {
            id:'article01',
            symbolName:'article01'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '19px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '11px'],
            ["style", "font-size", '20px']
         ],
         "${_buttonArticle03}": [
            ["color", "background-color", 'rgba(145,196,108,1.00)'],
            ["style", "top", '240px'],
            ["style", "left", '70%'],
            ["style", "height", '50px'],
            ["style", "right", 'auto'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '22.23%']
         ],
         "${_imageBase}": [
            ["style", "top", '370px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '200px'],
            ["style", "right", 'auto'],
            ["style", "left", '70%'],
            ["style", "width", '22.24%']
         ],
         "${_TextCopy2}": [
            ["style", "top", '19px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '11px'],
            ["style", "font-size", '20px']
         ],
         "${_buttonArticle02}": [
            ["color", "background-color", 'rgba(40,125,125,1.00)'],
            ["style", "top", '180px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "right", 'auto'],
            ["style", "left", '69.99%'],
            ["style", "width", '22.23%']
         ],
         "${_title}": [
            ["color", "color", 'rgba(40,125,125,1.00)'],
            ["style", "top", '48px'],
            ["style", "font-size", '42px']
         ],
         "${_Text1}": [
            ["style", "top", '19px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '11px'],
            ["style", "font-size", '20px']
         ],
         "${_buttonArticle01}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "top", '120px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "right", 'auto'],
            ["style", "left", '69.99%'],
            ["style", "width", '22.23%']
         ],
         "${_content}": [
            ["style", "top", '120px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(43,50,60,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '66.67%']
         ],
         "${_divider1}": [
            ["style", "top", '358px'],
            ["style", "height", '2px'],
            ["color", "background-color", 'rgba(145,196,108,1.00)'],
            ["style", "left", '70.11%'],
            ["style", "width", '22.23%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(234,230,221,1.00)'],
            ["style", "min-width", '660px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '600px'],
            ["style", "max-width", '1200px'],
            ["style", "width", '100%']
         ],
         "${_Text}": [
            ["style", "top", '19px'],
            ["style", "font-family", 'source-sans-pro, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '11px'],
            ["style", "font-size", '20px']
         ],
         "${_placeholderImage2}": [
            ["style", "top", '370px'],
            ["style", "left", '70%'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '22.24%']
         ],
         "${_article01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_divider2}": [
            ["style", "top", '106px'],
            ["style", "height", '2px'],
            ["gradient", "background-image", [0,[['rgba(40,125,125,1.00)',0],['rgba(198,224,112,1.00)',13],['rgba(198,224,112,1.00)',19],['rgba(145,196,108,1.00)',31],['rgba(145,196,108,1.00)',55],['rgba(198,224,112,1.00)',69],['rgba(40,125,125,1.00)',100]]]],
            ["style", "left", '20px'],
            ["style", "width", '90%']
         ],
         "${_buttonArticle04}": [
            ["color", "background-color", 'rgba(198,224,112,1.00)'],
            ["style", "top", '300px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '50px'],
            ["style", "right", 'auto'],
            ["style", "left", '70%'],
            ["style", "width", '22.23%']
         ],
         "${_title2}": [
            ["style", "top", '575px'],
            ["color", "color", 'rgba(40,125,125,1.00)'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"article01": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','450px','auto','auto'],
      id: 'base',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(43,50,60,1.00)']
   },
   {
      rect: ['auto','150px','194px','300px','-50px','auto'],
      id: 'Ani_300x300',
      transform: [[],['-40']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      id: 'title_1',
      text: 'Title #1',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      id: 'body_1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['auto','450px','85px','131px','67px','auto'],
      transform: [],
      id: 'Ani_300x300Copy',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      align: 'left',
      id: 'title_2',
      text: 'Title #2',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      align: 'left',
      id: 'body_2',
      text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['auto','82px','85px','131px','52px','auto'],
      transform: [[],['180']],
      type: 'image',
      id: 'Ani_300x300Copy2',
      display: 'none',
      clip: ['rect(0px 85pxpx 131pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      align: 'left',
      id: 'title_3',
      text: 'Title #3',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      align: 'left',
      id: 'body_3',
      text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-10px','340px','50px','50px','auto','auto'],
      type: 'rect',
      id: 'btnLeft',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      display: 'none',
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         rect: ['0px','0px','50px','50px','auto','auto'],
         id: 'arrow',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      rect: ['auto','340px','50px','50px','-10px','auto'],
      id: 'btnRight',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         rect: ['0px','0px','50px','50px','auto','auto'],
         transform: [[],['180']],
         id: 'arrow2',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      rect: ['0px','80px','100%','2px','auto','auto'],
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_body_2}": [
            ["style", "top", '117px'],
            ["style", "width", '50%'],
            ["style", "height", '263px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "font-size", '16px']
         ],
         "${_arrow}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ani_300x300Copy}": [
            ["style", "top", '450px'],
            ["style", "height", '131px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'none'],
            ["style", "right", '67px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_line}": [
            ["style", "top", '80px'],
            ["style", "left", '0px'],
            ["style", "height", '2px']
         ],
         "${_btnLeft}": [
            ["color", "background-color", 'rgba(40,125,125,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'none'],
            ["style", "border-width", '10px']
         ],
         "${_body_3}": [
            ["style", "top", '117px'],
            ["style", "font-size", '16px'],
            ["style", "height", '263px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%']
         ],
         "${_base}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(43,50,60,1)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_Ani_300x300Copy2}": [
            ["style", "top", '82px'],
            ["style", "height", '131px'],
            ["style", "left", 'auto'],
            ["transform", "rotateZ", '180deg'],
            ["style", "display", 'none'],
            ["style", "right", '52px'],
            ["style", "clip", [131,85,131,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '85px']
         ],
         "${_Ani_300x300}": [
            ["style", "top", '150px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "display", 'block'],
            ["style", "right", '-268px'],
            ["style", "left", 'auto']
         ],
         "${_title_1}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_body_1}": [
            ["style", "top", '117px'],
            ["style", "font-size", '16px'],
            ["style", "height", '263px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%']
         ],
         "${_title_3}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_title_2}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '100%']
         ],
         "${_arrow2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_btnRight}": [
            ["color", "background-color", 'rgba(40,125,125,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "right", '-10px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_body_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid45", tween: [ "style", "${_body_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid35", tween: [ "style", "${_Ani_300x300Copy}", "top", '319px', { fromValue: '450px'}], position: 750, duration: 250 },
            { id: "eid36", tween: [ "style", "${_Ani_300x300Copy}", "top", '450px', { fromValue: '319px'}], position: 1000, duration: 250 },
            { id: "eid56", tween: [ "style", "${_Ani_300x300Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Ani_300x300Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid54", tween: [ "style", "${_body_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_body_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_body_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid37", tween: [ "style", "${_body_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid42", tween: [ "style", "${_title_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid46", tween: [ "style", "${_title_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid48", tween: [ "style", "${_title_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid38", tween: [ "style", "${_title_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid44", tween: [ "style", "${_title_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid50", tween: [ "style", "${_title_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid29", tween: [ "style", "${_Ani_300x300}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid55", tween: [ "style", "${_title_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid57", tween: [ "style", "${_title_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [0,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [131,85,131,0]}], position: 1250, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [131,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,131,0]}], position: 1500, duration: 250 },
            { id: "eid52", tween: [ "style", "${_body_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_btnLeft}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid13", tween: [ "style", "${_btnRight}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_title_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid43", tween: [ "style", "${_body_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid49", tween: [ "style", "${_body_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid67", tween: [ "style", "${_title_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid70", tween: [ "style", "${_title_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_body_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_body_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Ani_300x300}", "right", '-50px', { fromValue: '-268px'}], position: 250, duration: 250 },
            { id: "eid31", tween: [ "style", "${_Ani_300x300}", "right", '-268px', { fromValue: '-50px'}], position: 500, duration: 250 }         ]
      }
   }
},
"article02": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'base',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','100%','450px','auto','auto'],
      fill: ['rgba(40,125,125,1.00)']
   },
   {
      transform: [[0,0],['-40']],
      id: 'Ani_300x300',
      type: 'image',
      rect: ['auto','150px','194px','300px','-50px','auto'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      id: 'title_1',
      text: 'Title #1',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      type: 'text',
      id: 'body_1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      transform: [],
      type: 'image',
      id: 'Ani_300x300Copy',
      display: 'none',
      rect: ['auto','450px','85px','131px','67px','auto'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'title_2',
      text: 'Title #2',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'body_2',
      text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      transform: [[0,0],['180']],
      type: 'image',
      rect: ['auto','82px','85px','131px','52px','auto'],
      id: 'Ani_300x300Copy2',
      display: 'none',
      clip: ['rect(0px 85pxpx 131pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'title_3',
      text: 'Title #3',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'body_3',
      text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['-10px','340px','50px','50px','auto','auto'],
      id: 'btnLeft',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      display: 'none',
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         type: 'image',
         id: 'arrow',
         rect: ['0px','0px','50px','50px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'btnRight',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      rect: ['auto','340px','50px','50px','-10px','auto'],
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         transform: [[0,0],['180']],
         type: 'image',
         id: 'arrow2',
         rect: ['0px','0px','50px','50px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','80px','100%','2px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ani_300x300Copy2}": [
            ["style", "top", '82px'],
            ["style", "display", 'none'],
            ["style", "clip", [131,85,131,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '131px'],
            ["style", "right", '52px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_title_2}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_arrow2}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_title_1}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${_arrow}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_body_2}": [
            ["style", "top", '117px'],
            ["style", "font-size", '16px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%']
         ],
         "${_title_3}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["color", "color", 'rgba(145,196,108,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${_Ani_300x300}": [
            ["style", "top", '150px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "display", 'block'],
            ["style", "right", '-268px'],
            ["style", "left", 'auto']
         ],
         "${_body_1}": [
            ["style", "top", '117px'],
            ["style", "width", '50%'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "font-size", '16px']
         ],
         "${_Ani_300x300Copy}": [
            ["style", "top", '450px'],
            ["style", "height", '131px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'none'],
            ["style", "right", '67px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_line}": [
            ["style", "top", '80px'],
            ["style", "left", '0px'],
            ["style", "height", '2px']
         ],
         "${_btnLeft}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
         ],
         "${_body_3}": [
            ["style", "top", '117px'],
            ["style", "width", '50%'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "font-size", '16px']
         ],
         "${_base}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(40,125,125,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_btnRight}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "left", 'auto'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'block'],
            ["style", "right", '-10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_body_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid45", tween: [ "style", "${_body_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid35", tween: [ "style", "${_Ani_300x300Copy}", "top", '319px', { fromValue: '450px'}], position: 750, duration: 250 },
            { id: "eid36", tween: [ "style", "${_Ani_300x300Copy}", "top", '450px', { fromValue: '319px'}], position: 1000, duration: 250 },
            { id: "eid56", tween: [ "style", "${_Ani_300x300Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Ani_300x300Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid54", tween: [ "style", "${_body_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_body_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_title_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid50", tween: [ "style", "${_title_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid42", tween: [ "style", "${_title_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid46", tween: [ "style", "${_title_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid47", tween: [ "style", "${_body_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid37", tween: [ "style", "${_body_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid29", tween: [ "style", "${_Ani_300x300}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid48", tween: [ "style", "${_title_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid38", tween: [ "style", "${_title_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid67", tween: [ "style", "${_title_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid70", tween: [ "style", "${_title_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid43", tween: [ "style", "${_body_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid49", tween: [ "style", "${_body_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid52", tween: [ "style", "${_body_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [0,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [131,85,131,0]}], position: 1250, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [131,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,131,0]}], position: 1500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_title_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_btnLeft}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid13", tween: [ "style", "${_btnRight}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_title_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid57", tween: [ "style", "${_title_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid71", tween: [ "color", "${_btnRight}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid72", tween: [ "color", "${_btnLeft}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_body_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_body_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Ani_300x300}", "right", '-50px', { fromValue: '-268px'}], position: 250, duration: 250 },
            { id: "eid31", tween: [ "style", "${_Ani_300x300}", "right", '-268px', { fromValue: '-50px'}], position: 500, duration: 250 }         ]
      }
   }
},
"article03": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'base',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','100%','450px','auto','auto'],
      fill: ['rgba(145,196,108,1.00)']
   },
   {
      rect: ['auto','150px','194px','300px','-50px','auto'],
      id: 'Ani_300x300',
      transform: [[0,0],['-40']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      id: 'title_1',
      text: 'Title #1',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      id: 'body_1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      align: 'left',
      type: 'text'
   },
   {
      transform: [],
      rect: ['auto','450px','85px','131px','67px','auto'],
      display: 'none',
      id: 'Ani_300x300Copy',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      display: 'none',
      id: 'title_2',
      text: 'Title #2',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      display: 'none',
      id: 'body_2',
      text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['auto','82px','85px','131px','52px','auto'],
      transform: [[0,0],['180']],
      type: 'image',
      id: 'Ani_300x300Copy2',
      display: 'none',
      clip: ['rect(0px 85pxpx 131pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      rect: ['60px','40px','57.7%','auto','auto','auto'],
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      display: 'none',
      id: 'title_3',
      text: 'Title #3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['62px','117px','50%','263px','auto','auto'],
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','300','none','normal'],
      display: 'none',
      id: 'body_3',
      text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      align: 'left',
      type: 'text'
   },
   {
      type: 'rect',
      rect: ['-10px','340px','50px','50px','auto','auto'],
      id: 'btnLeft',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      display: 'none',
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         type: 'image',
         id: 'arrow',
         rect: ['0px','0px','50px','50px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'btnRight',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      rect: ['auto','340px','50px','50px','-10px','auto'],
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         rect: ['0px','0px','50px','50px','auto','auto'],
         transform: [[0,0],['180']],
         id: 'arrow2',
         type: 'image',
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','80px','100%','2px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_title_1}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_body_2}": [
            ["style", "top", '117px'],
            ["style", "width", '50%'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "font-size", '16px']
         ],
         "${_title_3}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_Ani_300x300Copy2}": [
            ["style", "top", '82px'],
            ["style", "height", '131px'],
            ["style", "left", 'auto'],
            ["transform", "rotateZ", '180deg'],
            ["style", "display", 'none'],
            ["style", "right", '52px'],
            ["style", "clip", [131,85,131,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '85px']
         ],
         "${_arrow}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_title_2}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '100%']
         ],
         "${_Ani_300x300}": [
            ["style", "top", '150px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "display", 'block'],
            ["style", "right", '-268px'],
            ["style", "left", 'auto']
         ],
         "${_body_1}": [
            ["style", "top", '117px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%']
         ],
         "${_Ani_300x300Copy}": [
            ["style", "top", '450px'],
            ["style", "height", '131px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'none'],
            ["style", "right", '67px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_line}": [
            ["style", "top", '80px'],
            ["style", "left", '0px'],
            ["style", "height", '2px']
         ],
         "${_btnLeft}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'none'],
            ["style", "border-width", '10px']
         ],
         "${_body_3}": [
            ["style", "top", '117px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '263px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%']
         ],
         "${_base}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(145,196,108,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${_arrow2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_btnRight}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "right", '-10px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'block'],
            ["style", "left", 'auto']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_body_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid45", tween: [ "style", "${_body_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid35", tween: [ "style", "${_Ani_300x300Copy}", "top", '319px', { fromValue: '450px'}], position: 750, duration: 250 },
            { id: "eid36", tween: [ "style", "${_Ani_300x300Copy}", "top", '450px', { fromValue: '319px'}], position: 1000, duration: 250 },
            { id: "eid56", tween: [ "style", "${_Ani_300x300Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Ani_300x300Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid54", tween: [ "style", "${_body_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_body_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_title_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid50", tween: [ "style", "${_title_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid42", tween: [ "style", "${_title_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid46", tween: [ "style", "${_title_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid47", tween: [ "style", "${_body_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid37", tween: [ "style", "${_body_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid66", tween: [ "style", "${_body_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_body_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid48", tween: [ "style", "${_title_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid38", tween: [ "style", "${_title_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid72", tween: [ "color", "${_btnLeft}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid71", tween: [ "color", "${_btnRight}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_title_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid57", tween: [ "style", "${_title_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Ani_300x300}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid52", tween: [ "style", "${_body_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_btnLeft}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid13", tween: [ "style", "${_btnRight}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_title_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid43", tween: [ "style", "${_body_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid49", tween: [ "style", "${_body_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid67", tween: [ "style", "${_title_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid70", tween: [ "style", "${_title_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [0,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [131,85,131,0]}], position: 1250, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [131,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,131,0]}], position: 1500, duration: 250 },
            { id: "eid27", tween: [ "style", "${_Ani_300x300}", "right", '-50px', { fromValue: '-268px'}], position: 250, duration: 250 },
            { id: "eid31", tween: [ "style", "${_Ani_300x300}", "right", '-268px', { fromValue: '-50px'}], position: 500, duration: 250 }         ]
      }
   }
},
"article04": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'base',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','100%','450px','auto','auto'],
      fill: ['rgba(198,224,112,1.00)']
   },
   {
      transform: [[0,0],['-40']],
      id: 'Ani_300x300',
      type: 'image',
      rect: ['auto','150px','194px','300px','-50px','auto'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      id: 'title_1',
      text: 'Title #1',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      id: 'body_1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      transform: [],
      type: 'image',
      id: 'Ani_300x300Copy',
      display: 'none',
      rect: ['auto','450px','85px','131px','67px','auto'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'title_2',
      text: 'Title #2',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'body_2',
      text: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      transform: [[0,0],['180']],
      type: 'image',
      rect: ['auto','82px','85px','131px','52px','auto'],
      id: 'Ani_300x300Copy2',
      display: 'none',
      clip: ['rect(0px 85pxpx 131pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/Ani_300x300.png','0px','0px']
   },
   {
      font: ['source-sans-pro, sans-serif',30,'rgba(145,196,108,1.00)','300','none','normal'],
      type: 'text',
      display: 'none',
      id: 'title_3',
      text: 'Title #3',
      align: 'left',
      rect: ['60px','40px','57.7%','auto','auto','auto']
   },
   {
      font: ['source-sans-pro, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      display: 'none',
      id: 'body_3',
      text: 'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
      align: 'left',
      rect: ['62px','117px','50%','263px','auto','auto']
   },
   {
      type: 'rect',
      rect: ['-10px','340px','50px','50px','auto','auto'],
      id: 'btnLeft',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      display: 'none',
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         type: 'image',
         id: 'arrow',
         rect: ['0px','0px','50px','50px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'btnRight',
      stroke: [10,'rgba(234,230,221,1.00)','solid'],
      rect: ['auto','340px','50px','50px','-10px','auto'],
      fill: ['rgba(40,125,125,1.00)'],
      c: [
      {
         transform: [[0,0],['180']],
         type: 'image',
         id: 'arrow2',
         rect: ['0px','0px','50px','50px','auto','auto'],
         cursor: ['pointer'],
         fill: ['rgba(0,0,0,0)','images/arrow.png','0px','0px']
      }]
   },
   {
      type: 'rect',
      id: 'line',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','80px','100%','2px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ani_300x300Copy2}": [
            ["style", "top", '82px'],
            ["style", "display", 'none'],
            ["style", "clip", [131,85,131,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '131px'],
            ["style", "right", '52px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_title_2}": [
            ["style", "top", '40px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '57.66%']
         ],
         "${_arrow2}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_title_1}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${_arrow}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_body_2}": [
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "font-size", '16px'],
            ["style", "top", '117px'],
            ["style", "display", 'none'],
            ["style", "height", '263px'],
            ["style", "width", '50%'],
            ["style", "font-weight", '400']
         ],
         "${_title_3}": [
            ["style", "top", '40px'],
            ["style", "width", '57.66%'],
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "font-size", '30px']
         ],
         "${_Ani_300x300}": [
            ["style", "top", '150px'],
            ["transform", "rotateZ", '-40deg'],
            ["style", "display", 'block'],
            ["style", "right", '-268px'],
            ["style", "left", 'auto']
         ],
         "${_body_1}": [
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%'],
            ["style", "top", '117px'],
            ["style", "display", 'block'],
            ["style", "height", '263px'],
            ["style", "font-size", '16px'],
            ["style", "font-weight", '400']
         ],
         "${_Ani_300x300Copy}": [
            ["style", "top", '450px'],
            ["style", "height", '131px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "display", 'none'],
            ["style", "right", '67px'],
            ["style", "left", 'auto'],
            ["style", "width", '85px']
         ],
         "${_line}": [
            ["style", "top", '80px'],
            ["style", "left", '0px'],
            ["style", "height", '2px']
         ],
         "${_btnLeft}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '-10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "border-width", '10px'],
            ["style", "display", 'none']
         ],
         "${_body_3}": [
            ["color", "color", 'rgba(28,52,77,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '62px'],
            ["style", "width", '50%'],
            ["style", "top", '117px'],
            ["style", "display", 'none'],
            ["style", "height", '263px'],
            ["style", "font-size", '16px'],
            ["style", "font-weight", '400']
         ],
         "${_base}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["color", "background-color", 'rgba(198,224,112,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_btnRight}": [
            ["color", "background-color", 'rgba(28,52,77,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["style", "width", '50px'],
            ["style", "top", '390px'],
            ["style", "left", 'auto'],
            ["style", "height", '50px'],
            ["color", "border-color", 'rgba(234,230,221,1.00)'],
            ["style", "display", 'block'],
            ["style", "right", '-10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_body_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid45", tween: [ "style", "${_body_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid13", tween: [ "style", "${_btnRight}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid56", tween: [ "style", "${_Ani_300x300Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Ani_300x300Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid54", tween: [ "style", "${_body_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_body_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Ani_300x300Copy2}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_title_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid50", tween: [ "style", "${_title_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid78", tween: [ "color", "${_body_3}", "color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_title_2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 250 },
            { id: "eid46", tween: [ "style", "${_title_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid77", tween: [ "color", "${_body_2}", "color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid35", tween: [ "style", "${_Ani_300x300Copy}", "top", '319px', { fromValue: '450px'}], position: 750, duration: 250 },
            { id: "eid36", tween: [ "style", "${_Ani_300x300Copy}", "top", '450px', { fromValue: '319px'}], position: 1000, duration: 250 },
            { id: "eid67", tween: [ "style", "${_title_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid70", tween: [ "style", "${_title_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid43", tween: [ "style", "${_body_3}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid49", tween: [ "style", "${_body_3}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 250 },
            { id: "eid48", tween: [ "style", "${_title_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid38", tween: [ "style", "${_title_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid63", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [0,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [131,85,131,0]}], position: 1250, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Ani_300x300Copy2}", "clip", [131,85,131,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,85,131,0]}], position: 1500, duration: 250 },
            { id: "eid51", tween: [ "style", "${_title_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid55", tween: [ "style", "${_title_2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid57", tween: [ "style", "${_title_2}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid66", tween: [ "style", "${_body_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid69", tween: [ "style", "${_body_3}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid52", tween: [ "style", "${_body_1}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_btnLeft}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Ani_300x300}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid72", tween: [ "color", "${_btnLeft}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid71", tween: [ "color", "${_btnRight}", "background-color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 1000, duration: 0 },
            { id: "eid76", tween: [ "color", "${_body_1}", "color", 'rgba(28,52,77,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(28,52,77,1.00)'}], position: 500, duration: 0 },
            { id: "eid47", tween: [ "style", "${_body_1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid37", tween: [ "style", "${_body_1}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 250 },
            { id: "eid27", tween: [ "style", "${_Ani_300x300}", "right", '-50px', { fromValue: '-268px'}], position: 250, duration: 250 },
            { id: "eid31", tween: [ "style", "${_Ani_300x300}", "right", '-268px', { fromValue: '-50px'}], position: 500, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-79003129");
