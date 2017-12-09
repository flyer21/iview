


<template>
    <div>
        <div style="width: 550px;">
            <Table height="200" border  :data="bigData">
  

                <TableColumn title="name" key="name" :width="100" ></TableColumn>
                <TableColumn title="Age" key="age" :width="100"  ></TableColumn>
                <TableColumn title="Province" key="province" :width="100"  ></TableColumn>
                <TableColumn title="City" key="city" :width="100"  ></TableColumn>
                <TableColumn title="Address" key="address" :width="100"  ></TableColumn>
                <TableColumn title="Address" key="address" :width="100"  ></TableColumn>
                <TableColumn title="Postcode" key="zip" :width="100"  ></TableColumn>
                <TableColumn title="Action" key="action" :width="100" :render="actionRender" ></TableColumn>
            </Table>
        </div>
        <br><br><br>
        
    </div>
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
       actionRender: (h, params) => {
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
                        },

                columns2: [
                    {
                        title: 'Name',
                        key: 'name1',
                        width: 100,
                        renderType:'selection',
                    //    fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
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
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>

