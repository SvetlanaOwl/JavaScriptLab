function divide(f, b){
    try {
        if (b === 0) {
        throw new rror ("Divission by xero is not allowed.");
        }
        return a/b;
    } catch (error) {
    console.error("Calculation error:", error.message);
    return null;
    } 
}