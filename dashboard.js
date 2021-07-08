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
function dashboard_data(sub_url, type, data, status) {
    var type = type;
    var url = main_url + sub_url + '/';
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}

function fetch_data(sub_url) {
    return dashboard_data(sub_url, "get", {}, 200);
}