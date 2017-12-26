function exportSummary(selector) {
    $(selector).click(extract);

    function extract() {
        let p = $('<p>');

        let summary = $('#content');
        for (let item of summary.find('strong')) {
            p.append($(item).text());
        }

        let exportedSummary = $('<div>', {'id': 'summary'});
        exportedSummary
            .append($('<h2>').text('Summary'))
            .append(p);

        summary.after().append(exportedSummary);
    }
}

// npm --save install jquery
//

// function exportSummary(selector) {
//     $(selector).click(function() {
//
//         let text = $('#content').find('strong').text();
//         let summary =  $(`<div id="summary">
//             <h2>Summary</h2>
//             <p>${text}</p>
//             </div>`);
//
//         $('#content').parent().append(summary);
//
//     });
//
// }