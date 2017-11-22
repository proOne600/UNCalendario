# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

jQuery ->
  $('#datetimepicker').datetimepicker(
    locale: 'es'
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down",
      next: "fa fa-arrow-right",
      previous: "fa fa-arrow-left",

    }
  );
  $('#datetimepicker2').datetimepicker(
    locale: 'es'
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-arrow-up",
      down: "fa fa-arrow-down",
      next: "fa fa-arrow-right",
      previous: "fa fa-arrow-left",

    }
  );


