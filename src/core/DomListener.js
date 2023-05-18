export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('Need root for DoomListener');
        }
        this.$root = $root;
    }
}
