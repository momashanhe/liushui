$(document).ready(function() {
  if ($('#time').length) {
    $('#time').datepicker({
      format: 'yyyy-mm-dd',
      language: 'zh-CN',
      autoclose: true,
      todayBtn: true,
      todayHighlight: true,
    });
  }
});