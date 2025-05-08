$(document).ready(function () {

    $('.text').textillate({ // Ensure your text elements have the class "text"
        loop: true,
        sync: true,
        in: {
            effect: ""
        },
        out: {
            effect: ""
        },
    });

    // SiriWave configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: 0.5, // Should be a number, not a string
        speed: 0.15,  // Should be a number, not a string
        autostart: true
    });

    $(document).ready(function () {
        $('.siri-message').textillate({
            loop: true,
            sync: true,
            in: {
                effect: "",
                sync: true
            },
            out: {
                effect: "",
                sync: true
            }
        });


    });

    // mic button click event

    $("#MicBtn").click(function () {
        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);

    });
});
