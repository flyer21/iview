import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

/* istanbul ignore next */
export const on = (function() {
    if (!isServer && document.addEventListener) {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();

/* istanbul ignore next */
export const off = (function() {
    if (!isServer && document.removeEventListener) {
        return function(element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();


   // 获取当前元素的left、top偏移
export function getViewportOffset(element) {

    var doc = document.documentElement,
        box = typeof element.getBoundingClientRect !== 'undefined' ? element.getBoundingClientRect() : 0,
        scrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0),
        offsetLeft = box.left + window.pageXOffset,
        offsetTop = box.top + window.pageYOffset;


    var left = offsetLeft - scrollLeft,
        top = offsetTop - scrollTop;

    return {
        left: left,
        top: top,
        right: window.document.documentElement.clientWidth - box.width - left,
        bottom: window.document.documentElement.clientHeight - box.height - top
    };
}

export function getLastChild(children){
    if (children[children.length-1].children){
        return getLastChild(children[children.length-1].children);

    }
    return children[children.length-1];
    
}