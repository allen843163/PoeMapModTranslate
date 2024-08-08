var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => {
        chrome.tabs.sendMessage(tabId, messageObj);
    };
    var doTranslate = (messageObj) => {
        var value = String(document.getElementById('input-mods').value);

        const regex1 = /"!(.+?)"/; //不要的詞
        var regex1Result = ""; //regex1結果

        const regex2 = /"iz(.+?)%"/; //怪物群大小
        var regex2Result = ""; //regex2結果

        const regex3 = /"m q(.+?)%"/; //物品數量
        var regex3Result = ""; //regex3結果

        var regex4Result = ""; //剩餘、需要的詞綴
        // console.log("match2 = " + value.toString().match(regex1)[1]);
        if(regex1.test(value.toString())) {
            var regex1Result = '"!'
            for (let key1 of value.toString().match(regex1)[1].split("|")) {
                console.log(`${key1} in map2`);
                regex1Result = regex1Result + myMap.get(key1) + "|"
            };

            regex1Result = regex1Result.substring(0, regex1Result.length-1)
            regex1Result = regex1Result + '"';

            value = value.replace(value.toString().match(regex1)[0], '');

            console.log("resultStr1 = " + regex1Result);
            console.log("resultStr1 = " + value);
        }
        if(regex2.test(value.toString())) {
            var regex2Result = '"群大小'
            regex2Result = regex2Result + value.toString().match(regex2)[1] + '%"'
            
            value = value.replace(value.toString().match(regex2)[0], '');

            console.log("resultStr2 = " + regex2Result);
            console.log("resultStr2 = " + value);
        }
        if(regex3.test(value.toString())) {
            var regex3Result = '"品數量'
            regex3Result = regex3Result + value.toString().match(regex3)[1] + '%"'
            
            value = value.replace(value.toString().match(regex3)[0], '');

            myMap.values.
            console.log("resultStr3 = " + regex3Result);
            console.log("resultStr3 = " + value);
        }

        document.getElementById('output-mods').innerHTML = regex1Result + " " + regex2Result + " " + regex3Result
    };
    document.getElementById('rotate').addEventListener('click', 
        () => doTranslate({ action: 'ROTATE' })
    );
    document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }))
  }

  chrome.tabs.getSelected(null, getSelectedTab);

  const myMap = new Map([
    ["tal d", "射.+元"],
    ["f ph", "射.+物"],
    ["non", "詛咒光"],
    ["o al", "最大抗"],
    ["gen", "不能回"],
    ["s rec", "玩家.+少生"],
    ["eec", "被偷取"],
    ["tip", "怪物暴"],
    ["old$", "視為冰"],
    ["fire$", "視為火"],
    ["as l", "視為閃"],
    ["hered", "額外混"],
    ["oj", "額外投"],
    ["r at", "怪物移"],
    ["d at", "目增.+傷"],
    ["e \\d+% increased ar", "物.+範圍"],
    ["d li", "目增.+生"],
    ["son o", "時中毒"],
    ["on,", "免中毒"],
    ["tim", "連鎖"],
    ["r damage$", "加.+怪物傷"],
    ["rev", "加.+命中"],
    ["rses", "咒.+少"],
    ["h el", "元素要害"],
    ["eble$", "衰弱"],
    ["h tem", "時空鎖鏈"],
    ["h vu", "脆弱"],
    ["f bur", "燃燒地"],
    ["hil", "冰緩地"],
    ["nsecrate", "奉獻地"],
    ["ked", "感電地"],
    ["s of d", "腐化地"],
    ["ur$", "更少護"],
    ["o su", "物.+壓"],
    ["kes", "承受的暴"],
    ["m li", "最大能量"],
    ["ask", "藥劑充"],
    ["uct", "傷害減免"],
    ["re he", "受到詛"],
    ["ail", "元素異"],
    ["ot i", "曝曬"],
    ["tun", "被暈眩"],
    ["r li", "怪物生"],
    ["r el", "混沌抗"],
    ["lw", "成點燃"],
    ["te,", "率點燃"],
    ["' at", "成穿刺"],
    ["fs", "效果加"],
    ["coo", "更少冷"],
    ["two", "兩個傳"],
    ["poss", "被附身"],
    ["elo", "被嘲諷"],
    ["s ac", "少命中"],
    ["zy c", "得.+狂"],
    ["a pow", "得.+暴"],
    ["an en", "得.+耐"],
    ["er,", "偷取暴"],
    ["ss are", "少的範圍"],
    ["s bli,", "致盲"],
    ["hind,", "成阻礙"],
    ["aim", "成癱瘓"],
    ["tot", "許多圖騰"],
    ["ety", "怪物種類"],
    ["bom", "創造生物"],
    ["nim", "許多動物"],
    ["cul", "許多奇塔"],
    ["emons", "許多惡魔"],
    ["osts", "許多鬼魂"],
    ["oa", "許多羊"],
    ["hum", "許多人"],
    ["unari", "許多月影"],
    ["itc", "許多海巫"],
    ["eto", "許多骷"],
    ["laris", "許多日耀"],
    ["by un", "許多不死"],
    ["rang", "許多遠程"],
    ["nu", "稀.+數"],
    ["d mag", "魔法怪"],
  ]);