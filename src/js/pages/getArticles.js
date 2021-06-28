import {getUrl} from './../modules/createUrl.js';
import {showResult} from './../modules/newsApi.js';

var type

window.location.search === '' ? type = ['?everything', 'q=weather&sortBy=popularity'] :  type = (window.location.search).split('_')

var url = getUrl(type[0].slice(1), type[1])

//showResult(url)
