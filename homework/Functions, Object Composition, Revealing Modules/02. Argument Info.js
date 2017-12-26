function argumentInfo() {
    var summary = {};

    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var type = typeof obj;
        console.log(type + ': ' + obj);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    var sortedTypes = [];
    for (var currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    for (type of sortedTypes.sort((a, b) => summary[b[0]] - summary[a[0]])) {
        console.log(type[0] + ' = ' + type[1]);
    }

}

argumentInfo(
    'cat', 42, 'function () { console.log("Hello world!")'
);