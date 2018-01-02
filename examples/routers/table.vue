<template>
<<<<<<< HEAD
    <div>
        <div style="width: 550px;">
            <Table height="200" border :columns="columns2" :data="bigData"></Table>
        </div>
        <br><br><br>
        <Table width="550"  style="height:100%" border :columns="columns2" :data="data0"></Table>
        <Table width="550" style="height:100%" border :columns="columns2" :data="data1"></Table>
        <Table width="550" style="height:100%" border :columns="columns3" :data="data1"></Table>
            <Table border :columns="columns6" :data="data5"></Table>
    </div>

=======
    <Table border :columns="columns6" :data="data5"></Table>
>>>>>>> 6b2cd6742a490d4a7159d887f56a93faf801e637
</template>
<script>
    export default {
        data () {

            let bigData = [];
            for(let i=0;i<19999;i++){

               bigData.push(    {
                        name: 'John Brown'+i,
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000,
                        address1: 'New York No. 1 Lake Park',
                        province1: 'America',
                        city1: 'New York',
                        zip1: 100000,
                        address2: 'New York No. 1 Lake Park',
                        province2: 'America',
                        city2: 'New York',
                        zip2: 100000
                    });

            }
            let data0 = [];

            for(let i=0;i<1;i++){

               data0.push(    {
                        name: 'John Brown'+i,
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    });

            }
            let data1 = [];

            for(let i=0;i<10;i++){

               data1.push(    {
                        name: 'John Brown'+i,
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    });

            }
            return {
                bigData:bigData,
                data0:data0,
                data1:data1,
                columns6: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                       fixed: 'left'
                    },
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                 
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address',
<<<<<<< HEAD
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        // fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                columns3: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                    //    fixed: 'left'
                    },
                    {
                        title:'info',
                        width: 100,
                        children:[
                        {
                            title: 'Age',
                            key: 'age',
                            width: 100
                        },
                        {
                            title: 'Province',
                            key: 'province',
                            width: 100
                        }
                        ]
                    },
                    { 
                        title:'info2',
                        children:[
                        {
                            title: 'City',
                            key: 'city',
                            width: 100
                        },
                        {
                        title:'oo',
                        children:[
                            {
                            title: 'Address',
                            key: 'address',
                            width: 200
                            },
                         {
                            title: 'Postcode',
                            key: 'zip',
                            width: 100
                        }]
                        }
                        ]
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        // fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
=======
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
>>>>>>> 6b2cd6742a490d4a7159d887f56a93faf801e637
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
            }
        }
    }
</script>
