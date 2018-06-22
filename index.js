module.exports = (...objs) => {
    objs = objs.filter(o => ['Object', 'Array'].includes({}.toString.call(o).slice(8, -1)));
    return Object.assign({}, ...objs);
};
