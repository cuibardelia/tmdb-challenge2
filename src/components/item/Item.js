import {Lightning} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static _template(){
        return {
            Image: {

            },
            Title: {
                y: 460, x: 20,
                w: 300,
                text: {fontFace: 'SourceSansPro-Regular', fontSize: 24}
            }
        }
    }

    _focus() {
        this.tag('Image').setSmooth('scale', 1.2);
    }

    _unfocus() {
        this.tag('Image').setSmooth('scale', 1);
    }

    set item(v){
        this.patch({
            Image: {smooth:{src:`https://image.tmdb.org/t/p/w300/${v && v.poster_path}`}},
            Title: {smooth:{text: v && v.title}},
        })
    }
}