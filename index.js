module.exports = (...objs) => Object.assign({}, ...objs.filter(o => ['Object', 'Array'].includes({}.toString.call(o).slice(8, -1))));
