// Родительский класс
class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  plugIn() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(this.name + ' включен в розетку.');
    } else {
      console.log(this.name + ' уже включен в розетку.');
    }
  }

  unplug() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(this.name + ' выключен из розетки.');
    } else {
      console.log(this.name + ' уже выключен из розетки.');
    }
  }

  getPower() {
    return this.power;
  }
}

// Функция для расчета общей потребляемой мощности
function calculateTotalPower(appliances) {
  let totalPower = 0;

  appliances.forEach(function(appliance) {
    if (appliance.pluggedIn) {
      totalPower += appliance.getPower();
    }
  });

  return totalPower;
}

// Конкретный прибор - настольная лампа
class DeskLamp extends ElectricalAppliance {
  constructor(name, power, bulbType) {
    super(name, power);
    this.bulbType = bulbType;
  }

  adjustBrightness(level) {
    console.log(this.name + ' яркость установлена на ' + level);
  }
}

// Конкретный прибор - компьютер
class Computer extends ElectricalAppliance {
  constructor(name, power, processor) {
    super(name, power);
    this.processor = processor;
  }

  start() {
    console.log(this.name + ' запущен. Процессор: ' + this.processor);
  }

  shutdown() {
    console.log(this.name + ' выключен.');
  }
}

// Создание экземпляров приборов
const lamp = new DeskLamp('Настольная лампа', 60, 'LED');
const computer = new Computer('Компьютер', 500, 'Intel Core i7');

// Включение приборов
lamp.plugIn();
computer.plugIn();

// Использование методов конкретных приборов
lamp.adjustBrightness('средняя');
computer.start();

// Выключение приборов
lamp.unplug();
computer.shutdown();

// Расчет потребляемой мощности
const appliances = [lamp, computer];
const totalPower = calculateTotalPower(appliances);

console.log('Общая потребляемая мощность: ' + totalPower + ' Вт.');