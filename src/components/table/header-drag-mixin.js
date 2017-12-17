// 列宽度拖动
// import utils from '../../src/utils/utils.js'
import {on,off,getViewportOffset,getLastChild} from '../../utils/dom.js';
export default {

    data(){
        return {

            draggingColumn: null, // 当前拖动的列
            isDragging: false, // 是否正在拖动
            draggingStartX: 0, // 拖动开始横坐标
            draggingEndX: 0, // 拖动结束横坐标
            minColumnWidth: 15 // 列允许拖动后的最小宽度
        };
    },

    methods: {

        handleTitleMouseMove(event, column){

            if (!this.columnWidthDrag){
                return false;
            }

            let target, rect;

            if (this.isDragging) {
                this.setDragLinePosition(event);
            }

            // 复杂表头，多列时不允许拖动
            // if (Array.isArray(column)) {

            //     if (column.length > 1) {
            //         return false;
            //     }
            //     else {
            //         column = column[0];
            //     }
            // }

            // 最后一列不允许拖动
            /*if (this.cloneColumns[this.cloneColumns.length - 1].field === column) {
             return false;
             }*/

            // if (!this.showVerticalBorder) {
            //     return false;
            // }

            target = event.target;

            while (target && target.tagName!='TH') {
                target = target.parentNode;
            }

            rect = target.getBoundingClientRect();

            const bodyStyle = document.body.style;

            if (rect.width >= this.minColumnWidth && rect.right - event.pageX < 10) {

                if (!this.isDragging) { // 拖动中不设置
                    // let c = this.cloneColumns.find(x => x.key === column.key);
                    let c = column;
                    if (c.children){
                        this.draggingColumn= getLastChild(c.children);

                    }
                    else{
                        this.draggingColumn=c;
                    }
                }

                bodyStyle.cursor = 'col-resize';
            } else {

                if (!this.isDragging) { // 拖动中不设置

                    this.draggingColumn = null;
                    bodyStyle.cursor = '';
                }
            }
        },

        handleTitleMouseOut(){

            if (!this.isDragging) {

                document.body.style.cursor = '';
            }
        },

        handleTitleMouseDown(event){

            if (!this.draggingColumn) {
                return false;
            }

            this.isDragging = true;

            this.draggingStartX = event.clientX;

            this.setDragLinePosition(event);

            document.onselectstart = function () {
                return false;
            };
            document.ondragstart = function () {
                return false;
            };

            on(document, 'mousemove', this.handleDragMouseMove);
            on(document, 'mouseup', this.handleDragMouseUp);
        },

        handleDragMouseMove(e){

            if (!this.isDragging) {
                return false;
            }

            this.setDragLinePosition(e);
        },

        setDragLinePosition(e){

            const tableLeft = getViewportOffset(this.$el).left,
                dragLine = this.$refs.dragLine,
                clientX = e.clientX;

            if (this.draggingColumn.width + (clientX - this.draggingStartX) <= this.minColumnWidth) {
                return;
            }

            dragLine.style.left = (clientX - tableLeft) + 'px';
        },

        // 拖动时mouseup
        handleDragMouseUp(e){

            if (!this.isDragging) {
                return false;
            }

            this.draggingEndX = e.clientX;

            var differ = this.draggingEndX - this.draggingStartX;

            // 差值大于1才处理
            if (Math.abs(differ) > 1) {

                let draggingColumn = this.draggingColumn;

                if (draggingColumn.width + differ < this.minColumnWidth) {

                    draggingColumn.width = this.minColumnWidth;
                } else {

                    draggingColumn.width += differ;
                }
            }

            // let rightViewBody = this.$el.querySelector('.v-table-rightview .v-table-body'),
            //     rightViewFooter = this.$el.querySelector('.v-table-rightview .v-table-footer'),
            //     hasTableFooter = this.hasTableFooter;

            // if (this.totalColumnsWidth < this.internalWidth) {

            //     if (!hasTableFooter){

            //         rightViewBody.style.overflowX = 'hidden';

            //         removeClass(rightViewBody, 'v-table-rightview-special-border');
            //         rightViewBody.classList.remove('v-table-rightview-special-border');

            //     }else{

            //         rightViewFooter.style.overflowX = 'hidden';
            //     }
            // } else {

            //     if (!hasTableFooter){

            //         rightViewBody.style.overflowX = 'scroll';

            //         if (!this.hasFrozenColumn) {

            //             addClass(rightViewBody, 'v-table-rightview-special-border');
            //         }

            //     }else{

            //         rightViewFooter.style.overflowX = 'scroll';
            //     }
            // }

            this.draggingColumn = null;
            document.body.style.cursor = '';
            this.isDragging = false;

            document.onselectstart = function () {
                return true;
            };
            document.ondragstart = function () {
                return true;
            };

            off(document, 'mousemove', this.handleDragMouseMove);
            off(document, 'mouseup', this.handleDragMouseUp);
        }

    }

};