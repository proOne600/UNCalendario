function eventCalendar() {
    return $('#calendar').fullCalendar({
        header: {
            left: 'title',
            center: 'month,agendaWeek,agendaDay',
            right: 'today prev,next'
        },
        locale: 'es',
        events: '/events.json'
    });
};

function clearCalendar() {
    $('#calendar').fullCalendar('delete'); // In case delete doesn't work.
    $('#calendar').html('');
};

function loadDatePicker() {
    return $('#datetimepicker').datetimepicker({
            locale: 'es',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down",
                next: "fa fa-arrow-right",
                previous: "fa fa-arrow-left"
            }
        }
    )
}

function loadDatePicker2() {
    return $('#datetimepicker2').datetimepicker({
            locale: 'es',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down",
                next: "fa fa-arrow-right",
                previous: "fa fa-arrow-left"
            }
        }
    )
}

$(document).on('turbolinks:load', eventCalendar);
$(document).on('turbolinks:before-cache', clearCalendar);

$(document).on('turbolinks:load', loadDatePicker);
$(document).on('turbolinks:load', loadDatePicker2);
