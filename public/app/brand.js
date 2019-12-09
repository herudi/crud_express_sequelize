
var app = new Vue({
  	el: '#app',
  	data: {
    	brands:null,
    	search:"",
    	btn_text:"Save",
    	brand:{}
  	},
  	methods:{
	  	getBrands: function(){
	  		var self = this;
	        axios.get(BASE_API+"brand").then(function(result){
	            self.brands = result.data.data;
	        }, function(error){
	            console.log(error);
	        });
	    },
	    onSearch: function() {
	       	var self = this;
	       	axios.get(BASE_API+"brand_search?text="+self.search).then(function(result){
	            self.brands = result.data.data;
	        }, function(error){
	            console.log(error);
	        });
	    },
	    onSave: function() {
	       	var self = this;
	       	if (self.btn_text === "Save") {
	       		axios.post(BASE_API+"brand",self.brand).then(function(result){
		            Swal.fire(
					  'Good job!',
					  'Success Save Brand ...',
					  'success'
					);
					self.brand = {};
		        }, function(error){
		            console.log(error);
		        });
	       	}else{
	       		axios.put(BASE_API+"brand/"+self.brand.id,self.brand).then(function(result){
		            Swal.fire(
					  'Good job!',
					  'Success Update Brand ...',
					  'success'
					);
		        }, function(error){
		            console.log(error);
		        });
	       	}
	    },
	    onAdd:function(){
	    	this.brand = {};
	    	this.btn_text = "Save";
	    },
	    onEdit:function(data){
	    	var self = this;
	    	self.btn_text = "Update";
	       	axios.get(BASE_API+"brand/"+data.id).then(function(result){
	            self.brand = result.data.data;
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
			  	axios.delete(BASE_API+"brand/"+data.id).then(function(result){
		            Swal.fire(
				      'Deleted!',
				      data.name+' has been deleted.',
				      'success'
				    );
				    self.getBrands();
		        }, function(error){
		            console.log(error);
		        });
			    
			  }
			})
	       	
	    }
  	},
  	mounted: function () {
        this.getBrands();
    }
});