// Родительская функция
function ElectricalAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricalAppliance.prototype.plugIn = function() {
  if (!this.pluggedIn) {
    this.pluggedIn = true;
    console.log(this.name + ' включен в розетку.');
  } else {
    console.log(this.name + ' уже включен в розетку.');
  }
};

ElectricalAppliance.prototype.unplug = function() {
  if (this.pluggedIn) {
    this.pluggedIn = false;
    console.log(this.name + ' выключен из розетки.');
  } else {
    console.log(this.name + ' уже выключен из розетки.');
  }
};

ElectricalAppliance.prototype.getPower = function() {
  return this.power;
};

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

// Конкретные приборы
function DeskLamp(name, power, bulbType) {
  ElectricalAppliance.call(this, name, power);
  this.bulbType = bulbType;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;



DeskLamp.prototype.adjustBrightness = function(level) {
  console.log(this.name + ' яркость установлена на ' + level);
};

function Computer(name, power, processor) {
  ElectricalAppliance.call(this, name, power);
  this.processor = processor;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.start = function() {
  console.log(this.name + ' запущен. Процессор: ' + this.processor);
};

Computer.prototype.shutdown = function() {
  console.log(this.name + ' выключен.');
};

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