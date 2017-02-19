module.exports = {
    apps : [{
        name        : "main",
        script      : "./index.js",
        watch       : true,
        env: {
            "NODE_ENV": "development"
        },
        env_production : {
            "NODE_ENV": "production"
        },
        out_file    : "/tmp/main.log",
        log_date_format : "MM/DD/YYYY HH:mm:ss"
    }]
};