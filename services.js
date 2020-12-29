let main_url = "https://transportations.herokuapp.com/";

function call_ajax(type, url, data, status) {
    let error = true;
    let message = "";
    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        success: function (data, textStatus, jqXHR) {
            if (jqXHR.status === status) {
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
function service_data(sub_url, type, data, status) {
    if (sub_url != 'service') {
        sub_url = 'service/' + sub_url;
    }

    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function service_data_by_id(sub_url, type, id, data, status) {
    if (sub_url != 'service') {
        sub_url = 'service/' + sub_url;
    }
    var type = type;
    var url = main_url + sub_url + "/" + id + "/";
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function select_data(sub_url, type, data, status) {
    if (sub_url != 'driver') {
        sub_url = 'vehicle';
    }
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}
function fetch_data(sub_url) {
    return service_data(sub_url, "get", {}, 200);
}
function get_vehicle(sub_url) {
    return select_data(sub_url, "get", {}, 200);
}
function post_data(sub_url, data) {
    return service_data(sub_url, "post", data, 201);
}
function fetch_data_by_id(sub_url, id) {
    return service_data_by_id(sub_url, "get", id, {}, 200);
}