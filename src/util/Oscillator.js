class Oscillator {
    constructor(context, freq) {
        this.oscillator = context.createOscillator();
        this.oscillator.type = "sine";
        this.oscillator.frequency.value = freq;
        this.oscillator.start(0);
    }
}

export default Oscillator;
