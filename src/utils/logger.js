// src/utils/logger.js

class Logger {
  static log(message) {
    // Aquí puedes implementar la lógica para registrar el mensaje en el sistema de registro.
    // Por ejemplo, imprimir el mensaje en la consola, almacenarlo en un archivo de registro, enviarlo a un servicio de registro, etc.
    console.log(`[LOG] ${message}`);
  }

  static error(message) {
    // Aquí puedes implementar la lógica para registrar errores en el sistema de registro.
    // Por ejemplo, imprimir el mensaje de error en la consola, almacenarlo en un archivo de registro de errores, enviarlo a un servicio de registro de errores, etc.
    console.error(`[ERROR] ${message}`);
  }
}

module.exports = Logger;
