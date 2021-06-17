/**
 * 複数のクラスをミックスインします。
 * 参考：http://es6-features.org/#ClassInheritanceFromExpressions
 * @param {Function} baseClass 基底クラス。
 * @param  {...any} mixins 継承元クラス。
 * @returns {Function} ミックスインしたクラスを返します。
 */
var aggregation = (baseClass, ...mixins) => {
    let base = class _Combined extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
                mixin.prototype.initializer.call(this);
            });
        }
    };
    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
            if (prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                return
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
        })
    }
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

export { aggregation };