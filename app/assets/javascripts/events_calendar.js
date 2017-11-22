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
$(document).on('turbolinks:load', eventCalendar);
$(document).on('turbolinks:before-cache', clearCalendar);