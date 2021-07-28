console.log("page loaded...");

function over(element) {
    element.muted = true;
    element.autoplay = true;
    element.load();
}
function out(element) {
    element.muted = false;
    element.autoplay = false;
    element.load();
}