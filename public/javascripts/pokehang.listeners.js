$(document).ready(function() {
  var selectedKeys = [];
  var $spaces = $('.space');
  var $container = $('.spaceContainer');
  $container.css('text-align', 'center');
  var $selectedContainer = $('.selectedContainer');
  console.log($spaces);
  for (var i = 0; i < $spaces.length; i++) {
    var $space = $($spaces[i]);
    // $space.height = '100px';
    // $space.width = ($(document).width / $spaces.length) + '%';
    // $space.borderBottom = '5px solid black';
    console.log($('body').css('width'));
    var width = $('body').css('width').split('p')[0];
    $space.css("height", "100px");
    $space.css("width", (width / ($spaces.length + 1)) + 'px');
    $space.css("display", "inline-block");
    $space.css("margin", "5px");
    $space.css("border-bottom", "5px solid black");
    $spaces[i] = $space;
  }

  $(document).keydown(function(e) {
    console.log(e.key);
    if (isUnique(selectedKeys, e.key)) {
      selectedKeys.push(e.key);


      //ar $newDiv;
      var green = '';

      for (var i = 0; i < $spaces.length; i++) {
        console.log($spaces[i].attr('letter'));
        if($spaces[i].attr('letter') === e.key){
          var $newH = $('<h2 class="correct" answer="yesss">'+ e.key.toUpperCase() + '</h2>');
          console.log($spaces[i]);
          $spaces[i].append($newH);
          //if($newDiv === 'undefined') $newDiv =$("<div class='selected green' code=" + e.keyCode + "><h4>"+e.key+"</h4></div>");
          green = 'green';
        }
      }
      var $newDiv = $("<div class='selected "+green+"' code=" + e.keyCode + "><h4>"+e.key+"</h4></div>");
      $selectedContainer.append($newDiv);
      //if($newDiv === 'undefined') $newDiv = $("<div class='selected' code=" + e.keyCode + "><h4>"+e.key+"</h4></div>");
      //$selectedContainer.append($newDiv);

    }
  })
});
