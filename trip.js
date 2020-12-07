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
            message = data;
            if (jqXHR.status === status) {
                error = false;
            }
        },
        error: function (xhr, status, error) {
            message = xhr.responseText;
        }
    });

    return { "error": error, "message": message };
}

function trip_data(sub_url, type, data, status) {
    if (sub_url != 'trip') {
        sub_url = 'trip/' + sub_url;
    }

    var type = type;
    var url = main_url + sub_url + '/';
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
    return trip_data(sub_url, "get", {}, 200);
}
function add_data(sub_url, data) {
    return trip_data(sub_url, "post", data, 201);
}
function get_data(sub_url) {
    return select_data(sub_url, "get", {}, 200);
}
