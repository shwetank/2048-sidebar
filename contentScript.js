chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.line == 'runIt') {
      var user_query = request.user_query;
      var blend_mode = request.blend_mode;
      applyBlendMode(user_query, blend_mode);
    }
  });

function applyBlendMode(user_query, blend_mode) {
  var elements = document.querySelectorAll(user_query);
  if (elements.length > 0) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.mixBlendMode = '' + blend_mode + '';
    }
    chrome.runtime.sendMessage({
      from: 'content',
      message: 'valid'
    });
  } else {
    /* It is an invalid query */
    chrome.runtime.sendMessage({
      from: 'content',
      message: 'invalid'
    });
  }
}
