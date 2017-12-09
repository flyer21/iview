 
<script>
export default {
  name: "TableColumn",

  props: {
      title:String,
      type:String,
      align:String,
      width:Number,
      className:String,
      ellipsis:String,
      renderHeader:Function,
      sortable:Boolean,
      sortMethod:Function,
      sortType:String,
      filters:Array,
      filterMethod:Function,
      filterMultiple:Boolean,
      filteredValue:Array,
      filterRemote:Function,
      fixed:String,
      render:Function
  },
  data() {
    return {};
  },
 
   created() {
       console.info("==========================")
       this.columnConfig={};
       console.info(this);
   },
   mounted(){
       console.info('m==========')
   },
  methods: {
    getColumnData() {
        let c ={};
        c.title = title;

        return  c;
    }
  }
};
</script>
