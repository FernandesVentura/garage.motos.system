document.addEventListener('DOMContentLoaded', (event) => {
    const tabTriggers = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    tabTriggers.forEach(tabTrigger => {
        tabTrigger.addEventListener('click', function (event) {
            const tabId = this.getAttribute('href');
            const tab = new bootstrap.Tab(document.querySelector(tabId));
            tab.show();
        });
    });
});

function showTab(tabId) {
    const tabElement = document.getElementById(tabId);
    const tab = new bootstrap.Tab(tabElement);
    tab.show();
}
