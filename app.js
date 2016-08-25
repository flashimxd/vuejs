
new Vue({
    el: '#beerApp',
    data: {
        users: [],
        openDetails: []
    },
    methods: {

        doOpenDetails: function(ev, id){

            ev.preventDefault();

            var self = this;
            var index = self.openDetails.indexOf(id);

            if( index > -1){
                self.openDetails.pop(index);
            }else{
                self.openDetails.push(id);
            }
        }
    },
    ready: function(){

        var self = this;

        self.$http.get('http://jsonplaceholder.typicode.com/users/').then((response) => {
            self.users = response.data;
        });
    }
})