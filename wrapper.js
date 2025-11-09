// Simulate Node.js wrapper manually

(function (exports, require, module, __filename, __dirname) {
    console.log("Inside wrapper function...");
    console.log("exports:", exports);
    console.log("require is a function:", typeof require);
    console.log("module:", module);
    console.log("__filename:", __filename);
    console.log("__dirname:", __dirname);

    // You can export something like Node does
    exports.greet = function() {
        return "Hello from wrapper simulation!";
    };

})(exports, require, module, __filename, __dirname);

// Now use the exported function
console.log(exports.greet());
