let Record = (function () {
    let uniqueId = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = uniqueId++;//Record.getId();
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        _calculateWeather() {
            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                return 'Stormy'
            }

            return 'Not stormy';
        }

        toString() {
            let output = '';
            output += `Reading ID: ${this.id}\n`;
            output += `Temperature: ${this.temperature}*C\n`;
            output += `Relative Humidity: ${this.humidity}%\n`;
            output += `Pressure: ${this.pressure}hpa\n`;
            output += `Wind Speed: ${this.windSpeed}m/s\n`;
            output += `Weather: ${this._calculateWeather()}`;

            return output;
        }

        static getId() {
            if (!Record.nextId) {
                Record.nextId = 0;
            }
            return Record.nextId++;
        }
    }
})();