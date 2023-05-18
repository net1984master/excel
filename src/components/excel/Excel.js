import {$} from '@core/dom';

export class Excel {
    static className = 'excel';
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', Excel.className);
        this.components.forEach(
            Component => {
                const $el = $.create('div', Component.className);
                const component = new Component($el);
                $el.html = component.toHTML();
                console.dir($el);
                $root.append($el);
            }
        );
        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
