var bootFormInput = 
	{
		template:
		`<div class="form-group">
			<label>{{cols}}</label>
			<input type="text" class="form-control w-25"/>
		</div>`,
		props:['cols'],
	}

new Vue({
	el: '#app',
	data:function(){
		return {
			inputDataList:[
					"氏名",
					"郵便番号",
					"電話番号"
				]
		}
	} ,
	components: {
		'boot-form-input': bootFormInput
	}
})
