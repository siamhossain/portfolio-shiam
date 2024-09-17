/**
 * Get the current theme
 * @returns {boolean}
 */
function isDarkTheme() {
    let is_dark = localStorage.getItem('dark_theme');
    return !!(is_dark && (is_dark === "1"));
}


/**
 * Toggle theme to light or dark
 * @param theme {'dark' | undefined}
 * @returns {void}
 */
function toggleTheme(theme = undefined) {
    let is_dark = false;
    const body = document.body;

    if (!theme) {
        if (!body.classList.contains('dark')) {
            is_dark = true;
        }

        localStorage.setItem('dark_theme', is_dark ? '1' : '0');

        body.classList.toggle('dark');
    } else if (theme === "dark") {

        localStorage.setItem('dark_theme', '1');
        body.classList.add('dark');
    }

    populateThemeSwitcherIcon();
}

function populateThemeSwitcherIcon() {
    const isDark = isDarkTheme();

   document.querySelector('[data-toggle="theme"]').style.display = 'block';
    if (isDark) {
        document.querySelector('[data-toggle="theme"] [data-theme-icon="moon"]').style.display = 'none';
        document.querySelector('[data-toggle="theme"] [data-theme-icon="sun"]').style.display = 'block';
    } else {
        document.querySelector('[data-toggle="theme"] [data-theme-icon="sun"]').style.display = 'none';
        document.querySelector('[data-toggle="theme"] [data-theme-icon="moon"]').style.display = 'block';
    }
}

/**
 * Switch a tab by it's name
 * @param tab_name {string}
 */

function switchSkillsTab(tab_name) {
    const tabs = document.querySelectorAll('.skill-section [data-tab-name]');
    if (tabs && tabs.length > 0) {
        tabs.forEach((tab) => {
            const __tab_name = tab.getAttribute('data-tab-name');
            if (__tab_name === tab_name) {
                tab.style.display = "block";

                const tab_buttons = document.querySelectorAll('.skill-section [data-target-tab]');
                if (tab_buttons && tab_buttons.length > 0) {
                    tab_buttons.forEach((tab_button) => {
                        if (tab_button.getAttribute('data-target-tab') === tab_name) {
                            tab_button.classList.add('active');
                        } else {
                            tab_button.classList.remove('active');
                        }
                    });
                }

            } else {
                tab.style.display = "none";
            }
        });
    }
}

function showFirstSkillTab() {
    const skillTabs = document.querySelectorAll('.skill-section [data-tab-name]');
    if (skillTabs && skillTabs.length > 0) {
        const tab = skillTabs[0];
        const tab_name = tab.getAttribute('data-tab-name');
        switchSkillsTab(tab_name);
    }
}

function handleSkillTabButtonClick() {
    const tab_buttons = document.querySelectorAll('.skill-section [data-target-tab]');
    if (tab_buttons && tab_buttons.length > 0) {
        tab_buttons.forEach((tab_button) => {
            tab_button.addEventListener('click', function () {
                const tab_name = tab_button.getAttribute('data-target-tab');
                switchSkillsTab(tab_name);
            });
        });
    }
}

function toggleSidebarMenu() {
    const sidebarContainer = document.querySelector('.sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.classList.toggle('open');
    }
}

function initializePortfolioCards() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    if (portfolioCards) {
        portfolioCards.forEach(function (card) {
            if (card.children && card.children.length > 0) {
                for (let i = 0; i < card.children.length; i++) {
                    const item = card.children[i];
                    if (item?.nodeName?.toLowerCase() === "img") {
                        const imagePath = item?.getAttribute('src') ?? "";
                        card.style.backgroundImage = `url(${imagePath})`;
                        item.remove();
                    }
                }
            }
        });
    }
}

/**
 * Switch a portfolio tab by it's tab name
 * @param tab_name {string | 'all'}
 */
function switchPortfolioTab(tab_name) {
    const portfolioTabButtons = document.querySelectorAll('.portfolio-section .tab-btn');
    const portfolioTabs = document.querySelectorAll('.portfolio-section .tab');

    portfolioTabButtons.forEach(function (tabButton) {
        tabButton.classList.remove('active');
    });

    if (tab_name === 'all') {
        portfolioTabs.forEach(function (tab) {
            tab.classList.add('show');
        });
    } else {
        portfolioTabs.forEach(function (tab) {
            if (tab?.getAttribute('data-tab') === tab_name) {
                tab.classList.add('show');
            } else {
                tab.classList.remove('show');
            }
        });
    }

    // activate the tab button active class
    const targetButton = document.querySelector(`.portfolio-section .tab-btn[data-target-tab="${tab_name}"]`);
    
    if(targetButton) {
        targetButton.classList.add('active');
    }
}

function initializePortfolioTabs() {
    // initialize all the portfolio card items
    initializePortfolioCards();

    const tabButtons = document.querySelectorAll('.portfolio-section .tab-btn');

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const tabName = button.getAttribute('data-target-tab');
            switchPortfolioTab(tabName);
        });
    });
}

(function () {
    // apply dark theme is set
    // if (isDarkTheme()) {
    //     toggleTheme("dark");
    // }

    // populate the theme switcher icon
    //populateThemeSwitcherIcon();

    // toggle theme on theme changer button click
    document.querySelectorAll('[data-toggle="theme"]').forEach(function (element) {
        element.addEventListener('click', function () {
            toggleTheme();
        });
    });

    // toggle sidebar menu on menu icon click
    document.querySelectorAll('[data-toggle="sidebar-menu"]').forEach(function (element) {
        element.addEventListener('click', function () {
            toggleSidebarMenu();
        });
    });

    // handle the skills tab changer
    handleSkillTabButtonClick();

    // show the initial skill tab
    showFirstSkillTab();

    // initialize all the portfolio tab
    initializePortfolioTabs();
})();
