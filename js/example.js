$(window).load(function() {
  $("#unicorn").css("left", $("#unicorn").position().left).circulate({
    sizeAdjustment: 160,
    speed: 8000,
    width: -820,
    height: 100,
    loop: true,
    zIndexValues: [1, 20, 20, 1]
  });
});
