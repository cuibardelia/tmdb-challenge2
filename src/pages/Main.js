import {Lightning, Utils} from "wpe-lightning-sdk"

import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        return {
            scale:0.5,
            Lists: {
                x: 100, y: 560, zIndex: 3
            },
            Logo: {
                src: Utils.asset("images/logo.png"),
                x: 20, y: 30
            }
        };
    }

    _init() {
        this._index = 0;
        this.signal('inMain', true);
    }

    _focus() {
        // don't see anything to do here
    }

    set movies(data) {
        this.tag('Lists').add({
            type: List,
            movies: data.results
        });
    }

    _unfocus() {
        // same here
    }

    _getFocused() {
        return this.tag('Lists').getByRef('List');
    }

}