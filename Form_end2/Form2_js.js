function clearErrors() {
  let errNodes = document.querySelectorAll(".errorMessage");
  errNodes.forEach((errNode) => {
    let parent = errNode.parentElement;
    parent.removeChild(errNode);
  });
}

function InsertElementAfter(newNode, existingNode) {
  const parent = existingNode.parentNode;
  const next = existingNode.nextSibling;
  parent.insertBefore(newNode, next);
}

function ShowErrorMsg(messageToShow, elementIdToAppend) {
  const pElem = document.createElement("p");
  const txt = document.createTextNode(messageToShow);
  pElem.appendChild(txt);
  pElem.classList.add("errorMessage");

  const existingNode = document.getElementById(elementIdToAppend);
  if (existingNode != null) {
    InsertElementAfter(pElem, existingNode);
    setTimeout("clearErrors()", 5000);
  }
}

/* zamienia znaki specjalne i sprawdza podstawowe informacje o ciągu NIP tj. typ, długość */
function NormalizaNip(nipString) {
  let nip = nipString.replace(/[\\-]/gi, "");
  let rep = { valid: false, message: "Zły format ciągu znaków" };

  if (typeof nip == "string") {
    const regex = /^[0-9]{11}$/;
    if (regex.test(nip)) {
      rep.valid = true;
      rep.message = nip;
    }
  }
  return rep;
}

/* sprawdza poprawność ciągu NIP */
function ValidateNip() {
  const nipVal = document.forms["newOrgFrm"]["txtNip"].value;
  let nnip = NormalizaNip(nipVal);
  if (nnip.valid == true) {
    document.forms["newOrgFrm"]["txtNip"].value = nnip.message;
    return true;
  } else {
    ShowErrorMsg(nnip.message, "nipFields");
    return false;
  }
}

function CheckFirldIsEmpty(fieldName, UIName, errFieldId) {
  var x = document.forms["newOrgFrm"][fieldName].value;
  if (x == "") {
    msg = `Pole ${UIName} jest wymagane`;
    ShowErrorMsg(msg, errFieldId);
    return false;
  }
  return true;
}

function CheckRequiredFields() {
  let rep = CheckFirldIsEmpty("txtNip", "NIP", "nipFields");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtNazwa", "Nazwa", "txtNazwa");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtAdres", "Adres", "txtAdres");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtKod", "Kod pocztowy", "miejscowoscFields");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtMiejscowosc", "Miejscowość", "miejscowoscFields");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("kbxKraj", "Kraj", "kbxKraj");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtImie", "Imię", "txtImie");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtNazwisko", "Nazwisko", "txtNazwisko");
  if (!rep) return false;

  rep = CheckFirldIsEmpty("txtTelefon", "Telefon", "txtTelefon");
  if (!rep) return false;

  return true;
}

function ValidatePostCode() {
  var x = document.forms["newOrgFrm"]["txtKod"].value;
  if (typeof x == "string") {
    const regex = /^\d{2}-\d{3}$/;
    if (!regex.test(x)) {
      message = `Zły format kodu poczowego`;
      ShowErrorMsg(message, "miejscowoscFields");
      return false;
    }
  }
  return true;
}

function ValidatePhone() {
  var x = document.forms["newOrgFrm"]["txtTelefon"].value;
  if (typeof x == "string") {
    const regex = /^\d{11}$/;
    if (!regex.test(x.replace(/[\s()\+\-\.]/gi, ""))) {
      message = `Poprawny format +99 999 999 999)`;
      ShowErrorMsg(message, "txtTelefon");
      return false;
    }
  }
  return true;
}

function formSerialize(formElement) {
  const values = {};
  const inputs = formElement.elements;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name.includes("txt"))
      values[inputs[i].name] = inputs[i].value;
    else if (inputs[i].name.includes("kbx")) {
      values[inputs[i].name] = inputs[i].options[inputs[i].selectedIndex].text;
    }
  }
  return JSON.stringify(values);
}

function SendPost(adres, data) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", adres, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  console.log(data);
  xhr.send(data);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      var json = JSON.parse(xhr.responseText);
      console.log(json);
    }
  };

  return false;
}

function ValidateForm() {
  let rep = false;

  rep = CheckRequiredFields();
  if (!rep) return false;

  rep = ValidateNip();
  if (!rep) return false;

  rep = ValidatePostCode();
  if (!rep) return false;

  rep = ValidatePhone();
  if (!rep) return false;

  if (rep) {
    let olo = formSerialize(document.forms["newOrgFrm"]);
    return SendPost("http://127.0.0.1:5500/Form_end2/Form2.html", olo);
  }

  return false;
}
