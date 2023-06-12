// Заказ обратного звонка

$(document).ready(function () {
  $("#feedback-form").submit(function () {
    var submitButton = $(this).find(".form__popup__send-button");
    var originalText = submitButton.text();
    submitButton.text("Отправляется...");

    $.ajax({
      type: "POST",
      url: "../php/send__feedback.php",
      data: $(this).serialize(),
    }).done(function () {
      submitButton.text(originalText);
      $(".popup__feedback")
        .removeClass("popup__opend");
      $(".popup__answer")
        .addClass("popup__opend")
        .hide()
        .fadeIn();
      setTimeout(function () {
        // $(this).trigger("reset");
        $(".popup__answer").removeClass("popup__opend").fadeOut();
        $("#feedback-form")[0].reset();
      }, 5000);
    });

    return false;
  });
});

// Заказ горящего тура

$(document).ready(function () {
  $("#hot-tours-form").submit(function () {
    var submitButton = $(this).find(".form__popup__send-button");
    var originalText = submitButton.text();
    submitButton.text("Отправляется...");

    $.ajax({
      type: "POST",
      url: "../php/send__hot-tours.php",
      data: $(this).serialize(),
    }).done(function () {
      submitButton.text(originalText);
      $(".popup__hot-tours")
        .removeClass("popup__opend");
      $(".popup__answer")
        .addClass("popup__opend")
        .hide()
        .fadeIn();
      setTimeout(function () {
        $(".popup__answer").removeClass("popup__opend").fadeOut();
        $("#hot-tours-form")[0].reset();
      }, 5000);
    });

    return false;
  });
});

// Подбор и покупка тура в офисе

$(document).ready(function () {
  $("#buy-in-office-form").submit(function () {
    var submitButton = $(this).find(".form__popup__send-button");
    var originalText = submitButton.text();
    submitButton.text("Отправляется...");

    $.ajax({
      type: "POST",
      url: "../php/send__tour-in-office.php",
      data: $(this).serialize(),
    }).done(function () {
      submitButton.text(originalText);
      $(".popup__office-tour")
        .removeClass("popup__opend");
      $(".popup__answer")
        .addClass("popup__opend")
        .hide()
        .fadeIn();
      setTimeout(function () {
        $(".popup__answer").removeClass("popup__opend").fadeOut();
        $("#buy-in-office-form")[0].reset();
      }, 5000);
    });

    return false;
  });
});

// Подбор и покупка тура у менеджера

$(document).ready(function () {
  $("#buy-tour-manager").submit(function () {
    var submitButton = $(this).find(".form__popup__send-button");
    var originalText = submitButton.text();
    submitButton.text("Отправляется...");

    $.ajax({
      type: "POST",
      url: "../php/send__tour-manager.php",
      data: $(this).serialize(),
    }).done(function () {
      submitButton.text(originalText);
      $(".popup__office-tour-manager")
        .removeClass("popup__opend");
      $(".popup__answer")
        .addClass("popup__opend")
        .hide()
        .fadeIn();
      setTimeout(function () {
        $(".popup__answer").removeClass("popup__opend").fadeOut();
        $("#buy-tour-manager")[0].reset();
      }, 5000);
    });

    return false;
  });
});

// Ответьте на 7 вопросов

$(document).ready(function () {
  $("#questionnaire-form").submit(function () {
    var submitButton = $(this).find(".form__popup__send-button");
    var originalText = submitButton.text();
    submitButton.text("Отправляется...");

    $.ajax({
      type: "POST",
      url: "../php/send__questionnaire.php",
      data: $(this).serialize(),
    }).done(function () {
      submitButton.text(originalText);
      $(".popup__questionnaire")
        .removeClass("popup__opend");
      $(".popup__answer")
        .addClass("popup__opend")
        .hide()
        .fadeIn();
      setTimeout(function () {
        $(".popup__answer").removeClass("popup__opend").fadeOut();
        $("#questionnaire-form")[0].reset();
      }, 5000);
    });

    return false;
  });
});