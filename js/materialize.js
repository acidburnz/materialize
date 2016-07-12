require(['global', 'animation', 'buttons', 'cards', 'character_counter',
        'collapsible', 'dropdown', 'forms', 'hammerjs', 'jquery.easing',
        'jquery.hammer', 'jquery.timeago', 'leanModal', 'materialbox',
        'parallax', 'picker', 'picker.date', 'picker.time', 'pushpin', 
        'scrollFire', 'scrollspy', 'sideNav', 'slider', 'tabs', 'toasts', 
        'tooltip', 'transitions', 'velocity', 'waves'],
    function (Materialize, Waves) {
	Materialize.Waves = require('waves');
	Materialize.Waves.init();
        return Materialize;
    }
);
