/* 
    Documatize
        Essence Of Zen's library that makes it possible to rip content out of a webpage into a display that allows 

    Zane "ZenOokami" Blalock   
    https://EssenceOfZen.org/
 */


export function sectionPrint(content, css_files){
    var window_section = window.open();
    if(css_array.length == 0 || css_array == null){
    }else{
        for(file in css_array){
            window_section = window.document.write("<link rel='stylesheet' type='text/css' href='" + css_array[file] + "'>");
        }
    }
    window_section.document.write(content);
    window_section.print();
    window_section.close();
}





/* PHP Serverside */