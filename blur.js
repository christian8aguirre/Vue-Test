//Blur 1.16.5
//Linea 7 no borrar 
if (!data.cliente_informacionContacto_correoElectronico){
	data.inputstatus_7.status = 'default'; 
}

if (data.numeroCliente && data.cliente_informacionContacto_correoElectronico === ''){
  data.inputstatus_7.status = 'error';
  data.mailCustomError = 'No es posible eliminar el campo, favor de proporcionar un correo electrónico';    
  data.cliente_informacionContacto_correoElectronico = Form.data.clienteExistente_informacionContacto_correoElectronico;
}

if(data.cliente_informacionContacto_correoElectronico){
  if(Form.getItemProperty("data.tiCustom_7","noCeroComoPrimerDigito") && data.cliente_informacionContacto_correoElectronico === "0"){
      data.cliente_informacionContacto_correoElectronico = "";
  }

  if(Form.getItemProperty("data.tiCustom_7","noEspaciosAlFinal")){
      event.target.value = event.target.value.trim();
  }

  if(Form.getItemProperty("data.tiCustom_7","noPunto")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[.]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","noDiagonal")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[\/]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","noApostrofe")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[’]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","noNEspanol")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[Ññ]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7", "noRayita")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[\-]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","noComa")){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[,]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Alfanumerico'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´']/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Numerico'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'a-zA-Z]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Letras'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'0-9]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Fecha'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´.,'a-zA-Z\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Celular'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´.,'\/’\a-zA-Z\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Telefono'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´.,'\/’\a-zA-Z\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'CreditCard'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´.,'\/’\a-zA-Z\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'OCR'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´.,'\/’\a-zA-Z\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'RFC'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'CURP'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'FIEL'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Monto'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´',\/’\-a-zA-Z\/\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'AnioRegistro'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-a-zA-Z\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Email'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'CodigoPostal'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-a-zA-Z\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'NumeroClienteOTarjeta'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-a-zA-Z\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'Currency'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-a-zA-Z\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'PasswordEjecutivo'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´'.,\/’\-\s]/g, "");
  }

  if(Form.getItemProperty("data.tiCustom_7","tipoDeCampos") === 'SSNTIN'){
      data.cliente_informacionContacto_correoElectronico = data.cliente_informacionContacto_correoElectronico.replace(/[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖŒÙÚÛÜÝŸÑ\\\[\]\{\}\^`~¬@\_:;<>¿¡?=()&%$#"!°|+*¨´',\/’\-a-zA-Z\/\-\s]/g, "");
  }
}