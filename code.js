onEvent("Dropdown1", "change", function( ) {
  if (getText("Dropdown1") == "Climate Change") {
    setScreen("ClimateChange");
    setText("dropdown2", "Climate Change");
  }
});
onEvent("Dropdown1", "change", function( ) {
  if (getText("Dropdown1") == "Prevention") {
    setScreen("PREVENTION");
    setText("dropdown3", "Prevention");
  }
});
onEvent("Dropdown1", "change", function( ) {
  if (getText("Dropdown1") == "Data") {
    setScreen("DATA");
    setText("dropdown4", "Data");
  }
});
onEvent("Dropdown1", "change", function( ) {
  if (getText("Dropdown1") == "Game") {
    setScreen("GAME");
  }
});
onEvent("Dropdown1", "click", function( ) {
  if (getText("Dropdown1") == "Feedback") {
    setScreen("FEEDBACK");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Home") {
    setScreen("HOME");
    setText("Dropdown1", "Home");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Data") {
    setScreen("DATA");
    setText("dropdown4", "Data");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Prevention") {
    setScreen("PREVENTION");
    setText("dropdown3", "Prevention");
  }
});
onEvent("dropdown2", "change", function( ) {
  if (getText("dropdown2") == "Game") {
    setScreen("GAME");
  }
});
onEvent("dropdown2", "click", function( ) {
  if (getText("dropdown2") == "Feedback") {
    setScreen("FEEDBACK");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Home") {
    setScreen("HOME");
    setText("Dropdown1", "Home");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Climate Change") {
    setScreen("ClimateChange");
    setText("dropdown2", "Climate Change");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Data") {
    setScreen("DATA");
    setText("dropdown4", "Data");
  }
});
onEvent("dropdown3", "change", function( ) {
  if (getText("dropdown3") == "Game") {
    setScreen("GAME");
  }
});
onEvent("dropdown3", "click", function( ) {
  if (getText("dropdown3") == "Feedback") {
    setScreen("FEEDBACK");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Home") {
    setScreen("HOME");
    setText("Dropdown1", "Home");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Climate Change") {
    setScreen("ClimateChange");
    setText("dropdown2", "Climate Change");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Prevention") {
    setScreen("PREVENTION");
    setText("dropdown3", "Prevention");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Data") {
    setScreen("DATA");
    setText("dropdown3", "Data");
  }
});
onEvent("dropdown4", "change", function( ) {
  if (getText("dropdown4") == "Game") {
    setScreen("GAME");
  }
});
onEvent("dropdown4", "click", function( ) {
  if (getText("dropdown4") == "Feedback") {
    setScreen("FEEDBACK");
  }
});
onEvent("CCBUTTON1", "click", function( ) {
  setScreen("CLIMATECHANGE2");
});
onEvent("CC2BUTTON", "click", function( ) {
  setScreen("ClimateChange");
});
onEvent("PREBUTTON1", "click", function( ) {
  setScreen("PREVENTION2");
});
onEvent("PREBUTTON2", "click", function( ) {
  setScreen("PREVENTION");
});
onEvent("DATABUTTON1", "click", function( ) {
  setScreen("DATA2");
});
onEvent("DATABUTTON2", "click", function( ) {
  setScreen("DATA");
});
onEvent("GAMEENTERBUTTON", "click", function( ) {
  setScreen("GAMEQ1");
});
onEvent("GAMEHOMEBUTTON", "click", function( ) {
  setScreen("HOME");
  setText("Dropdown1", "Home");
});
onEvent("GAMEWRONGHOME", "click", function( ) {
  setScreen("HOME");
  setText("Dropdown1", "Home");
});
onEvent("RESTART", "click", function( ) {
  setScreen("GAME");
});
onEvent("GAMEQ1WRONGANS", "click", function( ) {
  setScreen("GAMEWRONGANSSCREEN");
  playSound("assets/category_alerts/vibrant_wrong_action_hit_1.mp3", false);
});
onEvent("GAMEQ1RIGHTANS", "click", function( ) {
  setScreen("GAMEQ2");
  playSound("assets/category_achievements/peaceful_win_1.mp3", false);
});
onEvent("GAMEQ2RIGHTANS", "click", function( ) {
  setScreen("GAMEQ3");
  playSound("assets/category_achievements/peaceful_win_1.mp3", false);
});
onEvent("GAMEQ2WRONGANS", "click", function( ) {
  setScreen("GAMEWRONGANSSCREEN");
   playSound("assets/category_alerts/vibrant_wrong_action_hit_1.mp3", false);
});
onEvent("GAMEQ3RIGHTAN", "click", function( ) {
  setScreen("GAMEQ4");
  playSound("assets/category_achievements/peaceful_win_1.mp3", false);
});
onEvent("GAMEQ3WRONGANS", "click", function( ) {
  setScreen("GAMEWRONGANSSCREEN");
   playSound("assets/category_alerts/vibrant_wrong_action_hit_1.mp3", false);
});
onEvent("GAMEQ4RIGHTANS", "click", function( ) {
  setScreen("GAMEQ5");
  playSound("assets/category_achievements/peaceful_win_1.mp3", false);
});
onEvent("GAMEQ4WRONGANS", "click", function( ) {
  setScreen("GAMEWRONGANSSCREEN");
   playSound("assets/category_alerts/vibrant_wrong_action_hit_1.mp3", false);
});
onEvent("GAMEQ5RIGHTANS", "click", function( ) {
  setScreen("GAMEEND");
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
});
onEvent("GAMEQ5WRONGANS", "click", function( ) {
  setScreen("GAMEWRONGANSSCREEN");
   playSound("assets/category_alerts/vibrant_wrong_action_hit_1.mp3", false);
});
onEvent("GAMEENDSEHOME", "click", function( ) {
  setScreen("HOME");
  setText("Dropdown1", "Home");
});
onEvent("FeedbackSeHome", "click", function( ) {
  setScreen("HOME");
  setText("Dropdown1", "Home");
});
onEvent("FeedbackButton", "click", function( ) {
  open("https://forms.gle/VSoCPUF44jdyEnCY9");
});
