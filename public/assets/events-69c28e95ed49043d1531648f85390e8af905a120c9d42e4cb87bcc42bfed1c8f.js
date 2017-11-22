(function() {
  jQuery(function() {
    $('#datetimepicker').datetimepicker({
      locale: 'es',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        next: "fa fa-arrow-right",
        previous: "fa fa-arrow-left"
      }
    });
    $('#datetimepicker2').datetimepicker({
      locale: 'es',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
        next: "fa fa-arrow-right",
        previous: "fa fa-arrow-left"
      }
    });
    return $('#calendar').fullCalendar({
      locale: 'es',
      events: '/events.json'
    });
  });

}).call(this);
