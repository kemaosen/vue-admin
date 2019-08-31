// src/router/config/_import_production.js
module.exports = file => () => import("@/views" + file + ".vue");
