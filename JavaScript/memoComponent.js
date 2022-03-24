Vue.component('memo-component', {
    props: ['id'],    
    template: `<div>
            <h3><button :style ="styleBtn" @click = "deletememo">X</button></h3>
            <slot></slot>
            <p>{{year}}년 {{month}}월 {{date}}일</p>
        </div>`,

        data: function() {
            return {
                year: new Date().getFullYear(),
                month: new Date().getMonth()+1,
                date: new Date().getDate(),
                styleBtn: {
                    color: 'white', fontWeight: 'bold',
                    backgroundColor: '#6C64F9',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '2px 10px'
                }
            }
        },
        methods: {
            deletememo: function() {
                this.$emit("delete", this.id);
            }
        }
})