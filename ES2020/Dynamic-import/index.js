const path ='/about';

if (path === '/home') {
    import('./home');
}else if (path === '/about') {
    import('./about');
}