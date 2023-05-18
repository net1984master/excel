class Dom {
    constructor(selector) {
        this.$nativeEl = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector;
    }

    append(node) {
        if (node instanceof Dom) node = node.$nativeEl;
        this.$nativeEl.append(node);
    }

    // html(html) {
    //     if (typeof html === 'string') {
    //         this.$el.innerHTML = html
    //         return this
    //     }
    //     return this.$el.outerHTML.trim()
    // }

    set html(value) {
        this.$nativeEl.innerHTML = value;
    }
    get html() {
        return this.$nativeEl.outerHTML.trim();
    }
}

export function $(selector) {
    return new Dom(selector);
}

$.create = (tagName, classes) => {
    const el = document.createElement(tagName);
    if (classes) {
        el.classList.add(classes);
    }
    return $(el);
};
