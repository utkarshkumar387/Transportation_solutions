/*

supported functions on different models:
    named = vehicle, vehicle_category, vehicle_document_type, vehicle_document
vehicle: "id": { "type": "integer", "required": false, "read_only": true, "label": "ID" }, "image": { "type": "image upload", "required": true, "read_only": false, "label": "Image" }, "name": { "type": "string", "required": true, "read_only": false, "label": "Name", "max_length": 100 }, "vehicle_number": { "type": "string", "required": false, "read_only": false, "label": "Vehicle number", "max_length": 30 }, "company": { "type": "string", "required": false, "read_only": false, "label": "Company", "max_length": 20 }, "category": { "type": "field", "required": true, "read_only": false, "label": "Category" }
vehicle_category: "id": { "type": "integer", "required": false, "read_only": true, "label": "ID" }, "name": { "type": "string", "required": true, "read_only": false, "label": "Name", "max_length": 100 }, "description": { "type": "string", "required": true, "read_only": false, "label": "Description", "max_length": 999 }
vehicle_document_type: "id": { "type": "integer", "required": false, "read_only": true, "label": "ID" }, "title": { "type": "string", "required": true, "read_only": false, "label": "Title", "max_length": 30 }, "description": { "type": "string", "required": true, "read_only": false, "label": "Description" }
vehicle_document: "id": { "type": "integer", "required": false, "read_only": true, "label": "ID" }, "attachment": { "type": "file upload", "required": true, "read_only": false, "label": "Attachment" }, "unique_id": { "type": "string", "required": true, "read_only": false, "label": "Unique id", "max_length": 40 }, "start_date": { "type": "date", "required": true, "read_only": false, "label": "Start date" }, "end_date": { "type": "date", "required": true, "read_only": false, "label": "End date" }, "document_type": { "type": "field", "required": true, "read_only": false, "label": "Document type" }, "vehicle_id": { "type": "field", "required": true, "read_only": false, "label": "Vehicle id" }

*/
// var main_url1 = "https://transportations.herokuapp.com";
var main_url = "https://transportations.herokuapp.com/";
// var main_url = "http://127.0.0.1:8000/";

function call_ajax(type, url, data, status) {

    var error = true;
    var message = "";

    // console.log(data);

    $.ajax({
        type: type,
        async: false,
        url: url,
        data: data,
        success: function (data, textStatus, jqXHR) {
            // console.log(message);
            if (jqXHR.status == status) {
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

    if (sub_url != 'vehicle') {
        sub_url = 'vehicle/' + sub_url;
    }

    // if any validations perform here.

    var type = type;
    var url = main_url + sub_url + "/";
    var data = data;
    var status = status;
    return call_ajax(type, url, data, status);
}


function get_put_delete(sub_url, type, id, data, status) {

    if (sub_url != 'vehicle') {
        sub_url = 'vehicle/' + sub_url;
    }

    // if any validations perform here.

    var type = type;
    var url = main_url + sub_url + "/" + id + "/";
    var data = data;
    var status = status; // created status
    return call_ajax(type, url, data, status);

}


// add_data(sub_url, data)
// fetch_data(sub_url)
// get_data_by_id(sub_url, id)
// modify_data_by_id(sub_url, id, data)
// delete_data_by_id(sub_url, id)

function add_data(sub_url, data) {
    return add_post(sub_url, "post", data, 201);
}

function fetch_data(sub_url) {
    return add_post(sub_url, "get", {}, 200);
}

function get_data_by_id(sub_url, id) {
    return get_put_delete(sub_url, "get", id, {}, 200);
}

function modify_data_by_id(sub_url, id, data) {
    return get_put_delete(sub_url, "patch", id, data, 200);
}

function delete_data_by_id(sub_url, id) {
    return get_put_delete(sub_url, "delete", id, {}, 204);
}
