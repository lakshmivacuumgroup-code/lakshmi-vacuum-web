
$(document).ready(function () {
  var $card = $('.card');

  // Card open/close logic
  $card.find('.js-expander').click(function () {
    var $thisCard = $(this).closest('.card');
    if ($thisCard.hasClass('is-collapsed')) {
      $card.not($thisCard).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
      $thisCard.removeClass('is-collapsed').addClass('is-expanded');

      if (!$card.not($thisCard).hasClass('is-inactive')) {
        $card.not($thisCard).addClass('is-inactive');
      }
    } else {
      $thisCard.removeClass('is-expanded').addClass('is-collapsed');
      $card.not($thisCard).removeClass('is-inactive');
    }
  });

  $card.find('.js-collapser').click(function () {
    var $thisCard = $(this).closest('.card');
    $thisCard.removeClass('is-expanded').addClass('is-collapsed');
    $card.not($thisCard).removeClass('is-inactive');
  });

  // Furnace content toggle logic
  $('.toggle-btn').on('click', function () {
    $('.toggle-btn').removeClass('active');
    $(this).addClass('active');

    const target = $(this).data('target');
    $('.furnace-content').hide();
    $(target).fadeIn(150);
  });
});