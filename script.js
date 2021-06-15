var TestComp = {template:"<div><slot>ゲスト</slot>さんようこそ!!</div>"}

new Vue({
    el: '#app',
    components:{
        'test-comp':TestComp
    }
})