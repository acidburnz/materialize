({
    baseUrl: "js",
    name: "materialize",
    out: "bin/materialize.amd.js",
    paths: {
        'jquery': "../extras/jquery/jquery.min",
        'animation': 'animation',
        'buttons': 'buttons',
        'cards': 'cards',
        'character_counter': 'character_counter',
        'collapsible': 'collapsible',
        'picker': 'date_picker/picker',
        'picker.date': 'date_picker/picker.date',
        'picker.time': 'date_picker/picker.time',
        'dropdown': 'dropdown',
        'forms': 'forms',
        'global': 'global',
        'hammerjs': 'hammer.min',
        'jquery.easing': 'jquery.easing.1.3',
        'jquery.hammer': 'jquery.hammer',
        'jquery.timeago': 'jquery.timeago.min',
        'leanModal': 'leanModal',
        'materialbox': 'materialbox',
        'parallax': 'parallax',
        'pushpin': 'pushpin',
        'scrollFire': 'scrollFire',
        'scrollspy': 'scrollspy',
        'sideNav': 'sideNav',
        'slider': 'slider',
        'tabs': 'tabs',
        'toasts': 'toasts',
        'tooltip': 'tooltip',
        'transitions': 'transitions',
        'velocity': 'velocity.min',
        'waves': 'waves'
    },
    shim: {
        'jquery': { exports: "$" },
        'jquery.hammer': ['jquery', 'hammerjs', 'waves'],
        'animation': ['jquery'],
        'buttons': ['jquery'],
        'cards': ['jquery'],
        'character_counter': ['jquery'],
        'collapsible': ['jquery'],
        'dropdown': ['jquery'],
        'forms': ['jquery', 'global'],
        'global': { deps: ['jquery'], exports: "Materialize" },
        'jquery.easing': ['jquery'],
        'jquery.timeago': ['jquery'],
        'picker.date': ['jquery', 'picker'],
        'picker.time': ['jquery', 'picker'],
        'leanModal': ['jquery'],
        'materialbox': ['jquery'],
        'parallax': ['jquery'],
        'pushpin': ['jquery'],
        'scrollFire': ['jquery', 'global'],
        'scrollspy': ['jquery'],
        'sideNav': { deps: ['jquery', 'velocity', 'hammerjs', 'jquery.hammer'] },
        'slider': ['jquery'],
        'tabs': ['jquery'],
        'toasts': {
            deps: ['global', 'hammerjs', 'velocity'], init: function(Materialize, Hammer, Vel) {
                window.Hammer = Hammer;
                window.Vel = Vel;
		    }
	    },
        'tooltip': ['jquery'],
        'transitions': ['jquery','scrollFire'],
        'waves': { exports: 'Waves' }
    },
    optimize: "none",
    exclude: ["jquery"],
    include: ['global', 'animation', 'buttons', 'cards', 'character_counter',
        'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
        'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
        'parallax', 'picker', 'picker.date', 'picker.time', 'pushpin', 
        'scrollFire', 'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 
        'tooltip', 'transitions', 'velocity', 'waves']
})
