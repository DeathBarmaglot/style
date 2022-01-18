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
                id: 'e',
                type: 'image',
                rect: ['16px', '-4px','155px','129px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"e.jpg",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'a2',
                type: 'image',
                rect: ['-4px', '-19px','211px','189px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.jpg",'0px','0px'],
                transform: [[],[],[],['0.77','0.77']]
            },
            {
                id: 'z',
                type: 'image',
                rect: ['19px', '21px','150px','86px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"z.jpg",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
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
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'vv',
                type: 'image',
                rect: ['-6px', '-2px','229px','123px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"vv.jpg",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
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
                id: 'Group',
                type: 'group',
                rect: ['17px', '16','188','87','auto', 'auto'],
                c: [
                {
                    id: 'l1',
                    type: 'image',
                    rect: ['0px', '0px','75px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"l1.png",'0px','0px']
                },
                {
                    id: 'l2',
                    type: 'image',
                    rect: ['38px', '9px','150px','72px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px']
                }]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '-19px'],
                ["transform", "scaleY", '0.77'],
                ["transform", "scaleX", '0.77'],
                ["style", "opacity", '0'],
                ["style", "left", '-4px']
            ],
            "${_l1}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '87px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '75px']
            ],
            "${_vv}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
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
            "${_e}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '16px']
            ],
            "${__2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '220px'],
                ["style", "background-position", [-33,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${__4-XStayle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '220px']
            ],
            "${_Group}": [
                ["style", "left", '17px'],
                ["style", "opacity", '0']
            ],
            "${_v}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${__1-40}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '160px'],
                ["style", "clip", [0,260,150,45], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__1Premium}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '221px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_z}": [
                ["style", "top", '21px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
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
            "${_l2}": [
                ["style", "left", '38px'],
                ["style", "top", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "transform", "${_l1}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 0, duration: 483, easing: "easeInOutCubic" },
                { id: "eid31", tween: [ "style", "${__1-40}", "opacity", '1', { fromValue: '0'}], position: 12735, duration: 241, easing: "easeInOutCubic" },
                { id: "eid32", tween: [ "style", "${__1-40}", "opacity", '0', { fromValue: '1'}], position: 17091, duration: 241, easing: "easeInOutCubic" },
                { id: "eid36", tween: [ "style", "${_a2}", "opacity", '1', { fromValue: '0'}], position: 12735, duration: 241, easing: "easeInOutCubic" },
                { id: "eid37", tween: [ "style", "${_a2}", "opacity", '0', { fromValue: '1'}], position: 14786, duration: 241, easing: "easeInOutCubic" },
                { id: "eid40", tween: [ "style", "${__4-XStayle}", "opacity", '1', { fromValue: '0'}], position: 17319, duration: 241, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${__4-XStayle}", "opacity", '0', { fromValue: '1'}], position: 19370, duration: 241, easing: "easeInOutCubic" },
                { id: "eid12", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 241, easing: "easeInOutCubic" },
                { id: "eid35", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 12493, duration: 241, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 17319, duration: 241, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 19611, duration: 241, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 7942, duration: 241, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 12493, duration: 241, easing: "easeInOutCubic" },
                { id: "eid13", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 241, easing: "easeInOutCubic" },
                { id: "eid10", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '1'}], position: 2138, duration: 543, easing: "easeInOutCubic" },
                { id: "eid42", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0'}], position: 17319, duration: 241, easing: "easeInOutCubic" },
                { id: "eid43", tween: [ "style", "${_Group}", "opacity", '0', { fromValue: '1'}], position: 19457, duration: 543, easing: "easeInOutCubic" },
                { id: "eid4", tween: [ "style", "${_l1}", "opacity", '1', { fromValue: '0'}], position: 241, duration: 543, easing: "easeInOutCubic" },
                { id: "eid44", tween: [ "style", "${_l1}", "opacity", '1', { fromValue: '0'}], position: 17319, duration: 543, easing: "easeInOutCubic" },
                { id: "eid25", tween: [ "style", "${_e}", "opacity", '1', { fromValue: '0'}], position: 7942, duration: 241, easing: "easeInOutCubic" },
                { id: "eid26", tween: [ "style", "${_e}", "opacity", '0', { fromValue: '1'}], position: 9993, duration: 241, easing: "easeInOutCubic" },
                { id: "eid14", tween: [ "style", "${_vv}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 241, easing: "easeInOutCubic" },
                { id: "eid16", tween: [ "style", "${_vv}", "opacity", '0', { fromValue: '1'}], position: 5051, duration: 241, easing: "easeInOutCubic" },
                { id: "eid29", tween: [ "style", "${_z}", "opacity", '1', { fromValue: '0'}], position: 10235, duration: 241, easing: "easeInOutCubic" },
                { id: "eid30", tween: [ "style", "${_z}", "opacity", '0', { fromValue: '1'}], position: 12286, duration: 241, easing: "easeInOutCubic" },
                { id: "eid17", tween: [ "style", "${_v}", "opacity", '1', { fromValue: '0'}], position: 5292, duration: 241, easing: "easeInOutCubic" },
                { id: "eid18", tween: [ "style", "${_v}", "opacity", '0', { fromValue: '1'}], position: 7343, duration: 241, easing: "easeInOutCubic" },
                { id: "eid11", tween: [ "style", "${__1Premium}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 241, easing: "easeInOutCubic" },
                { id: "eid20", tween: [ "style", "${__1Premium}", "opacity", '0', { fromValue: '1'}], position: 7701, duration: 241, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 15027, duration: 241, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 17078, duration: 241, easing: "easeInOutCubic" }            ]
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
