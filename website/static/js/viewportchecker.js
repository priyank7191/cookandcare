var flag =1;var myVar ;var myVarTwo;var myVarThree;var myVarFour;var myVarFive;var yes = "y";(function($){$.fn.viewportChecker = function(useroptions){var options = {classToAdd: 'visible',offset:100,callbackFunction: function(elem){}};$.extend(options, useroptions);var $elem = this,windowHeight = $(window).height();this.checkElements = function(){var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),viewportTop = $(scrollElem).scrollTop(),viewportBottom = (viewportTop + windowHeight);$elem.each(function(){var $obj = $(this);if ($obj.hasClass(options.classToAdd)){return;}var elemTop = Math.round( $obj.offset().top ) + options.offset,elemBottom = elemTop + ($obj.height());if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){$obj.addClass(options.classToAdd);if($('.cryogenic-left').hasClass('active')){if(flag == 1){flag = 2; clearTimeout(myVar);clearTimeout(myVarTwo);clearTimeout(myVarThree);clearTimeout(myVarFour);clearTimeout(myVarFive);yes = "y";rotation()}} options.callbackFunction($obj)}else{$('.common').removeClass('active');					$('.powder').removeClass('powderRotateOut');$('.powder').removeClass('powderrotate');$('.masala').removeClass('masalaOut');$('.swirl,.masala,.bhukkoDiv').removeClass('rotate');clearTimeout(myVar);clearTimeout(myVarTwo);clearTimeout(myVarThree);clearTimeout(myVarFour);clearTimeout(myVarFive);yes = "n";flag = 1;}})};$(window).scroll(this.checkElements);this.checkElements();$(window).resize(function(e){windowHeight = e.currentTarget.innerHeight;});$(function(){});};})(jQuery);function rotation(){if(yes == "y"){myVar = setTimeout(function(){$('.masala').removeClass('opacityFull');swirlIn();clearTimeout(myVar);},3000);myVarPowder = setTimeout(function(){ powderIn()},6000);}}function swirlIn(){$('.swirl').addClass('rotate');$('.masala').addClass('rotate');$('.bhukkoDiv').addClass('rotate');myVarTwo = setTimeout(function(){if(yes == "y"){swirlOut();clearTimeout(myVarTwo);}},6700);}function swirlOut(){$('.swirl').removeClass('rotate');$('.masala').removeClass('rotate');$('.bhukkoDiv').removeClass('rotate')}function powderIn(){$('.powder').addClass('powderrotate');clearTimeout(myVarPowder);myVarThree = setTimeout(function(){if(yes == "y"){powderOut();clearTimeout(myVarThree);}},9000);}function powderOut(){$('.masala').addClass('masalaOut');$('.powder').addClass('powderRotateOut');clearTimeout(myVarPowder);myVarFour = setTimeout(function(){if(yes == "y"){$('.powder').removeClass('powderRotateOut');$('.powder').removeClass('powderrotate');$('.masala').removeClass('masalaOut');reStart();}clearTimeout(myVarFour);},6000)}function reStart(){myVarFive = setTimeout(function(){if(yes == "y"){rotation();}clearTimeout(myVarFive);},7000)}