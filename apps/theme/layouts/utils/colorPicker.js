

function colorPicker ( colorTags, body ){
    let colorSet = [];
    colorTags = JSON.parse( JSON.stringify(colorTags) );
    // console.log(colorTags);

    if( colorTags === null ){
        console.log("Color tags are empty.")
        colorSet.push( body.getPropertyValue("--webiny-theme-color-secondary") );
        return colorSet;
    }

    colorTags.map((tag)=>{
        switch(tag){
            case "menu-color-primary" :
                colorSet.push( body.getPropertyValue("--webiny-theme-color-primary") );
                break;
            case "menu-color-secondary" :
                colorSet.push( body.getPropertyValue("--webiny-theme-color-secondary") );
                break;
            case "menu-color-third" :
                colorSet.push( body.getPropertyValue("--webiny-theme-color-third") );
                break;
            default :
                colorSet.push( body.getPropertyValue("--webiny-theme-color-primary") );
                break;
        }
    })

    return colorSet;
}

export default colorPicker;