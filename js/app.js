var obj = {
    "players": [
        {
            "name": "Stanislaw Koniecpolski",
            "level": "Beginner",
            "victories": "8",
            "goalsScored": "12",
            "gamesPlayed": "23",
            "email": "skoniecpolski@ecovadis.com",
            "photo": "images/sk.png"
        },
        {
            "name": "Sultan Mehmed",
            "level": "Advanced",
            "victories": "18",
            "goalsScored": "23",
            "gamesPlayed": "29",
            "email": "smehmed@ecovadis.com",
            "photo": "images/sm.jpg"
        },
        {
            "name": "Petro Doroshenko",
            "level": "Expert",
            "victories": "44",
            "goalsScored": "55",
            "gamesPlayed": "59",
            "email": "pdoroshenko@ecovadis.com",
            "photo": "images/pd.jpg"
        },
        {
            "name": "Jan Sobieski",
            "level": "expert",
            "victories": "52",
            "goalsScored": "77",
            "gamesPlayed": "60",
            "email": "jsobieski@ecovadis.com",
            "photo": "images/js.jpg"
        },
        {
            "name": "Kara Mustafa Pasha",
            "level": "Advanced",
            "victories": "",
            "goalsScored": "32",
            "gamesPlayed": "25",
            "email": "pkaramustafa@ecovadis.com",
            "photo": "images/kmp.jpg"
        },
        {
            "name": "Jan Karol Chodkiewicz",
            "level": "advanced",
            "victories": "9",
            "goalsScored": "18",
            "gamesPlayed": "20",
            "email": "skoniecpolski@ecovadis.com",
            "photo": "images/jc.jpg"
        },
        {
            "name": "Adil Giray",
            "level": "Beginner",
            "victories": "2",
            "goalsScored": "",
            "gamesPlayed": "5",
            "email": "gadil@ecovadis.com",
            "photo": ""
        }
    ]
};

$(document).ready(function() {

    console.log("document ready");
    var countA = 0;
    var countB = 0;
    var container;

    $("#inputInvite").on("keyup",function(e){
        var li;
        var string = "";
        $("#dropdownList li").remove();

        for (var i = 0; i < obj["players"]["length"]; i++){
              string = obj["players"][i]["name"].slice(0,$(this).val().length);

              if (string === $(this).val()){
                  $("#dropdownList").append('<li><a></a></li>');
                  li=$("#dropdownList li a");
                  li.last().text(obj["players"][i]["name"]);
                  $("#dropdownList").fadeIn();
              }
        }

        $("#dropdownList").on("click","li",function(e){
            e.stopImmediatePropagation();
            $("#inputInvite").val($(this).text());
            $("#dropdownList li").remove();

            $("#buttonInvite").on("click",function(e){
                e.preventDefault();
                e.stopImmediatePropagation();

                if ($('input[type="radio"]:checked').val() === "teamA"){
                  container = $("#playersContainerA");
                  countA++;
                } else if ($('input[type="radio"]:checked').val() === "teamB"){
                  container = $("#playersContainerB");
                  countB++;
                }
                console.log(container);

                container.append('<div class="player"><div class="img_container"><img src="" alt=""></div><div class="player_info"><h2></h2><p>Level: <span></span></p></div></div>');

                for (var i = 0; i < obj["players"]["length"]; i++){
                      if ($("#inputInvite").val() ===  obj["players"][i]["name"] ){
                          var player_obj = obj["players"][i];
                          console.log(player_obj["name"]);
                          console.log();
                          container.find("img").last().attr("src",player_obj["photo"]);
                          container.find("img").last().attr("alt",player_obj["name"]);
                          container.find("h2").last().html(player_obj["name"]);
                          container.find("span").last().html(player_obj["level"]);
                      }
                }
                if (countA>1 && countB>1) {
                    $('#buttonPlay').prop("disabled", false);
                }
            });
        });
    });
});
