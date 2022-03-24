new Vue({
    el: "#app",
    data: {
        id: 0,
        memo: '',
        memo_title: '',
        memolist: []
    },
    methods: {
        addMemo: function(e) {
            e.preventDefault();
            this.memolist.push(
                {id: this.id, memo_title: this.memo_title, memo: this.memo});
            this.id ++;
            this.memo_title = "";
            this.memo = "";
        },
        deleteMemo: function(id) {
            let index = 0;

            this.memolist.forEach((element, i) => {
                if(element.id == id){
                    index = i;
                }
            });

            this.memolist.splice(index, 1);
        }
    }
});