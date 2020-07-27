// eslint-disable-next-line strict
'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elmentClosest from 'element-closest';
elmentClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'mdn-polyfills/Node.prototype.append';


import selectClub from './moduls/selectClub';
import togglePopUp from './moduls/togglePopUp';
import gift from './moduls/gift';
import mainSlider from './moduls/mainSlider';
import slider from './moduls/slider';
import fixedMenu from './moduls/fixedMenu';
import burgerMenu from './moduls/burgerMenu';
import arrow from './moduls/arrow';
import calc from './moduls/calc';
import carousel from './moduls/carousel';
import formValidation from './moduls/formValidation';
import sendForm from './moduls/sendForm';


selectClub();//club select
togglePopUp();//modals
gift();//gift
mainSlider(); // main slider
slider();//slide
fixedMenu();
burgerMenu();//burger
arrow();
calc();
carousel.init();
sendForm(document.getElementById('form1'));
sendForm(document.getElementById('form2'));
sendForm(document.getElementById('banner-form'));
sendForm(document.getElementById('footer_form'));
formValidation('#form1', '#callback_form1-phone');
formValidation('#form2', '#callback_form2-phone');
formValidation('#banner-form', '#phone');
formValidation('#footer_form', '#callback_footer_form-phone');

