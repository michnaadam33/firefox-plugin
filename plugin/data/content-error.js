$(function () {
    //Block element view
    var blockedElement = "";
    blockedElement += '<div style="text-align: center !important; color: red !important; background-color: yellow !important;">';
    blockedElement += '<h1>Treść zablokowana</h1>';
    blockedElement += '<p>Niestety serwer nie odpowiada!</p>';
    blockedElement += '<p>Poproś o dostęp administratora.</p>';
    blockedElement += '<div>';

    $('body').html(blockedElement);

});