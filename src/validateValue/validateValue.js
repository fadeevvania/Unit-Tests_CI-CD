const valitateValue = (value)=>{
    if (value < 0 || value > 100 ) {
        return false;
    }
    return true;
}

module.exports = valitateValue;