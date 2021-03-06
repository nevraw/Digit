var GColor = (function () {
  return {
    fromHex:GColorFromHex,
    toHex:GColorToHex,
    toName:GColorName,
  
    ArmyGreen:212,
    BabyBlueEyes:235,
    Black:192,
    Blue:195,
    BlueMoon:199,
    Brass:233,
    BrightGreen:220,
    BrilliantRose:246,
    BulgarianRose:208,
    CadetBlue:218,
    Celeste:239,
    ChromeYellow:248,
    CobaltBlue:198,
    Cyan:207,
    DarkCandyAppleRed:224,
    DarkGray:213,
    DarkGreen:196,
    DukeBlue:194,
    ElectricBlue:223,
    ElectricUltramarine:211,
    FashionMagenta:242,
    Folly:241,
    Green:204,
    Icterine:253,
    ImperialPurple:209,
    Inchworm:237,
    Indigo:210,
    IslamicGreen:200,
    JaegerGreen:201,
    JazzberryJam:225,
    KellyGreen:216,
    LavenderIndigo:231,
    Liberty:214,
    LightGray:234,
    Limerick:232,
    Magenta:243,
    Malachite:205,
    MayGreen:217,
    MediumAquamarine:222,
    MediumSpringGreen:206,
    Melon:250,
    MidnightGreen:197,
    MintGreen:238,
    Orange:244,
    OxfordBlue:193,
    PastelYellow:254,
    PictonBlue:219,Purple:226,
    Purpureus:230,
    Rajah:249,
    Red:240,
    RichBrilliantLavender:251,
    RoseVale:229,
    ScreaminGreen:221,
    ShockingPink:247,
    SpringBud:236,
    SunsetOrange:245,
    TiffanyBlue:202,
    VeryLightBlue:215,
    VividCerulean:203,
    VividViolet:227,
    White:255,
    WindsorTan:228,
    Yellow:252
  };
  
  function GColorFromHex(hex) {
    var hexNum = parseInt(hex,16);
    var a=192;
    var r=(((hexNum >> 16) & 0xFF) >> 6) << 4;
    var g=(((hexNum >>  8) & 0xFF) >> 6) << 2;
    var b=(((hexNum >>  0) & 0xFF) >> 6) << 0;
    return a + r + g + b;
  }

  function GColorToHex(color) {
    var r = (color & 48) >> 4;
    var g = (color & 12) >> 2;
    var b = (color &  3) >> 0;
    var hexString = [r,g,b].map(function(x) { x *= 5; return x.toString(16) + x.toString(16); }).join('');
    return hexString.toUpperCase();
  }

  function GColorName(color){ 
    var names = Object.keys(GColor);
    for (var n = 0; n < names.length; n += 1){
      if (GColor[names[n]] == color) {
        return names[n];
      }
    }
    return null;
  }
}());
