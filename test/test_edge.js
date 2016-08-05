/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://code.jquery.com/jquery-3.1.0.js",
            js+"jquery-ui.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'base',
                            symbolName: 'base',
                            type: 'rect',
                            rect: ['167px', '71px', '450', '116', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.57514','1.63281']]
                        },
                        {
                            id: 'simbolo1',
                            symbolName: 'uno',
                            type: 'rect',
                            rect: ['auto', '8.5%', '209', '165', '54.2%', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.76659','0.76659']]
                        },
                        {
                            id: 'texto',
                            symbolName: 'bien',
                            type: 'rect',
                            rect: ['380px', '244px', '126', '37', 'auto', 'auto'],
                            transform: [[],[],[],['1.62162','1.62162']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${base}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            0,
                            "linear",
                            "${texto}",
                            '380px',
                            '380px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "linear",
                            "${simbolo1}",
                            '8.51%',
                            '8.51%'
                        ],
                        [
                            "eid50",
                            "top",
                            0,
                            0,
                            "linear",
                            "${texto}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${texto}",
                            '1.62162',
                            '1.62162'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${simbolo1}",
                            '0.76659',
                            '0.76659'
                        ],
                        [
                            "eid43",
                            "right",
                            0,
                            0,
                            "linear",
                            "${simbolo1}",
                            '54.23%',
                            '54.23%'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${base}",
                            '0.57514',
                            '0.57514'
                        ],
                        [
                            "eid46",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${base}",
                            '1.63281',
                            '1.63281'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${texto}",
                            '1.62162',
                            '1.62162'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "linear",
                            "${base}",
                            '167px',
                            '167px'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${simbolo1}",
                            '0.76659',
                            '0.76659'
                        ]
                    ]
                }
            },
            "uno": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '209px', '165px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(217,217,217,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '209px', '165px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "base": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '450px', '116px', 'auto', 'auto'],
                            fill: ['rgba(59,59,59,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '450px', '116px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bien": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '63px', '37px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Bien!</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '126px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("test_edgeActions.js");
})("EDGE-1364330764");
