import React from 'react';
import * as classNames from 'classnames';

import Scale from '../util/Scale';
import Oscillator from '../util/Oscillator';
import Envelope from '../util/Envelope';


class PianoKey extends React.Component{
    constructor(props) {
        super(props);

        const { context, note } = this.props;
        this.oscillator = new Oscillator(context, Scale[note]);
        this.envelope = new Envelope(context);
        this.oscillator.oscillator.connect(this.envelope.gain);
        this.envelope.gain.connect(context.destination);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.pressed === false && nextProps.pressed === true) {
            this.envelope.on();
        } else if (this.props.pressed === true && nextProps.pressed === false) {
            this.envelope.off();
        }
    }

    render() {
        const { hotkey, note, pressed } = this.props;
        const classes = classNames.default("piano-key", {
            "piano-key-pressed": pressed,
            "piano-key-sharp": /\#/.test(note),
        });
        const elevation = classNames.default(pressed ? "pt-elevation-0" : "pt-elevation-2");
        return (<div className={classes}>
            <div className={elevation}>
                <div className="piano-key-text">
                    <span className="piano-key-note">{note}</span><br />
                    <kbd className="piano-key-hotkey">{hotkey}</kbd>
               </div>
            </div>
        </div>);
    }
}

export default PianoKey;
