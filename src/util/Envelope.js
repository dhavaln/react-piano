class Envelope {
    constructor(context) {
      this.attackLevel = 0.8;
      this.attackTime = 0.1;
      this.sustainLevel = 0.3;
      this.sustainTime = 0.1;
      this.releaseTime = 0.4;

      this.context = context;
      this.gain = context.createGain();
      this.amplitude = this.gain.gain;
      this.amplitude.value = 0;
    }

    on() {
        const now = this.context.currentTime;
        this.amplitude.cancelScheduledValues(now);
        this.amplitude.setValueAtTime(this.amplitude.value, now);
        this.amplitude.linearRampToValueAtTime(this.attackLevel, now + this.attackTime);
        this.amplitude.exponentialRampToValueAtTime(this.sustainLevel, now + this.attackTime + this.sustainTime);
    }

    off() {
        const now = this.context.currentTime;
        // The below code helps remove waveform popping artifacts, but there is
        // a bug in Firefox that breaks the whole example if we use it.
        // this.amplitude.cancelScheduledValues(now);
        // this.amplitude.setValueAtTime(this.amplitude.value, now);
        this.amplitude.exponentialRampToValueAtTime(0.01, now + this.releaseTime);
        this.amplitude.linearRampToValueAtTime(0, now + this.releaseTime + 0.01);
    }
}

export default Envelope;
