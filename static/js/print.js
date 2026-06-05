(function () {
    var printBtn = document.getElementById('print-btn');
    if (!printBtn) {
        return;
    }

    printBtn.addEventListener('click', function () {
        window.print();
    });
})();
