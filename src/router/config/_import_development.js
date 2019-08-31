// src/router/config/_import_development
module.exports = file => require("@/views" + file + ".vue").default;
// vue-loader at least v13.0.0+
