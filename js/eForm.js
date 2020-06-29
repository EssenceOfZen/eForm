/*Essence-FORM (javascript)
    JavaScript for Web Applications for Essence of Zen
    Http://EssenceOfZen.org/
        - Zane "ZenOokami" Blalock
    Version: --
    License:

    Directions:

    Thank yous:


    Notes:
        

    Table of Contents

*/


export function test() {
    console.log("test");
}

// Adjust elements to react to the sticky navbar
export function adjustBaseElements() {
    var navbar_offset_height = document.getElementById("navBar").offsetHeight;
    var base_content = document.getElementById('baseContent');
    var base_content_offset_height = base_content.offsetHeight;

    document.getElementById("sideNav").style.top = navbar_offset_height;
    document.getElementById("sideOption").style.top = navbar_offset_height;

    /* Making sure the footer is always at the bottom of the screen - because we have 3 major elements to consider 
        (Navbar, main content in body and footer) we check for those 3 offset heights and recalculate the sizing.
    */
    if(base_content_offset_height < window.innerHeight){
        console.log("adjustBaseElements() was called")
        
    }

}

export function navbarShadow() {
    var offset = document.getElementById("navBar").offsetHeight;
    if (window.pageYOffset > offset) {
        document.getElementById("navBar").style.boxShadow = "0px 2px 10px #333333";
        
    } else {
        document.getElementById("navBar").style.boxShadow = "0px 0px 0px #333333";
        
    }
}

// Popup menus
//  Would it be better to not use element_id but rather the element object as the parameter instead?
export function showPopupMenu(element_id) {
    var element = document.getElementById(element_id);
    element.style.opacity = 1;
    element.style.top = (window.outerHeight / 3.5) + window.pageYOffset;
}

export function hidePopupMenu(element_id) {
    var element = document.getElementById(element_id);
    element.style.opacity = 0;
    element.style.top = -1000;
}

// Phantom Menus
export function showPhantomMenu(element_id){
    var element = document.getElementById(element_id);
    element.style.top = (window.outerHeight / 3.5) + window.pageYOffset;

    element.style.visibility = "visible";
    element.style.opacity = "1";
}

export function hidePhantomMenu(element_id){
    var element = document.getElementById(element_id);
    element.style.opacity = "0";
    element.style.visibility = "hidden";
}

// Side Panel - Covers the Screen
export function openSidePanelCover(navigation_id, nav_width) {
    document.getElementById(navigation_id).style.width = nav_width;
}

export function closeSidePanelCover(navigation_id) {
    document.getElementById(navigation_id).style.width = 0;
}

export function toggleSidePanelCover(navigation_id, nav_width) {
    var current_nav_width = document.getElementById(navigation_id).style.width;
    console.log(current_nav_width);
    if (current_nav_width < nav_width || current_nav_width == "" || current_nav_width == null) {
        openSidePanelCover(navigation_id, nav_width);
    } else {
        closeSidePanelCover(navigation_id);
    }
}

// Side Panel - Pushes the Screen
export function openSidePanelPush(navigation_id, base_content, nav_width) {
    document.getElementById(navigation_id).style.width = nav_width;
    document.getElementById(base_content).style.marginLeft = nav_width;
}

export function closeSidePanelPush(navigation_id, base_content) {
    document.getElementById(navigation_id).style.width = 0;
    document.getElementById(base_content).style.marginLeft = 0;
}

export function toggleSidePanelPush(navigation_id, base_content){
    var current_nav_width = document.getElementById(navigation_id).style.width;
    console.log(current_nav_width);
    if(current_nav_width > 0 && document.getElementById(base_content).style.width > 0){
        closeSidePanelPush(navigation_id, base_content);
    }else{
        openSidePanelPush(navigation_id, base_content);
    }
}