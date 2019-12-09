
var app = new Vue({
  	el: '#app',
  	data: {
    	items:null,
    	search:"",
    	btn_text:"Save",
    	item:{},
    	select_brand:null,
    	brands:null
  	},
  	methods:{
	  	getItems: function(){
	  		var self = this;
	        axios.get(BASE_API+"item").then(function(result){
	            self.items = result.data.data;
	            axios.get(BASE_API+"brand").then(function(result_brand){
		            self.brands = result_brand.data.data;
		        }, function(error){
		            console.log(error);
		        });
	        }, function(error){
	            console.log(error);
	        });
	    },
	    onSearch: function() {
	       	var self = this;
	       	axios.get(BASE_API+"item_search?text="+self.search).then(function(result){
	            self.items = result.data.data;
	        }, function(error){
	            console.log(error);
	        });
	    },
	    onSave: function() {
	       	var self = this;
	       	self.item.brand_id = self.select_brand;
	       	if (self.btn_text === "Save") {
	       		axios.post(BASE_API+"item",self.item).then(function(result){
		            Swal.fire(
					  'Good job!',
					  'Success Save item ...',
					  'success'
					);
					self.item = {};
		        }, function(error){
		            console.log(error);
		        });
	       	}else{
	       		axios.put(BASE_API+"item/"+self.item.id,self.item).then(function(result){
		            Swal.fire(
					  'Good job!',
					  'Success Update item ...',
					  'success'
					);
		        }, function(error){
		            console.log(error);
		        });
	       	}
	    },
	    onAdd:function(){
	    	this.item = {};
	    	this.btn_text = "Save";
	    	this.select_brand = null;
	    },
	    onEdit:function(data){
	    	var self = this;
	    	self.btn_text = "Update";
	       	axios.get(BASE_API+"item/"+data.id).then(function(result){
	            self.item = result.data.data;
	            self.select_brand = self.item.brand.id;
	            $('#myModal').modal({show:true});
	        }, function(error){
	            console.log(error);
	        });
	    },
	    onDelete:function(data){
	    	var self = this;
	    	Swal.fire({
			  title: 'Confirmation',
			  text: "Are you sure to delete "+data.name,
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
			  if (result.value) {
			  	axios.delete(BASE_API+"item/"+data.id).then(function(result){
		            Swal.fire(
				      'Deleted!',
				      data.name+' has been deleted.',
				      'success'
				    );
				    self.getItems();
		        }, function(error){
		            console.log(error);
		        });
			    
			  }
			})
	       	
	    }
  	},
  	mounted: function () {
        this.getItems();
    }
});