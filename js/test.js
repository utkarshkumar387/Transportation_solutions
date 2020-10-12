console.log('hey there');

 $(function(){

    $.ajax({
        type: 'GET',
        url: 'https://transportations.herokuapp.com/vehicle/vehicle_category/',
        success: function(vehicles) {
            $.each(vehicles, function(i, vehicle){
                $('#vehicleList').append('<option>'+ vehicle.name +'</option>');
            });
        }
    })
});