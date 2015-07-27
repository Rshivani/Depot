$(document).on("ready", function() {
  return $('.store .entry > img').click(function() {
    return $(this).parent().find(':submit').click();
  });
});
