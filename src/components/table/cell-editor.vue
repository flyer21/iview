<template>
    <div :style="styles" class="ivu-row-flex ivu-row-flex-middle ">
        <component ref="editor" v-model="value" v-show="show" :is="editor"></component>

    </div>
</template>
<script>
    export default {
        name: 'TableCellEditor',
        components: {},
        props: {
            prefixCls: String,

        },

        data() {
            return {
                editor: '',

                value: '',
                show: false,
                width: 'auto',
                height: 'auto',
                left: 0,
                top: 0,
                index: -1,



            };
        },
        computed: {
            styles() {
                return {
                    position: 'absolute',
                    width: `${this.width}px`,
                    top: `${this.top}px`,
                    height: `${this.height}px`,
                    left: `${this.left}px`,
                    'background-color': '#fff'
                };
            },
        },
        methods: {
            startEditor(v) {
                this.value = v;
                if (typeof this.editor == 'object' && this.$refs.editor) {

                    this.$set(this.$refs.editor, 'currentValue', v);
                }
                this.show = true;


            },
            stopEditor() {
                this.show = false;
                let rowData = this.$parent.$parent.data[this.index];
                if (rowData) {
                    if (typeof this.editor == 'object') {
                        this.$set(rowData, this.key, this.$refs.editor.currentValue);
                    } else {
                        this.$set(rowData, this.key, this.value);
                    }

                }
                this.index = -1;


            },

            getCellEditor(index, col, vcell) {
                if (this.show) {
                    this.stopEditor();
                }

                if (col.editor) {
                    this.key = col.key;
                    this.col = col;
                    let td = vcell.$el.parentElement;
                    this.top = td.offsetTop+1;
                    this.left = td.offsetLeft+1;
                    this.height = td.offsetHeight-2;
                
                    this.width = td.offsetWidth-2;
                    this.index = index;
                    this.editor = col.editor;
                    return this;
                }

                return false;

            }
        },

    };
</script>