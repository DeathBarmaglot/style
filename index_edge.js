/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'back',
                type: 'image',
                rect: ['-3px', '-13','431px','191px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"back.jpg",'0px','0px']
            },
            {
                id: 'e',
                type: 'image',
                rect: ['16px', '-4px','155px','129px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"e.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.8']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-4px', '-19px','211px','189px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.77']]
            },
            {
                id: 'z',
                type: 'image',
                rect: ['19px', '21px','150px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"z.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.8']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['0px', '119px','222px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.jpg",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'i',
                type: 'image',
                rect: ['-26px', '-21px','259px','191px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"i.jpg",'0px','0px'],
                transform: [[],[],[],['0.77','0.77']]
            },
            {
                id: 'v',
                type: 'image',
                rect: ['0px', '-3px','212px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"v.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.8']]
            },
            {
                id: 'vv',
                type: 'image',
                rect: ['-6px', '-2px','229px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vv.jpg",'0px','0px'],
                transform: [[],[],[],['0.85','0.8']]
            },
            {
                id: '_4-XStayle',
                type: 'image',
                rect: ['220px', '0px','200px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4%D1%80%D0%B0%D0%BD%D1%87%D0%BE-XStayle.jpg",'0px','0px']
            },
            {
                id: '_2',
                type: 'image',
                rect: ['220px', '0px','267px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2%D1%80%D0%BE%D0%BC%D0%B1%D0%BE.jpg",'-33px','0px']
            },
            {
                id: '_1-40',
                type: 'image',
                rect: ['160px', '0px','260px','150px','auto', 'auto'],
                clip: ['rect(0px 260px 150px 45px)'],
                fill: ["rgba(0,0,0,0)",im+"1%D0%BB%D0%B0%D0%BC%D0%B5%D0%BB%D1%8C-40.jpg",'0px','0px']
            },
            {
                id: '_1Premium',
                type: 'image',
                rect: ['221px', '0px','200px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1Premium.jpg",'0px','0px']
            },
            {
                id: 'il',
                type: 'image',
                rect: ['30px', '26px','164px','77px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"il.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_e}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '16px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '220px'],
                ["style", "background-position", [-33,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_v}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_a2}": [
                ["style", "top", '-19px'],
                ["transform", "scaleY", '0.77'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px']
            ],
            "${__4-XStayle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '220px']
            ],
            "${_vv}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.85'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px']
            ],
            "${_i}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.77'],
                ["transform", "scaleX", '0.77'],
                ["style", "opacity", '0'],
                ["style", "left", '-26px']
            ],
            "${__1-40}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '160px'],
                ["style", "clip", [0,260,150,45], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_back}": [
                ["style", "left", '-3px']
            ],
            "${__1Premium}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '221px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ],
            "${_z}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '19px']
            ],
            "${_t2}": [
                ["style", "top", '119px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${_il}": [
                ["style", "top", '26px'],
                ["style", "height", '77px'],
                ["style", "opacity", '0'],
                ["style", "left", '30px'],
                ["style", "width", '164px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: true,
            timeline: [
                { id: "eid31", tween: [ "style", "${__1-40}", "opacity", '1', { fromValue: '0'}], position: 19103, duration: 362, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${__1-40}", "opacity", '0', { fromValue: '1'}], position: 25637, duration: 361, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "style", "${_il}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 219, easing: "easeInOutCubic" },
                { id: "eid51", tween: [ "style", "${_il}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 219, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "style", "${_il}", "opacity", '1', { fromValue: '0'}], position: 25979, duration: 219, easing: "easeInOutCubic" },
                { id: "eid53", tween: [ "style", "${_il}", "opacity", '0', { fromValue: '1'}], position: 29778, duration: 219, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 19103, duration: 362, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 22389, duration: 362, easing: "easeInOutCubic" },
                { id: "eid40", tween: [ "style", "${__4-XStayle}", "opacity", '1', { fromValue: '0'}], position: 25979, duration: 361, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${__4-XStayle}", "opacity", '0', { fromValue: '1'}], position: 29055, duration: 362, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 361, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 18811, duration: 362, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 25979, duration: 361, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 29417, duration: 361, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 11612, duration: 362, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 18740, duration: 362, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 22541, duration: 362, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 25617, duration: 361, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_e}", "opacity", '1', { fromValue: '0'}], position: 11913, duration: 362, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_e}", "opacity", '0', { fromValue: '1'}], position: 15138, duration: 362, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_vv}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 362, easing: "easeInOutCubic" },
                { id: "eid16", tween: [ "style", "${_vv}", "opacity", '0', { fromValue: '1'}], position: 7577, duration: 361, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${__1Premium}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 361, easing: "easeInOutCubic" },
                { id: "eid20", tween: [ "style", "${__1Premium}", "opacity", '0', { fromValue: '1'}], position: 11552, duration: 361, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_v}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 362, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_v}", "opacity", '0', { fromValue: '1'}], position: 11250, duration: 362, easing: "easeInOutCubic" },
                { id: "eid29", tween: [ "style", "${_z}", "opacity", '1', { fromValue: '0'}], position: 15353, duration: 362, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_z}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 361, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-17067421");
