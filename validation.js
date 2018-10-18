//Validation 1.16.5
data.inputstatus_7.status = 'success';

var tipoCampo = Form.getItemProperty("data." + item.$$parent.id, "tipoDeCampos");
var customError = Form.getPathData(Form.getItemProperty("data." + item.$$parent.id, "customError"), data);

if (customError) {
  return customError;
}

if (!item.mandatory && (value === null || value === "")) {
  return true;
}

var minChars = Form.getItemProperty("data." + item.$$parent.id, "minChars");

if (value.length < minChars) {
  data.inputstatus_7.status = "error";
  return "Mínimo de " + minChars + " caracteres requeridos";
}

var validations = {
  Numerico: function () {
    if (Form.getItemProperty("data.tiCustom_7", "activarRangosNumericos") && data.cliente_informacionContacto_correoElectronico > Form.getItemProperty("data.tiCustom_7", "numeroFinal")) {
      data.inputstatus_7.status = "error";
      return Form.getItemProperty("data.tiCustom_7", "mensajeDeErrorMaximo");
    }
    if (Form.getItemProperty("data.tiCustom_7", "activarRangosNumericos") && data.cliente_informacionContacto_correoElectronico < Form.getItemProperty("data.tiCustom_7", "numeroInicial")) {
      data.inputstatus_7.status = "error";
      return Form.getItemProperty("data.tiCustom_7", "mensajeDeErrorMinimo");
    }
    return true;
  },
  OCR: function () {
    if (!isOCROk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "No se permiten dígitos repetidos en OCR";
    }
    return true;
  },
  Fecha: function () {
    if (!isDateOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Fecha no válida";
    }
    if (!esMenorAEdadMaxima(data.cliente_informacionContacto_correoElectronico.replace(/[\/]/g, ''), Form.getItemProperty("data.tiCustom_7", "edadMaxima"))) {
      data.inputstatus_7.status = "error";
      return "Supera la edad permitida";
    }
    if (Form.getItemProperty("data.tiCustom_7", "verificarEdadMaximaTDC") && Form.getFieldRefPropValue("data." + item.$$parent.id, "dependenciaCampo") && !esMenorAEdadMaxima(data.cliente_informacionContacto_correoElectronico.replace(/[\/]/g, ''), 91)) {
      data.inputstatus_7.status = "error";
      return "Supera la edad permitida";
    }
    return true;
  },
  Monto: function () {
    if (!isMontoOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Monto incorrecto";
    }
    return true;
  },
  AnioRegistro: function () {
    if (!isAnioRegistroOk(data.cliente_informacionContacto_correoElectronico)) {
      data.cliente_informacionContacto_correoElectronico = "";
      data.inputstatus_7.status = "error";
      return "Año de registro incorrecto, favor de validarlo";
    }
    return true;
  },
  Email: function () {
    if (!isEmailOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      data.cliente_informacionContacto_correoElectronico = '';
      return "El correo electrónico no cumple con los estándares";
    }
    if (data.cliente_informacionContacto_correoElectronico.length > 78) {
      data.inputstatus_7.status = "error";
      return 'La longitud no es correcta favor de verificar';
    }
    
    return true;
  },
  CodigoPostal: function () {
    if (!isCodigoPostalOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Codigo postal incorrecto";
    }
  },
  NumeroClienteOTarjeta: function () {
    if (!isNumClienteTarjetaOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Número de cliente o tarjeta inválido";
    }
    return true;
  },
  LoginEjecutivo: function () {
    if (!noCeros(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Número Inválido";
    }
    return true;
  },
  Celular: function () {
    if (!esCelularOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Celular no válido";
    }
    if (!isTheSameNumber(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "No se permiten dígitos repetidos";
    }
    return true;
  },
  Telefono: function () {
    if (!esCelularOk(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "Teléfono no válido";
    }
    if (!isTheSameNumber(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return "No se permiten dígitos repetidos";
    }
    return true;
  },
  RFC: function () {
    if (!isRFCOk(data.cliente_informacionContacto_correoElectronico, Form.getFieldRefPropValue("data." + item.$$parent.id, "dependenciaCampo"))) {
      data.inputstatus_7.status = "error";
      return "RFC incorrecto";
    }
    if (isPalabraAntisonante(data.cliente_informacionContacto_correoElectronico)) {
      document.getElementById(item.id).parentElement.setAttribute("blueWarning", Form.getItemProperty("data.tiCustom_7", "blueWarningMessage"));
      data.inputstatus_7.status = "blueWarning";
      return true;
    }
    return true;
  },
  CURP: function () {
    if (!isCURPOk(data.cliente_informacionContacto_correoElectronico, Form.getFieldRefPropValue("data." + item.$$parent.id, "dependenciaCampo"))) {
      data.inputstatus_7.status = "error";
      return "CURP incorrecto";
    }
    if (isPalabraAntisonante(data.cliente_informacionContacto_correoElectronico)) {
      document.getElementById(item.id).parentElement.setAttribute("blueWarning", Form.getItemProperty("data.tiCustom_7", "blueWarningMessage"));
      data.inputstatus_7.status = "blueWarning";
      return true;
    }
    return true;
  },
  SSNTIN: function () {
    if (!isValidSSN(data.cliente_informacionContacto_correoElectronico)) {
      data.inputstatus_7.status = "error";
      return 'SSN/TIN Inválido';
    }
    return true;
  },
};

return getProperty(validations, tipoCampo);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function definitions
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getProperty(obj, prop) {
  if (obj[prop] == null) {
    return true;
  }
  return obj[prop]();
}

function isValidSSN(value) {
  if (value.trim().length > 9) {
    return false;
  }
  var firstSegment = value.substring(0, 3) || 0;
  var secondSegment = value.substring(3, 5) || 0;
  var thirdSegment = value.substring(5, 9) || 0;
  var isValidLength = firstSegment.length === 3 && secondSegment.length === 2 && thirdSegment.length === 4;
  if (!isValidLength || parseInt(firstSegment, 10) === 0 || parseInt(secondSegment, 10) === 0 || parseInt(thirdSegment, 10) === 0) {
    return false;
  }
  if (parseInt(firstSegment, 10) === 666 || parseInt(firstSegment, 10) > 899) {
    return false;
  }
  return true;
};

function isMontoOk(val) {
  var value = val.split('.');
  if (value.length > 2)
    return false;
  if (value[0].length > 10)
    return false;
  if (value.length > 1 && value[1].length > 2)
    return false;
  return true;
};

function isAnioRegistroOk(yearRegistered) {
  var today = new Date();
  var currentYear = today.getFullYear();

  // Check if user enter a future date.
  if (yearRegistered > currentYear) return false;

  // Check if user has no more tha 150 years.
  //if (currentYear - yearRegistered > 28) return false;

  if (yearRegistered < 1990) return false;

  return true;
};

function isDateOk(date) {
  // Trabajo en Construccion |o/
  // Checa si es fecha valida
  var regexp = /^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
  var fechaValida = date.match(regexp);
  if(!fechaValida){
    return false;
  }
  
  // Get current date.
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  // Slice date
  var dateSin = date.replace(/[\/]/g, '');
  var day = Number(dateSin.slice(0, 2));
  var month = Number(dateSin.slice(2, 4));
  var year = Number(dateSin.slice(4, 8));
  
  // Check if user enter a future date.
  if (year > yyyy || year === yyyy && (month > mm || month === mm && day > dd)) return false;

  // Check if user has 18 years old.
  if (Form.getItemProperty("data.tiCustom_7", "mayorA18Aos") && (yyyy - year < 18 || yyyy - year === 18 && (month > mm || month === mm && day > dd))) return false;

  return true;
}

function esMenorAEdadMaxima(date, edadMaxima) {
  // dd/mm/yyyy
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  var day = Number(date.slice(0, 2));
  var month = Number(date.slice(2, 4));
  var year = Number(date.slice(4, 8));

  if (yyyy - year > edadMaxima) return false;
  if (yyyy - year === edadMaxima && (month < mm || month === mm && day <= dd)) return false;

  return true;
};

function isRFCOk(val, date) {
  var value = val.toUpperCase();
  var dateF = date.slice(8) + date.slice(3, 5) + date.slice(0, 2);
  // Only chars first 4 chars
  if (/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ \\\[\]\{\}\/\^`~¬@\-_:.;,<>¿¡?=()&%$#"!°|+*¨´'0-9]/g.test(value.slice(0, 4)))
    return false;
  // Only numbers second 6 chars
  else if (/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ \\\[\]\{\}\/\^`~¬@\-_:.;,<>¿¡?=()&%$#"!°|+*¨´'a-zA-Z]/g.test(value.slice(4, 10)))
    return false;
  // Check if date is the same.
  else if (date.length < 10)
    return false;
  else if (value.slice(4, 10) !== dateF)
    return false;
  return true;
};

function isCURPOk(val, date) {
  var value = val.toUpperCase();
  var dateF = date.slice(8) + date.slice(3, 5) + date.slice(0, 2);
  // Min length
  if (value.length < 18)
    return false;
  // Only chars first 4 chars.
  else if (/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ \\\[\]\{\}\/\^`~¬@\-_:.;,<>¿¡?=()&%$#"!°|+*¨´'0-9]/g.test(value.slice(0, 4)))
    return false;
  // Only numbers second 6 chars.
  else if (/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ \\\[\]\{\}\/\^`~¬@\-_:.;,<>¿¡?=()&%$#"!°|+*¨´'a-zA-Z]/g.test(value.slice(4, 10)))
    return false;
  // Only H or M third 1 character.
  else if (value[10] !== 'H' && value[10] !== 'M')
    return false;
  // Only chars fourth 2 chars.
  else if (/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ \\\[\]\{\}\/\^`~¬@\-_:.;,<>¿¡?=()&%$#"!°|+*¨´'0-9]/g.test(value.slice(11, 13)))
    return false;
  // Check if date is the same.
  else if (date.length < 10)
    return false;
  else if (value.slice(4, 10) !== dateF)
    return false;
  return true;
};

function isEmailOk(value) {
  value = value.toUpperCase();
  var parts = value.split('@');
  if (parts.length !== 2)
    return false;
  if (parts[1].length > 255)
    return false;
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(parts[1]))
    return false;
  if(/-/.test(parts[1]))
	return false;
  return (/^[a-zA-Z0-9]+([\.]?[!#$%&'\-\*+\/=?\^`{|}~"()_,:;<>\[\]]*[a-zA-Z0-9]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
};

function noCeros(value) {
  var num = Number(value);
  if (value >= 1) {
    return true;
  } else if (value === 0) {
    return false;
  }
}

function isCodigoPostalOk(value) {
  var num = Number(value);
  if (num < 1000 || num > 99998) return false;
  return true;
};

function esCelularOk(value) {
  if (value.length === 10) {
    return true;
  } else {
    return false;
  }
};

function isTheSameNumber(value) {
  var numero = 0;
  for (var i = 0; i < value.length; ++i) {
    if (value[i] === value[0]) numero++;
  }

  if (numero === 10) {
    return false;
  } else {
    return true;
  }
};

function isOCROk(value) {
  var numero = 0;
  for (var i = 0; i < value.length; ++i) {
    if (value[i] === value[0]) numero++;
  }

  if (value.length === 12 || value.length === 13) {
    if (numero === value.length) {
      return false;
    } else {
      return true;
    }
  }
};

function isNumClienteTarjetaOk(value) {
  return (value.length > 0 && value.length < 10) || value.length === 16;
};

function isPalabraAntisonante(value) {
  var listaPalabras = /BUEI|BUEY|CACA|CACO|CAGA|CAGO|CAKA|CAKO|COGE|COJA|COJE|COJI|COJO|CULO|FETO|GUEY|JOTO|KACA|KACO|KAGA|KAGO|KOGE|KOJO|KAKA|KULO|MAME|MAMO|MEAR|MEAS|MEON|MION|MOCO|MULA|PEDA|PEDO|PENE|PIPI|POPO|PUTA|PUTO|QULO|RATA|RUIN/g;
  return (value.match(listaPalabras));
};
