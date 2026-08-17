const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !['login.html', 'register.html'].includes(f));

const cleanMobileNav = `<!-- Mobile Nav Backdrop -->
<div id="mobile-nav-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] hidden transition-opacity duration-300 opacity-0" onclick="toggleMobileNav()"></div>

<!-- SideNavBar (Mobile) -->
<div class="bg-surface dark:bg-inverse-surface fixed inset-y-0 right-0 w-full sm:w-80 z-[60] transform translate-x-full transition-transform duration-300 xl:hidden border-l border-outline-variant/30 shadow-2xl flex flex-col h-full" id="mobile-nav">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 dark:border-outline/30 bg-surface-bright dark:bg-tertiary">
        <span class="font-headline-sm text-lg font-bold uppercase tracking-wider text-primary dark:text-inverse-primary">Menu</span>
        <button class="p-2 -mr-2 text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors rounded-full hover:bg-surface-container-high dark:hover:bg-surface-container-highest" onclick="toggleMobileNav()">
            <span class="material-symbols-outlined" data-icon="close">close</span>
        </button>
    </div>

    <!-- Scrollable Links Area -->
    <div class="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        
        <!-- Section: Main Menu -->
        <div>
            <h4 class="px-4 text-xs font-label-bold uppercase tracking-wider text-outline dark:text-outline-variant mb-2">Main Menu</h4>
            <div class="space-y-1">
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="home.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="home">home</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Home</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="home2.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="home_work">home_work</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Home 2</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="grid_view">grid_view</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Catalog</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="services.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="handyman">handyman</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Services</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="gallery.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="photo_library">photo_library</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Gallery</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="blog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="article">article</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Blog</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="contact.html">
                    <span class="material-symbols-outlined mr-4 text-primary/70 dark:text-primary-fixed/70 group-hover:text-secondary transition-colors" data-icon="mail">mail</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
            </div>
        </div>

        <hr class="border-outline-variant/30 dark:border-outline/30">

        <!-- Section: Equipment Categories -->
        <div>
            <h4 class="px-4 text-xs font-label-bold uppercase tracking-wider text-outline dark:text-outline-variant mb-2">Equipment</h4>
            <div class="space-y-1">
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="soup_kitchen">soup_kitchen</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Chafing Dishes</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="restaurant">restaurant</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Serving Utensils</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="countertops">countertops</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Buffet Counters</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="set_meal">set_meal</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Crockery Sets</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="catalog.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="local_fire_department">local_fire_department</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Gas Stoves</span>
                </a>
            </div>
        </div>

        <hr class="border-outline-variant/30 dark:border-outline/30">

        <!-- Section: Support & Info -->
        <div>
            <h4 class="px-4 text-xs font-label-bold uppercase tracking-wider text-outline dark:text-outline-variant mb-2">Support & Info</h4>
            <div class="space-y-1">
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors" href="#">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="help">help</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">FAQ</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors" href="#">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="local_shipping">local_shipping</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Delivery & Logistics</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors" href="#">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="description">description</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Terms of Service</span>
                </a>
            </div>
        </div>

        <hr class="border-outline-variant/30 dark:border-outline/30">

        <!-- Section: Account -->
        <div>
            <h4 class="px-4 text-xs font-label-bold uppercase tracking-wider text-outline dark:text-outline-variant mb-2">Account</h4>
            <div class="space-y-1">
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors" href="login.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="login">login</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Login</span>
                </a>
                <a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors" href="register.html">
                    <span class="material-symbols-outlined mr-4 text-primary/50 dark:text-primary-fixed/50 group-hover:text-secondary transition-colors" data-icon="person_add">person_add</span>
                    <span class="font-label-bold text-label-bold group-hover:translate-x-1 transition-transform">Create Account</span>
                </a>
            </div>
        </div>

    </div>

    <!-- Pinned Footer Area -->
    <div class="border-t border-outline-variant/30 dark:border-outline/30 bg-surface-container-lowest dark:bg-tertiary p-6 space-y-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
        <!-- Toggles -->
        <div class="flex gap-2">
            <button class="flex-1 flex justify-center items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg py-2 px-3 transition-colors border border-outline-variant/20 dark:border-outline/20" onclick="document.getElementById('theme-toggle').click()">
                <span class="material-symbols-outlined mr-2" data-icon="dark_mode">dark_mode</span>
                <span class="font-label-bold text-sm">Theme</span>
            </button>
            <button class="flex-1 flex justify-center items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg py-2 px-3 transition-colors border border-outline-variant/20 dark:border-outline/20" onclick="document.getElementById('rtl-toggle').click()">
                <span class="font-label-bold text-sm mr-2" style="width: 24px; text-align: center;">RTL</span>
                <span class="font-label-bold text-sm">RTL</span>
            </button>
        </div>
        
        <button class="w-full font-label-bold text-label-bold bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase tracking-wider" onclick="window.location.href='contact.html'">
            Get a Quote
        </button>
    </div>
</div>

<!-- Mobile header substitute to open side nav (only visible xl:hidden) -->
<div class="xl:hidden fixed top-0 w-full h-[70px] bg-surface dark:bg-inverse-surface border-b border-outline-variant/30 z-40 flex items-center justify-between px-4">
    <a href="home.html" class="flex items-center gap-3 w-fit font-display-lg-mobile text-display-lg-mobile font-bold text-primary dark:text-white hover:opacity-80 transition-opacity">
        <img src="images/logo.png" alt="ChefRent Pro Logo" class="h-8 w-8 object-cover rounded-full shadow-sm border border-outline-variant/50">
        <span>ChefRent Pro</span>
    </a>
    <button class="p-2 text-on-surface dark:text-on-tertiary-container" onclick="toggleMobileNav()">
        <span class="material-symbols-outlined" data-icon="menu">menu</span>
    </button>
</div>

<script>
function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    nav.classList.toggle('translate-x-full');
    if (backdrop.classList.contains('hidden')) {
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    } else {
        backdrop.classList.add('opacity-0');
        setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
}
</script>
`;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const navEndIndex = content.indexOf('</nav>');
    if (navEndIndex === -1) continue;

    let targetRegex = /<\/nav>[\s\S]*?(?=<main\b)/i;
    let mainMatch = content.match(targetRegex);

    if (mainMatch) {
        const pageName = file;
        let activeReplacement = cleanMobileNav;
        
        const regexHref = new RegExp(`<a class="group flex items-center text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high dark:hover:bg-tertiary-container rounded-lg p-3 transition-colors hover:text-primary dark:hover:text-primary-fixed" href="${pageName}">`);
        activeReplacement = activeReplacement.replace(
            regexHref,
            `<a class="group flex items-center bg-secondary-container text-on-secondary-container rounded-lg p-3 transition-colors scale-98 hover:bg-secondary/10 dark:hover:bg-secondary-fixed/10" href="${pageName}">`
        );
        
        let replaced = content.substring(0, navEndIndex + 6) + '\n' + activeReplacement + '\n' + content.substring(mainMatch.index + mainMatch[0].length);

        replaced = replaced.replace(/<main>\s*(<!-- Main Content -->)?\s*<main /gi, '$1\n<main ');
        replaced = replaced.replace(/<main>\s*<main\b/gi, '<main');
        
        fs.writeFileSync(filePath, replaced);
        console.log('Fixed ' + file);
    } else {
        console.log('Could not find <main> in ' + file);
    }
}
