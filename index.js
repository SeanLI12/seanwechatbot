
const secret = process.evv.secret;
const id =process.evv.id;
const mid=process.evv.mid;



const weather_key = "078a8c3a21f6b047a2823972841096aa"; // openweathermap API key


var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var request = require('request');

var port = process.env.PORT || 1317;
var app = express();
app.use(bodyParser.json());

// 接聽來自Line伺服器中的訊息

const url = require('url');
const fixieUrl = url.parse(process.env.FIXIE_URL);
const requestUrl = url.parse('https://api.line.me/v1/');


http.get({
    host: fixieUrl.hostname,
    port: fixieUrl.port,
    path: requestUrl.href,
    headers: {
      Host: requestUrl.host,
      'Proxy-Authorization': `Basic ${new Buffer(fixieUrl.auth).toString('base64')}`,
    }
}, res => {
  console.log(`Got response: ${res.statusCode}`);
});
	
	


var linebot = require('linebot');

var bot = linebot({
    channelId: id,
    channelSecret: secret,
    channelAccessToken: mid
});

bot.on('follow',   function (event) { 
  event.reply('Welcome to 188 sport center, please tell me which sport or player you are interesting in.').then(function (data) {
      // success
  }).catch(function (error) {
      // error
  });

});

function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




bot.on('postback', function (event) { 
  var foo = getParameterByName('betType',event.postback.data);
  var aoo = getParameterByName('action',event.postback.data);
  if(foo=="outright"){
    console.log("bingo");
    event.reply({
      type: 'template',
      altText: 'this is a buttons template',
      template: {
          type: 'buttons',
          thumbnailImageUrl: 'https://sb-doc-cdn.iowiuhwer37asdan.net/Darts/Sport01.jpg',
          title: 'Burning Questions',
          text: 'What About Phil Taylor? How Will He Fare?',
          actions: [{
              type: 'postback',
              label: 'Round3 2.60',
              data: '&action=placebet'
          }, {
              type: 'postback',
              label: 'Quarterfinals 4.00',
              data: '&action=placebet'
          }, {
              type: 'postback',
              label: 'Semifinals 2.50',
              data: '&action=placebet'
          },{
              type: 'uri',
              label: 'View more',
              uri: 'https://seantestgoggle.000webhostapp.com/indexx.html'
          }]
      }
    }).then(function (data) {
        console.log(data);
          // success
      }).catch(function (error) {
          // error
      });
  }
  if(aoo=="placebet"){
    event.reply({
      type: 'template',
      altText: 'this is a confirm template',
      template: {
          type: 'confirm',
          text: 'Are you sure to place bet?',
          actions: [{
              type: 'postback',
              label: 'Yes',
              data: '&action=confirmedplace'
          }, {
              type: 'postback',
              label: 'No',
              data: '&action=dontplace'
          }]
      }
    });
  }
  console.log(event);
});

bot.on('message', function (event) {
	
  
	if(event.message.type=="text"){
    if(event.message.text=="BLANCE"||event.message.text=="balance"||event.message.text=="my balance"||event.message.text=="Balance"||event.message.text=="My Balance"||event.message.text=="My balance"){
      event.reply('Hi Sean Li, You have 300.00 USD Blance').then(function (data) {
      // success
      }).catch(function (error) {
          // error
      });
    }
    
    if(event.message.text=="DARTS" ||event.message.text=="darts" ||event.message.text=="Darts" ||event.message.text=="Football" || event.message.text=="football" || event.message.text=="Chelsea" || event.message.text=="Arsenal" || event.message.text=="Eden" || event.message.text=="Diego" || event.message.text=="Oscar"){
        event.reply({
          type: 'template',
          altText: 'this is a carousel template',
          template: {
              type: 'carousel',
              columns: [{
                  thumbnailImageUrl: 'https://sb-doc-cdn.iowiuhwer37asdan.net/Darts/Sport01.jpg',
                  title: 'PDC World Championship 2017 Specials',
                  text: 'Outright',
                  actions: [{
                      type: "postback",
                      label: "View",
                      data: "&betType=outright&eventId=123"
                  }]
              }, {
                  thumbnailImageUrl: 'https://images.rapgenius.com/a0b36b5ac81e940ca5c1b8c1474996dc.1000x711x1.jpg',
                  title: 'Eden Michael Hazard',
                  text: 'To Score',
                  actions: [{
                      type: 'uri',
                      label: 'Pleca bet',
                      uri: 'https://seantestgoggle.000webhostapp.com/indexx.html'
                  }]
              }, {
                  thumbnailImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh9dJCSLK7FkMr2swnTOeAGTJFZAe-uUdK4caygwt3F62eZ1csg',
                  title: 'Diego Costa',
                  text: 'To Score',
                  actions: [{
                      type: 'uri',
                      label: 'Pleca bet',
                      uri: 'https://seantestgoggle.000webhostapp.com/indexx.html'
                  }]
              },{
                  thumbnailImageUrl: 'https://lh3.googleusercontent.com/-NuhP4B5vcnM/AAAAAAAAAAI/AAAAAAAAAA4/XzggSXEg82c/s0-c-k-no-ns/photo.jpg',
                  title: 'Oscar dos Santos Emboaba Júnior',
                  text: 'To Score',
                  actions: [{
                      type: 'uri',
                      label: 'Pleca bet',
                      uri: 'https://seantestgoggle.000webhostapp.com/indexx.html'
                  }]
              }]
          }
      }).then(function (data) {
        console.log(data);
          // success
      }).catch(function (error) {
          // error
      });
		}
    
    
    
    
    
    
    
		if(event.message.text=="NBA" || event.message.text=="nba" || event.message.text=="CLEVELAND" || event.message.text=="WASHINGTON" || event.message.text=="DALLAS"){
        event.reply({
          type: 'template',
          altText: 'this is a carousel template',
          template: {
              type: 'carousel',
              columns: [{
                  thumbnailImageUrl: 'https://cdn.pcwallart.com/images/cleveland-cavaliers-wallpaper-1.jpg',
                  title: 'Cleveland Cavaliers',
                  text: 'Place bet now!',
                  actions: [{
                      type: 'uri',
                      label: 'View Outright1 Odds',
                      uri: 'http://example.com/page/111'
                  }]
              }, {
                  thumbnailImageUrl: 'https://cdn.pcwallart.com/images/clippers-wallpaper-3.jpg',
                  title: 'LA Clippers',
                  text: 'Place bet now!',
                  actions: [{
                      type: 'uri',
                      label: 'View Outright Odds',
                      uri: 'http://example.com/page/222'
                  }]
              }, {
                  thumbnailImageUrl: 'https://cdn.pcwallart.com/images/golden-state-warriors-wallpaper-2.jpg',
                  title: 'Golden State Warriors',
                  text: 'Place bet now!',
                  actions: [{
                      type: 'uri',
                      label: 'View Outright Odds',
                      uri: 'http://example.com/page/222'
                  }]
              },{
                  thumbnailImageUrl: 'https://cdn.pcwallart.com/images/utah-jazz-wallpaper-1.jpg',
                  title: 'UTAH JAZZ',
                  text: 'Place bet now!',
                  actions: [{
                      type: 'uri',
                      label: 'View Outright Odds',
                      uri: 'http://example.com/page/222'
                  }]
              }]
          }
      }).then(function (data) {
        console.log(data);
          // success
      }).catch(function (error) {
          // error
      });
		}
	}

	
	
	
	
	
});

