var filenameSave = ""

function readSingleFile(e) {
    try {
        var file = e.target.files[0];
        filenameSave = e.target.files[0].name
        if (!file) {
            return;
        }
        var filenameExtenstion = filenameSave.split(".")[filenameSave.split(".").length-1].toLowerCase()
        if (filenameExtenstion != "sav") {
            throw "notSav." + filenameExtenstion;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            displayContents(contents);
        };
        reader.readAsText(file);
    } catch (e) {
        if (e.split(".")[0] == "notSav") {
        alert("[Error] You didn't provide a .sav file\nBut instead a ." + e.split(".")[1] + " file")
        console.log("[Error] You didn't provide a .sav file\nBut instead a ." + e.split(".")[1] + " file")
        } else {
        alert("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
        console.log("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
        }
    }
}

var savebefore = []

function displayContents(contents) {
    try {
        var element = document.getElementById('file-content');
        element.textContent = JSON.stringify(JSON.parse(contents), null, "\t");
        var obj = JSON.parse(contents)
        savebefore.push(obj)

        document.getElementById('isPlayer1Mugman').value = obj["isPlayer1Mugman"].toString();
        document.getElementById('hasMadeFirstPurchase').value = obj["hasMadeFirstPurchase"].toString();
        document.getElementById('hasBeatenAnyBossOnEasy').value = obj["hasBeatenAnyBossOnEasy"].toString();
        document.getElementById('hasUnlockedFirstSuper').value = obj["hasUnlockedFirstSuper"].toString();
        document.getElementById('shouldShowShopkeepTooltip').value = obj["shouldShowShopkeepTooltip"].toString();
        document.getElementById('shouldShowTurtleTooltip').value = obj["shouldShowTurtleTooltip"].toString();
        document.getElementById('shouldShowCanteenTooltip').value = obj["shouldShowCanteenTooltip"].toString();
        document.getElementById('shouldShowForkTooltip').value = obj["shouldShowForkTooltip"].toString();
        document.getElementById('shouldShowKineDiceTooltip').value = obj["shouldShowKineDiceTooltip"].toString();
        document.getElementById('shouldShowMausoleumTooltip').value = obj["shouldShowMausoleumTooltip"].toString();
        document.getElementById('_isHardModeAvailable').value = obj["_isHardModeAvailable"].toString();
        document.getElementById('_isTutorialCompleted').value = obj["_isTutorialCompleted"].toString();
        document.getElementById('_isFlyingTutorialCompleted').value = obj["_isFlyingTutorialCompleted"].toString();
        document.getElementById('unlockedBlackAndWhite').value = obj["unlockedBlackAndWhite"].toString();
        document.getElementById('unlocked2Strip').value = obj["unlocked2Strip"].toString();
        document.getElementById('vintageAudioEnabled').value = obj["vintageAudioEnabled"].toString();
        document.getElementById('pianoAudioEnabled').value = obj["pianoAudioEnabled"].toString();
        document.getElementById('filter').value = obj["filter"].toString();

        obj["coinManager"]["LevelsAndCoins"].forEach((item) => {

            if (item["Coin5Collected"] == true) {
                var vall = "5"
            } else if (item["Coin4Collected"] == true) {
                var vall = "4"
            } else if (item["Coin3Collected"] == true) {
                var vall = "3"
            } else if (item["Coin2Collected"] == true) {
                var vall = "2"
            } else if (item["Coin1Collected"] == true) {
                var vall = "1"
            } else {
                var vall = "0"
            }

            if (item["level"] == 1464969490) {
                document.getElementById('1464969490').value = vall;
                document.getElementById('1-1').value = vall;
            } else if (item["level"] == 1464969491) {
                document.getElementById('1464969491').value = vall;
                document.getElementById('1-2').value = vall;
            } else if (item["level"] == 1499704951) {
                document.getElementById('1499704951').value = vall;
                document.getElementById('2-1').value = vall;
            } else if (item["level"] == 1496818712) {
                document.getElementById('1496818712').value = vall;
                document.getElementById('2-2').value = vall;
            } else if (item["level"] == 1464969492) {
                document.getElementById('1464969492').value = vall;
                document.getElementById('3-1').value = vall;
            } else if (item["level"] == 1464969493) {
                document.getElementById('1464969493').value = vall;
                document.getElementById('3-2').value = vall;
            } else if (item["level"] == 0) {
                if (item["Coin1Collected"]) {
                    document.getElementById("juggler").checked = true;
                }
                if (item["Coin2Collected"]) {
                    document.getElementById("ggirl").checked = true;
                }
                if (item["Coin3Collected"]) {
                    document.getElementById("hidworld").checked = true;
                }
            }
        })

        document.getElementById('primaryWeapon1').value = obj["loadouts"]["playerOne"]["primaryWeapon"].toString();
        document.getElementById('secondaryWeapon1').value = obj["loadouts"]["playerOne"]["secondaryWeapon"].toString();
        document.getElementById('super1').value = obj["loadouts"]["playerOne"]["super"].toString();
        document.getElementById('charm1').value = obj["loadouts"]["playerOne"]["charm"].toString();
        document.getElementById('deaths1').value = obj["statictics"]["playerOne"]["numDeaths"].toString();
        document.getElementById('parries1').value = obj["statictics"]["playerOne"]["numParriesInRow"].toString();
        document.getElementById('money1').value = obj["inventories"]["playerOne"]["money"].toString();

        obj["inventories"]["playerOne"]["_weapons"].forEach((item) => {

            if (item == document.getElementById('1weapon1').value) {
                document.getElementById("1weapon1").checked = true;
            } else if (item == document.getElementById('1weapon2').value) {
                document.getElementById("1weapon2").checked = true;
            } else if (item == document.getElementById('1weapon3').value) {
                document.getElementById("1weapon3").checked = true;
            } else if (item == document.getElementById('1weapon4').value) {
                document.getElementById("1weapon4").checked = true;
            } else if (item == document.getElementById('1weapon5').value) {
                document.getElementById("1weapon5").checked = true;
            } else if (item == document.getElementById('1weapon6').value) {
                document.getElementById("1weapon6").checked = true;
            } else if (item == document.getElementById('1weapon7').value) {
                document.getElementById("1weapon7").checked = true;
            }
        });

        obj["inventories"]["playerOne"]["_supers"].forEach((item) => {

            if (item == document.getElementById('1super1').value) {
                document.getElementById("1super1").checked = true;
            } else if (item == document.getElementById('1super2').value) {
                document.getElementById("1super2").checked = true;
            } else if (item == document.getElementById('1super3').value) {
                document.getElementById("1super3").checked = true;
            }

        });

        obj["inventories"]["playerOne"]["_charms"].forEach((item) => {

            if (item == document.getElementById('1charm1').value) {
                document.getElementById("1charm1").checked = true;
            } else if (item == document.getElementById('1charm2').value) {
                document.getElementById("1charm2").checked = true;
            } else if (item == document.getElementById('1charm3').value) {
                document.getElementById("1charm3").checked = true;
            } else if (item == document.getElementById('1charm4').value) {
                document.getElementById("1charm4").checked = true;
            } else if (item == document.getElementById('1charm5').value) {
                document.getElementById("1charm5").checked = true;
            } else if (item == document.getElementById('1charm6').value) {
                document.getElementById("1charm6").checked = true;
            }
        });

        document.getElementById('primaryWeapon2').value = obj["loadouts"]["playerTwo"]["primaryWeapon"].toString();
        document.getElementById('secondaryWeapon2').value = obj["loadouts"]["playerTwo"]["secondaryWeapon"].toString();
        document.getElementById('super2').value = obj["loadouts"]["playerTwo"]["super"].toString();
        document.getElementById('charm2').value = obj["loadouts"]["playerTwo"]["charm"].toString();
        document.getElementById('deaths2').value = obj["statictics"]["playerTwo"]["numDeaths"].toString();
        document.getElementById('parries2').value = obj["statictics"]["playerTwo"]["numParriesInRow"].toString();
        document.getElementById('money2').value = obj["inventories"]["playerTwo"]["money"].toString();

        obj["inventories"]["playerTwo"]["_weapons"].forEach((item) => {

            if (item == document.getElementById('2weapon1').value) {
                document.getElementById("2weapon1").checked = true;
            } else if (item == document.getElementById('2weapon2').value) {
                document.getElementById("2weapon2").checked = true;
            } else if (item == document.getElementById('2weapon3').value) {
                document.getElementById("2weapon3").checked = true;
            } else if (item == document.getElementById('2weapon4').value) {
                document.getElementById("2weapon4").checked = true;
            } else if (item == document.getElementById('2weapon5').value) {
                document.getElementById("2weapon5").checked = true;
            } else if (item == document.getElementById('2weapon6').value) {
                document.getElementById("2weapon6").checked = true;
            } else if (item == document.getElementById('2weapon7').value) {
                document.getElementById("2weapon7").checked = true;
            }
        });

        obj["inventories"]["playerTwo"]["_supers"].forEach((item) => {

            if (item == document.getElementById('2super1').value) {
                document.getElementById("2super1").checked = true;
            } else if (item == document.getElementById('2super2').value) {
                document.getElementById("2super2").checked = true;
            } else if (item == document.getElementById('2super3').value) {
                document.getElementById("2super3").checked = true;
            }

        });

        obj["inventories"]["playerTwo"]["_charms"].forEach((item) => {

            if (item == document.getElementById('2charm1').value) {
                document.getElementById("2charm1").checked = true;
            } else if (item == document.getElementById('2charm2').value) {
                document.getElementById("2charm2").checked = true;
            } else if (item == document.getElementById('2charm3').value) {
                document.getElementById("2charm3").checked = true;
            } else if (item == document.getElementById('2charm4').value) {
                document.getElementById("2charm4").checked = true;
            } else if (item == document.getElementById('2charm5').value) {
                document.getElementById("2charm5").checked = true;
            } else if (item == document.getElementById('2charm6').value) {
                document.getElementById("2charm6").checked = true;
            }
        });
        const levels = [0, 2, 5, 6, 7, 1428495827, 1429976377, 1430652919, 1432722919, 1446558823, 1449745424, 1450266910, 1450863107, 1451300935, 1452935394, 1456125457, 1456740288, 1458062114, 1458336090, 1458551456, 1458719430, 1459105708, 1459928905, 1460200177, 1463479514, 1464322003, 1465296077, 1466688317, 1468483834, 1481199742, 1484633053, 1495090481, 1504847973]
        obj["levelDataManager"]["levelObjects"].forEach((item) => {

            if (levels.includes(item["levelID"])) {
                if (item["completed"]) {
                    document.getElementById(`${item["levelID"]}completed`).checked = true;
                }
                if (item["played"]) {
                    document.getElementById(`${item["levelID"]}played`).checked = true;
                }
                document.getElementById(`${item["levelID"]}grade`).value = item["grade"].toString();
                document.getElementById(`${item["levelID"]}diff`).value = item["difficultyBeaten"].toString();
                if (item["bestTime"] == "3.4028234663852886e+38") {
                    document.getElementById(`${item["levelID"]}time`).value = "0"
                } else {
                    document.getElementById(`${item["levelID"]}time`).value = item["bestTime"].toString();
                }
            }
        })
        document.getElementById("savebtn").disabled = false;
    } catch (e) {
        alert("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
        console.log("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
    }
}

function download() {
    try {
        savedat = savebefore[0]
        savedat["isPlayer1Mugman"] = JSON.parse(document.getElementById('isPlayer1Mugman').value)
        savedat["hasMadeFirstPurchase"] = JSON.parse(document.getElementById('hasMadeFirstPurchase').value)
        savedat["hasBeatenAnyBossOnEasy"] = JSON.parse(document.getElementById('hasBeatenAnyBossOnEasy').value)
        savedat["hasUnlockedFirstSuper"] = JSON.parse(document.getElementById('hasUnlockedFirstSuper').value)
        savedat["shouldShowShopkeepTooltip"] = JSON.parse(document.getElementById('shouldShowShopkeepTooltip').value)
        savedat["shouldShowTurtleTooltip"] = JSON.parse(document.getElementById('shouldShowTurtleTooltip').value)
        savedat["shouldShowCanteenTooltip"] = JSON.parse(document.getElementById('shouldShowCanteenTooltip').value)
        savedat["shouldShowForkTooltip"] = JSON.parse(document.getElementById('shouldShowForkTooltip').value)
        savedat["shouldShowKineDiceTooltip"] = JSON.parse(document.getElementById('shouldShowKineDiceTooltip').value)
        savedat["shouldShowMausoleumTooltip"] = JSON.parse(document.getElementById('shouldShowMausoleumTooltip').value)
        savedat["_isHardModeAvailable"] = JSON.parse(document.getElementById('_isHardModeAvailable').value)
        savedat["_isTutorialCompleted"] = JSON.parse(document.getElementById('_isTutorialCompleted').value)
        savedat["_isFlyingTutorialCompleted"] = JSON.parse(document.getElementById('_isFlyingTutorialCompleted').value)
        savedat["unlockedBlackAndWhite"] = JSON.parse(document.getElementById('unlockedBlackAndWhite').value)
        savedat["unlocked2Strip"] = JSON.parse(document.getElementById('unlocked2Strip').value)
        savedat["vintageAudioEnabled"] = JSON.parse(document.getElementById('vintageAudioEnabled').value)
        savedat["pianoAudioEnabled"] = JSON.parse(document.getElementById('pianoAudioEnabled').value)
        savedat["filter"] = parseInt(document.getElementById('filter').value)

        const rngs = [1464969490, 1464969491, 1499704951, 1496818712, 1464969492, 1464969493]

        savedat["coinManager"]["LevelsAndCoins"].forEach(function(item) {

            if (rngs.includes(item["level"])) {

                if (document.getElementById(`${item["level"]}`).value == "5") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = true
                    item["Coin5Collected"] = true

                } else if (document.getElementById(`${item["level"]}`).value == "4") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = true
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "3") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "2") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "1") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = false
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "0") {

                    item["Coin1Collected"] = false
                    item["Coin2Collected"] = false
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                }



            } else if (item["level"] == 0) {

                item["Coin1Collected"] = document.getElementById("juggler").checked
                item["Coin2Collected"] = document.getElementById("ggirl").checked
                item["Coin3Collected"] = document.getElementById("hidworld").checked

            }
        })

        savedat["loadouts"]["playerOne"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["super"] = parseInt(document.getElementById('super1').value)
        savedat["loadouts"]["playerOne"]["charm"] = parseInt(document.getElementById('charm1').value)
        savedat["statictics"]["playerOne"]["numDeaths"] = parseInt(document.getElementById('deaths1').value)
        savedat["statictics"]["playerOne"]["numParriesInRow"] = parseInt(document.getElementById('parries1').value)
        savedat["inventories"]["playerOne"]["money"] = parseInt(document.getElementById('money1').value)

        savedat["loadouts"]["playerTwo"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["super"] = parseInt(document.getElementById('super2').value)
        savedat["loadouts"]["playerTwo"]["charm"] = parseInt(document.getElementById('charm2').value)
        savedat["statictics"]["playerTwo"]["numDeaths"] = parseInt(document.getElementById('deaths2').value)
        savedat["statictics"]["playerTwo"]["numParriesInRow"] = parseInt(document.getElementById('parries2').value)
        savedat["inventories"]["playerTwo"]["money"] = parseInt(document.getElementById('money2').value)

        var weaponz1 = [1457006169]
        var superz1 = []
        var charmz1 = []
        if (document.getElementById("1weapon1").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon1").value))
        }
        if (document.getElementById("1weapon2").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon2").value))
        }
        if (document.getElementById("1weapon3").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon3").value))
        }
        if (document.getElementById("1weapon4").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon4").value))
        }
        if (document.getElementById("1weapon5").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon5").value))
        }
        if (document.getElementById("1weapon6").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon6").value))
        }
        if (document.getElementById("1weapon7").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon7").value))
        }

        if (document.getElementById("1super1").checked) {
            superz1.push(parseInt(document.getElementById("1super1").value))
        }
        if (document.getElementById("1super2").checked) {
            superz1.push(parseInt(document.getElementById("1super2").value))
        }
        if (document.getElementById("1super3").checked) {
            superz1.push(parseInt(document.getElementById("1super3").value))
        }

        if (document.getElementById("1charm1").checked) {
            charmz1.push(parseInt(document.getElementById("1charm1").value))
        }
        if (document.getElementById("1charm2").checked) {
            charmz1.push(parseInt(document.getElementById("1charm2").value))
        }
        if (document.getElementById("1charm3").checked) {
            charmz1.push(parseInt(document.getElementById("1charm3").value))
        }
        if (document.getElementById("1charm4").checked) {
            charmz1.push(parseInt(document.getElementById("1charm4").value))
        }
        if (document.getElementById("1charm5").checked) {
            charmz1.push(parseInt(document.getElementById("1charm5").value))
        }
        if (document.getElementById("1charm6").checked) {
            charmz1.push(parseInt(document.getElementById("1charm6").value))
        }

        var weaponz2 = [1457006169]
        var superz2 = []
        var charmz2 = []
        if (document.getElementById("2weapon1").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon1").value))
        }
        if (document.getElementById("2weapon2").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon2").value))
        }
        if (document.getElementById("2weapon3").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon3").value))
        }
        if (document.getElementById("2weapon4").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon4").value))
        }
        if (document.getElementById("2weapon5").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon5").value))
        }
        if (document.getElementById("2weapon6").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon6").value))
        }
        if (document.getElementById("2weapon7").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon7").value))
        }

        if (document.getElementById("2super1").checked) {
            superz2.push(parseInt(document.getElementById("2super1").value))
        }
        if (document.getElementById("2super2").checked) {
            superz2.push(parseInt(document.getElementById("2super2").value))
        }
        if (document.getElementById("2super3").checked) {
            superz2.push(parseInt(document.getElementById("2super3").value))
        }

        if (document.getElementById("2charm1").checked) {
            charmz2.push(parseInt(document.getElementById("2charm1").value))
        }
        if (document.getElementById("2charm2").checked) {
            charmz2.push(parseInt(document.getElementById("2charm2").value))
        }
        if (document.getElementById("2charm3").checked) {
            charmz2.push(parseInt(document.getElementById("2charm3").value))
        }
        if (document.getElementById("2charm4").checked) {
            charmz2.push(parseInt(document.getElementById("2charm4").value))
        }
        if (document.getElementById("2charm5").checked) {
            charmz2.push(parseInt(document.getElementById("2charm5").value))
        }
        if (document.getElementById("2charm6").checked) {
            charmz2.push(parseInt(document.getElementById("2charm6").value))
        }

        savedat["inventories"]["playerOne"]["_weapons"] = weaponz1
        savedat["inventories"]["playerOne"]["_supers"] = superz1
        savedat["inventories"]["playerOne"]["_charms"] = charmz1

        savedat["inventories"]["playerTwo"]["_weapons"] = weaponz2
        savedat["inventories"]["playerTwo"]["_supers"] = superz2
        savedat["inventories"]["playerTwo"]["_charms"] = charmz2

        const levelss = [0, 2, 5, 6, 7, 1428495827, 1429976377, 1430652919, 1432722919, 1446558823, 1449745424, 1450266910, 1450863107, 1451300935, 1452935394, 1456125457, 1456740288, 1458062114, 1458336090, 1458551456, 1458719430, 1459105708, 1459928905, 1460200177, 1463479514, 1464322003, 1465296077, 1466688317, 1468483834, 1481199742, 1484633053, 1495090481, 1504847973]
        savedat["levelDataManager"]["levelObjects"].forEach(function(item) {

            if (levelss.includes(item["levelID"])) {
                if (parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, ".")) == 0) {

                    item["bestTime"] = 3.4028234663852886e+38

                } else {
                    item["bestTime"] = parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, "."))
                }
                item["levelID"] = item["levelID"];
                item["completed"] = document.getElementById(`${item["levelID"]}completed`).checked;
                item["played"] = document.getElementById(`${item["levelID"]}played`).checked;
                item["grade"] = parseInt(document.getElementById(`${item["levelID"]}grade`).value);
                item["difficultyBeaten"] = parseInt(document.getElementById(`${item["levelID"]}diff`).value);
                item["bgmPlayListCurrent"] = item["bgmPlayListCurrent"];

            }
        })

        var saveafter = savedat
        var data = saveafter
        var file = new Blob([JSON.stringify(data)], {
            type: "json"
        });
        var filename = filenameSave
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    } catch (e) {
        alert("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
        console.log("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
    }
}

function updateJson() {
    try {
        savedat = savebefore[0]
        savedat["isPlayer1Mugman"] = JSON.parse(document.getElementById('isPlayer1Mugman').value)
        savedat["hasMadeFirstPurchase"] = JSON.parse(document.getElementById('hasMadeFirstPurchase').value)
        savedat["hasBeatenAnyBossOnEasy"] = JSON.parse(document.getElementById('hasBeatenAnyBossOnEasy').value)
        savedat["hasUnlockedFirstSuper"] = JSON.parse(document.getElementById('hasUnlockedFirstSuper').value)
        savedat["shouldShowShopkeepTooltip"] = JSON.parse(document.getElementById('shouldShowShopkeepTooltip').value)
        savedat["shouldShowTurtleTooltip"] = JSON.parse(document.getElementById('shouldShowTurtleTooltip').value)
        savedat["shouldShowCanteenTooltip"] = JSON.parse(document.getElementById('shouldShowCanteenTooltip').value)
        savedat["shouldShowForkTooltip"] = JSON.parse(document.getElementById('shouldShowForkTooltip').value)
        savedat["shouldShowKineDiceTooltip"] = JSON.parse(document.getElementById('shouldShowKineDiceTooltip').value)
        savedat["shouldShowMausoleumTooltip"] = JSON.parse(document.getElementById('shouldShowMausoleumTooltip').value)
        savedat["_isHardModeAvailable"] = JSON.parse(document.getElementById('_isHardModeAvailable').value)
        savedat["_isTutorialCompleted"] = JSON.parse(document.getElementById('_isTutorialCompleted').value)
        savedat["_isFlyingTutorialCompleted"] = JSON.parse(document.getElementById('_isFlyingTutorialCompleted').value)
        savedat["unlockedBlackAndWhite"] = JSON.parse(document.getElementById('unlockedBlackAndWhite').value)
        savedat["unlocked2Strip"] = JSON.parse(document.getElementById('unlocked2Strip').value)
        savedat["vintageAudioEnabled"] = JSON.parse(document.getElementById('vintageAudioEnabled').value)
        savedat["pianoAudioEnabled"] = JSON.parse(document.getElementById('pianoAudioEnabled').value)
        savedat["filter"] = parseInt(document.getElementById('filter').value)

        const rngs = [1464969490, 1464969491, 1499704951, 1496818712, 1464969492, 1464969493]

        savedat["coinManager"]["LevelsAndCoins"].forEach(function(item) {

            if (rngs.includes(item["level"])) {

                if (document.getElementById(`${item["level"]}`).value == "5") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = true
                    item["Coin5Collected"] = true

                } else if (document.getElementById(`${item["level"]}`).value == "4") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = true
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "3") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = true
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "2") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = true
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "1") {


                    item["Coin1Collected"] = true
                    item["Coin2Collected"] = false
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                } else if (document.getElementById(`${item["level"]}`).value == "0") {

                    item["Coin1Collected"] = false
                    item["Coin2Collected"] = false
                    item["Coin3Collected"] = false
                    item["Coin4Collected"] = false
                    item["Coin5Collected"] = false

                }



            } else if (item["level"] == 0) {

                item["Coin1Collected"] = document.getElementById("juggler").checked
                item["Coin2Collected"] = document.getElementById("ggirl").checked
                item["Coin3Collected"] = document.getElementById("hidworld").checked

            }
        })

        savedat["loadouts"]["playerOne"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon1').value)
        savedat["loadouts"]["playerOne"]["super"] = parseInt(document.getElementById('super1').value)
        savedat["loadouts"]["playerOne"]["charm"] = parseInt(document.getElementById('charm1').value)
        savedat["statictics"]["playerOne"]["numDeaths"] = parseInt(document.getElementById('deaths1').value)
        savedat["statictics"]["playerOne"]["numParriesInRow"] = parseInt(document.getElementById('parries1').value)
        savedat["inventories"]["playerOne"]["money"] = parseInt(document.getElementById('money1').value)

        savedat["loadouts"]["playerTwo"]["primaryWeapon"] = parseInt(document.getElementById('primaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["secondaryWeapon"] = parseInt(document.getElementById('secondaryWeapon2').value)
        savedat["loadouts"]["playerTwo"]["super"] = parseInt(document.getElementById('super2').value)
        savedat["loadouts"]["playerTwo"]["charm"] = parseInt(document.getElementById('charm2').value)
        savedat["statictics"]["playerTwo"]["numDeaths"] = parseInt(document.getElementById('deaths2').value)
        savedat["statictics"]["playerTwo"]["numParriesInRow"] = parseInt(document.getElementById('parries2').value)
        savedat["inventories"]["playerTwo"]["money"] = parseInt(document.getElementById('money2').value)

        var weaponz1 = [1457006169]
        var superz1 = []
        var charmz1 = []
        if (document.getElementById("1weapon1").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon1").value))
        }
        if (document.getElementById("1weapon2").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon2").value))
        }
        if (document.getElementById("1weapon3").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon3").value))
        }
        if (document.getElementById("1weapon4").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon4").value))
        }
        if (document.getElementById("1weapon5").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon5").value))
        }
        if (document.getElementById("1weapon6").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon6").value))
        }
        if (document.getElementById("1weapon7").checked) {
            weaponz1.push(parseInt(document.getElementById("1weapon7").value))
        }

        if (document.getElementById("1super1").checked) {
            superz1.push(parseInt(document.getElementById("1super1").value))
        }
        if (document.getElementById("1super2").checked) {
            superz1.push(parseInt(document.getElementById("1super2").value))
        }
        if (document.getElementById("1super3").checked) {
            superz1.push(parseInt(document.getElementById("1super3").value))
        }

        if (document.getElementById("1charm1").checked) {
            charmz1.push(parseInt(document.getElementById("1charm1").value))
        }
        if (document.getElementById("1charm2").checked) {
            charmz1.push(parseInt(document.getElementById("1charm2").value))
        }
        if (document.getElementById("1charm3").checked) {
            charmz1.push(parseInt(document.getElementById("1charm3").value))
        }
        if (document.getElementById("1charm4").checked) {
            charmz1.push(parseInt(document.getElementById("1charm4").value))
        }
        if (document.getElementById("1charm5").checked) {
            charmz1.push(parseInt(document.getElementById("1charm5").value))
        }
        if (document.getElementById("1charm6").checked) {
            charmz1.push(parseInt(document.getElementById("1charm6").value))
        }

        var weaponz2 = [1457006169]
        var superz2 = []
        var charmz2 = []
        if (document.getElementById("2weapon1").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon1").value))
        }
        if (document.getElementById("2weapon2").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon2").value))
        }
        if (document.getElementById("2weapon3").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon3").value))
        }
        if (document.getElementById("2weapon4").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon4").value))
        }
        if (document.getElementById("2weapon5").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon5").value))
        }
        if (document.getElementById("2weapon6").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon6").value))
        }
        if (document.getElementById("2weapon7").checked) {
            weaponz2.push(parseInt(document.getElementById("2weapon7").value))
        }

        if (document.getElementById("2super1").checked) {
            superz2.push(parseInt(document.getElementById("2super1").value))
        }
        if (document.getElementById("2super2").checked) {
            superz2.push(parseInt(document.getElementById("2super2").value))
        }
        if (document.getElementById("2super3").checked) {
            superz2.push(parseInt(document.getElementById("2super3").value))
        }

        if (document.getElementById("2charm1").checked) {
            charmz2.push(parseInt(document.getElementById("2charm1").value))
        }
        if (document.getElementById("2charm2").checked) {
            charmz2.push(parseInt(document.getElementById("2charm2").value))
        }
        if (document.getElementById("2charm3").checked) {
            charmz2.push(parseInt(document.getElementById("2charm3").value))
        }
        if (document.getElementById("2charm4").checked) {
            charmz2.push(parseInt(document.getElementById("2charm4").value))
        }
        if (document.getElementById("2charm5").checked) {
            charmz2.push(parseInt(document.getElementById("2charm5").value))
        }
        if (document.getElementById("2charm6").checked) {
            charmz2.push(parseInt(document.getElementById("2charm6").value))
        }

        savedat["inventories"]["playerOne"]["_weapons"] = weaponz1
        savedat["inventories"]["playerOne"]["_supers"] = superz1
        savedat["inventories"]["playerOne"]["_charms"] = charmz1

        savedat["inventories"]["playerTwo"]["_weapons"] = weaponz2
        savedat["inventories"]["playerTwo"]["_supers"] = superz2
        savedat["inventories"]["playerTwo"]["_charms"] = charmz2

        const levelss = [0, 2, 5, 6, 7, 1428495827, 1429976377, 1430652919, 1432722919, 1446558823, 1449745424, 1450266910, 1450863107, 1451300935, 1452935394, 1456125457, 1456740288, 1458062114, 1458336090, 1458551456, 1458719430, 1459105708, 1459928905, 1460200177, 1463479514, 1464322003, 1465296077, 1466688317, 1468483834, 1481199742, 1484633053, 1495090481, 1504847973]
        savedat["levelDataManager"]["levelObjects"].forEach(function(item) {

            if (levelss.includes(item["levelID"])) {
                if (parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, ".")) == 0) {

                    item["bestTime"] = 3.4028234663852886e+38

                } else {
                    item["bestTime"] = parseFloat((document.getElementById(`${item["levelID"]}time`).value).replace(/,/g, "."))
                }
                item["levelID"] = item["levelID"];
                item["completed"] = document.getElementById(`${item["levelID"]}completed`).checked;
                item["played"] = document.getElementById(`${item["levelID"]}played`).checked;
                item["grade"] = parseInt(document.getElementById(`${item["levelID"]}grade`).value);
                item["difficultyBeaten"] = parseInt(document.getElementById(`${item["levelID"]}diff`).value);
                item["bgmPlayListCurrent"] = item["bgmPlayListCurrent"];

            }
        })

        var saveafter = savedat
        var element = document.getElementById('file-content');
        element.textContent = JSON.stringify(saveafter, null, "\t");
    } catch (e) {
        alert("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
        console.log("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
    }
}
try {
    document.getElementById('file-input')
        .addEventListener('change', readSingleFile, false);
} catch (e) {
    alert("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
    console.log("[Error] " + e + "\n Open an issue or Discord:『Geop』#4066")
}
