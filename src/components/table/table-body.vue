<template>
    <div :class="[prefixCls + '-viewer']" :style="viewerStyle">
    <table :class="[prefixCls + '-viewer-doc']"  cellspacing="0" cellpadding="0" border="0" :style="styleObject">
        <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column, index, false)">
        </colgroup>
        <tbody :class="[prefixCls + '-tbody']">
            <template v-for="(row, index) in filterData(data)">
                <table-tr
                    :row="row"
                    :key="row._rowKey"
                    :prefix-cls="prefixCls"
                    @mouseenter.native.stop="handleMouseIn(row._index)"
                    @mouseleave.native.stop="handleMouseOut(row._index)"
                    @click.native="clickCurrentRow(row._index)"
                    @dblclick.native.stop="dblclickCurrentRow(row._index)">
                    <td v-for="column in columns" :class="alignCls(column, row)">
                        
                        <Cell v-if=" fixed||column._visible" 
                            :fixed="fixed"
                            :prefix-cls="prefixCls"
                            :row="row"
                            :key="column._columnKey"
                            :column="column"
                            :natural-index="index"
                            :index="row._index"
                            :checked="rowChecked(row._index)"
                            :disabled="rowDisabled(row._index)"
                            :expanded="rowExpanded(row._index)"
                        ></Cell>
                    </td>
                </table-tr>
                <tr v-if="rowExpanded(row._index)" :class="{[prefixCls + '-expanded-hidden']: fixed}">
                    <td :colspan="columns.length" :class="prefixCls + '-expanded-cell'">
                        <Expand :key="row._rowKey" :row="row" :render="expandRender" :index="row._index"></Expand>
                    </td>
                </tr>
            </template>
            <CellEditor ref="cellEditor"   ></CellEditor>            
        </tbody>
    </table>
    </div>
</template>
<script>
// todo :key="row"
import TableTr from './table-tr.vue';
import CellEditor from './cell-editor.vue';
import Cell from './cell.vue';
import Expand from './expand.js';
import Mixin from './mixin';

export default {
    name: 'TableBody',
    mixins: [Mixin],
    components: { Cell, Expand, TableTr,CellEditor },
    props: {
        prefixCls: String,
        styleObject: Object,
        columns: Array,
        data: Array, // rebuildData
        objData: Object,
        columnsWidth: Object,
        fixed: {
            type: [Boolean, String],
            default: false
        }
    },
    computed: {
        expandRender () {
            let render = function () {
                return '';
            };
            for (let i = 0; i < this.columns.length; i++) {
                const column = this.columns[i];
                if (column.type && column.type === 'expand') {
                    if (column.render) render = column.render;
                }
            }
            return render;
        },
        viewerStyle() {
            let style = {};
            let viewer =   this.$parent.viewer;
            if (this.data.length>viewer.size) {
                let  height =(this.data.length-viewer.pageSize)* viewer.rowHeight;
        // let  height =(this.data.length)* viewer.rowHeight;
                style.height = `${height}px`;
            }
            else{
          //  let  height =(this.data.length-viewer.pageSize)* viewer.rowHeight;
                let  height =(this.data.length)* viewer.rowHeight;
                style.height = `${height}px`;
            }
            return style;
        }
    },
    methods: {
        filterData: function(numbers) {
            return numbers.filter((currentValue, index) => {
                let viewer =   this.$parent.viewer;
                return index >= viewer.from && index < viewer.size + viewer.from;
            });
        },
 
  

        rowChecked (_index) {
            return this.objData[_index] && this.objData[_index]._isChecked;
        },
        rowDisabled(_index){
            return this.objData[_index] && this.objData[_index]._isDisabled;
        },
        rowExpanded(_index){
            return this.objData[_index] && this.objData[_index]._isExpanded;
        },
        handleMouseIn (_index) {
            this.$parent.handleMouseIn(_index);
        },
        handleMouseOut (_index) {
            this.$parent.handleMouseOut(_index);
        },
        clickCurrentRow (_index) {
            let cell = this.getCell(event.target);
            this.$parent.$emit('on-cell-click', _index, cell);      
            this.$parent.clickCurrentRow(_index);
        },
        getCell(src) {
      //cell.firstElementChild.__vue__.$options.name
            if (src.tagName=='TD'){
                return src.firstChild.__vue__;
            }
            while (src) {
                if (src.__vue__&& src.__vue__.$options.name=='TableCell'){
                    return src.__vue__;
                }
                src = src.parentElement;
            }
            return src;

        },    
        dblclickCurrentRow (_index) {
            let cell = this.getCell(event.target);
            this.$parent.$emit('on-cell-dblclick', _index, cell);      
            this.$parent.dblclickCurrentRow(_index);
        }
    }
};
</script>