bot.listen('/callback', port);

// 開啟伺服器








function receiver(req, res) {
	
    var data = req.body;

	
    if (req.get("x-line-signature")) {
        // ChannelSignature 正確，處理訊息
		console.log(data.events);
        data.events.forEach(function (result) {
            var type = result.type;
            if (type == "message") {
				
                sendTextMessage(result.content.from, "傳送您的位dddd置來獲得天氣訊息");
            }
            else if (type == "sticker") {
                // 傳送一張隨機貼圖
                sendSticker(result.content.from, 4, getRandom(260, 289));
            }

        });
        res.sendStatus(200);
    }
    else
        res.sendStatus(403); //ChannelSignature錯誤，回傳403

}


function sendWeather(recipientId, lat, lng) {
    // 查詢天氣，設定語言為繁體中文，溫度單位為攝氏溫度
    request({
        uri: 'http://api.openweathermap.org/data/2.5/weather',
        qs: {
            appid: weather_key,
            lat: lat,
            lon: lng,
            lang: "zh_tw",
            units: "metric"
        },
        method: 'GET',
    },

        function (error, response, body) {
            //Check for error
            if (error) {
                return console.log('Error:', error);
            }

            //Check for right status code
            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode, response.statusMessage);
            }
            var data = JSON.parse(body);
            // 傳送 城市名稱 天氣狀況 溫度
            sendTextMessage(recipientId, data.name + " " + data.weather[0].description + " 溫度:" + data.main.temp)
            // 傳送和天氣有關的貼圖
            var icon = data.weather[0].icon[0] + data.weather[0].icon[1];
            if (icon == "01" || icon == "02") //晴天
                sendSticker(recipientId, 4, 263);
            else if (icon == "03" || icon == "04") //多雲
                sendSticker(recipientId, 4, 264);
            else //雨天
                sendSticker(recipientId, 4, 266);

        }


    );
}



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sendSticker(recipientId, s_pack, s_id) {
    var messageData = {
        to: [recipientId],
        toChannel: 1383378250,
        eventType: "138311608800106203",
        content: {
            contentType: 8,
            toType: 1,
            contentMetadata: {
                STKID: s_id + '',
                STKPKGID: s_pack + ''
            }
        }
    };

    toLine(messageData);
}
function sendTextMessage(recipientId, messageText) {
    var messageData = {
        to: [recipientId],
        toChannel: 1383378250,
        eventType: "138311608800106203",
        content: {
            contentType: 1,
            toType: 1,
            text: messageText
        }
    };
    toLine(messageData);
}
function toLine(messageData) {
    request({
        uri: 'https://trialbot-api.line.me/v1/events',
        headers: {
            "Content-type": "application/json; charser=UTF-8",
            "X-Line-ChannelID": id,
            "X-Line-ChannelSecret": secret,
            "X-Line-Trusted-User-With-ACL": mid
        },
        method: 'POST',
        json: messageData
    },
        function (error, response, body) {
            //Check for error
            if (error) {
                return console.log('Error:', error);
            }

            //Check for right status code
            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode, response.statusMessage);
            }

            //All is good. Print the body
            console.log(body); // Show the HTML for the Modulus homepage.

        }


    );
}
