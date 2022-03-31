function botPunch() {
    var damage = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    document.getElementById("botlog").innerText = `Bot punched and deal ${damage}`;
    var newHp = Number(document.getElementById("hp").value);
    var Hpdigest = newHp - damage;
    document.getElementById("hp").value = Hpdigest;
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    function check() {
        var botHP = document.getElementById("bothp").value;
        var HP = document.getElementById("hp").value;
        if(botHP <= 0) {
            document.getElementById("hp").value = 50;
            document.getElementById("bothp").value = 50;
            document.getElementById("log").innerText = "";
            document.getElementById("botlog").innerText = "";
            var newPoint = Number(document.getElementById("points").value);
            var Hpdigest = newPoint + 1;
            document.getElementById("points").value = Hpdigest;
        } else if (HP <= 0) {
            document.getElementById("hp").value = 50;
            document.getElementById("bothp").value = 50;
            document.getElementById("log").innerText = "";
            document.getElementById("botlog").innerText = "";
            var newPoint = Number(document.getElementById("botpoints").value);
            var Hpdigest = newPoint + 1;
            document.getElementById("botpoints").value = Hpdigest;
        }
    }
    setTimeout(check, 1000);
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
}
function botKick() {
    var controller = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    var damage = Math.floor(Math.random() * (15 - 1 + 1) + 1)
    if(controller == 1) {
        document.getElementById("botlog").innerText = `Bot kick and deal ${damage}`;
        var newHp = Number(document.getElementById("hp").value);
        var Hpdigest = newHp - damage;
        document.getElementById("hp").value = Hpdigest;
    } else {
        document.getElementById("botlog").innerText = `Bot fall and deal itself ${damage}`;
        var newHp = Number(document.getElementById("bothp").value);
        var Hpdigest = newHp - damage;
        document.getElementById("bothp").value = Hpdigest;
    }
    var botHP = document.getElementById("bothp").value;
    var HP = document.getElementById("hp").value;
    function check() {
        var botHP = document.getElementById("bothp").value;
        var HP = document.getElementById("hp").value;
        if(botHP <= 0) {
            document.getElementById("hp").value = 50;
            document.getElementById("bothp").value = 50;
            document.getElementById("log").innerText = "";
            document.getElementById("botlog").innerText = "";
            var newPoint = Number(document.getElementById("points").value);
            var Hpdigest = newPoint + 1;
            document.getElementById("points").value = Hpdigest;
        } else if (HP <= 0) {
            document.getElementById("hp").value = 50;
            document.getElementById("bothp").value = 50;
            document.getElementById("log").innerText = "";
            document.getElementById("botlog").innerText = "";
            var newPoint = Number(document.getElementById("botpoints").value);
            var Hpdigest = newPoint + 1;
            document.getElementById("botpoints").value = Hpdigest;
        }
    }
    setTimeout(check, 1000);
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
}
function punch() {
    var damage = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    document.getElementById("log").innerText = `You punched and deal ${damage}`;
    document.getElementById("botlog").innerText = "";
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    var newHp = Number(document.getElementById("bothp").value);
    var Hpdigest = newHp - damage;
    document.getElementById("bothp").value = Hpdigest;
    function botOption() {
        var botController = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        if (botController == 1) {
            botPunch();
        } else {
            botKick();
        }
    }
    setTimeout(botOption, 1500);
}
function kick() {
    var controller = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    var damage = Math.floor(Math.random() * (15 - 1 + 1) + 1)
    document.getElementById("botlog").innerText = "";
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    if(controller == 1) {
        document.getElementById("log").innerText = `You kick and deal ${damage}`;
        var newHp = Number(document.getElementById("bothp").value);
        var Hpdigest = newHp - damage;
        document.getElementById("bothp").value = Hpdigest;
    } else {
        document.getElementById("log").innerText = `You fall and deal yourself ${damage}`;
        var newHp = Number(document.getElementById("hp").value);
        var Hpdigest = newHp - damage;
        document.getElementById("hp").value = Hpdigest;
    }
    function botOption() {
        var botController = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        if (botController == 1) {
            botPunch();
        } else {
            botKick();
        }
    }
    setTimeout(botOption, 1000);
}