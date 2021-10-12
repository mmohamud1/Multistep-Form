// add click functionilty to button for form 1
document.getElementById('form-btn').addEventListener('click', () => {
  // Update progress bar
  $('#progress-1').removeClass('active').addClass('done');
  $('#progress-1-label').html('&#10003;')
  $('#progress-1-bar').removeClass('active').addClass('done');
  $('#progress-2').addClass('active');

  // update form
  $('#form-content').html('<h1 class="form-placeholder">Form 2</h1>')

  // update btn
  $('#form-btn').hide()
  $('#form-btn-2').show()

})

// add click functionilty to button for form 2
document.getElementById('form-btn-2').addEventListener('click', () => {
  // Update progress bar
  $('#progress-2').removeClass('active').addClass('done');
  $('#progress-2-label').html('&#10003;')
  $('#progress-2-bar').addClass('done');
  $('#progress-3').addClass('active');

  // update form
  $('#form-content').html('<h1 class="form-placeholder">Form 3</h1>')

  // update btn
  $('#form-btn-2').hide()
  $('#form-btn-3').show()

})