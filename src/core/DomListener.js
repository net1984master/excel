export class DomListener {
    constructor($root, listeners) {
        if (!$root) {
            throw new Error('Need root for DoomListener');
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners?.forEach((eventName) => {
            console.log(eventName);
        });
    }
    removeDOMListeners() {

    }
}
