var main_url = "https://transportations.herokuapp.com/";

function call_ajax(type, url, data, status) {
    let error = true;
    let message = "";
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        success: function (data, textStatus, jqXHR) {
            if (jqXHR.status == status) {
                // console.log(message);
                error = false;
                message = data;
            }
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
        }
    });

    return { "error": error, "message": message };

}
function add_post(sub_url, type, data, status) {
    if (sub_url != 'driver') {
        sub_url = 'driver/' + sub_url;
    }

    var type = type;
    var url = main_url + sub_url + "/"
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function get_data(sub_url, type, data, status) {
    if (sub_url != 'driver') {
        sub_url = 'driver/' + sub_url;
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function driver_data_by_id(sub_url, type, id, data, status) {
    if (sub_url != 'driver') {
        sub_url = 'driver/' + sub_url;
    }
    var type = type;
    var url = main_url + sub_url + "/" + id + "/";
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function add_data(sub_url, data) {
    return add_post(sub_url, "post", data, 201);
}
function fetch_data(sub_url) {
    return get_data(sub_url, "get", {}, 200);
}
function get_data_by_id(sub_url, id) {
    return driver_data_by_id(sub_url, "get", id, {}, 200);
}
function modify_data_by_id(sub_url, id, data) {
    return driver_data_by_id(sub_url, "put", id, data, 200);
}
function delete_driver_by_id(sub_url, id) {
    return driver_data_by_id(sub_url, "delete", id, {}, 204);
}