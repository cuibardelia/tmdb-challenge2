import {Lightning} from "wpe-lightning-sdk";

import Level from "../item/Item.js"

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'SourceSansPro-Regular'}
            },
            Levels: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
        if (this._index > 0) {
            this.setIndex(this.index - 1);
        }
    }

    _handleRight() {
        if (this.items.length > this._index) {
            this.setIndex(this.index + 1);
        }
    }

    setIndex(index) {
        this._index = index;
    }

    set label(v) {
        // @todo: update list title
    }

    set movies(v) {
        console.log('here x', v)
        // we add an array of object with type: Item
        this.tag("Levels").children = v.map((el, idx)=>{
            return {
                type: Level,
                x: idx * 320,
                item: el,
                visible: idx <= 12
            };
        });
    }

    get items() {
        return this.tag("Levels").children;
    }

    get activeItem() {
        return this.items.getAt(this._index);
    }

    _getFocused() {
        return this.activeItem;
    }
}
