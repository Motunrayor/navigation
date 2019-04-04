
var icon = new Vue({
    el: '#menu',
    data: {
        action: 'home'
    },

    methods: {
        makeActive: function(item){
            this.action = item;
        }
    }
});