import chalk from 'chalk';
import dayjs from 'dayjs';

// 1. Obtener y formatear fecha actual
const fechaFormateada = dayjs().format('DD-MM-YYYY HH:mm:ss');

// 2. Mensaje de bienvenida en verde
console.log(chalk.green('¡Bienvenido a la aplicación de Node.js!'));

// 3. Mensaje adicional en amarillo con la fecha
console.log(chalk.yellow(`La fecha y hora actual es: ${fechaFormateada}`));
